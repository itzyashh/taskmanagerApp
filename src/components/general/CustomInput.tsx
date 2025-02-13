import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { Text, View, useThemeColor } from './Themed'
import responsive from '@/src/constants/scalling'
import { useController } from 'react-hook-form'

interface CustomInputProps extends TextInputProps {
  label?: string
  name: string
  multiline?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label,
  name,
  multiline,
  ...props 
}) => {
  // Get theme colors
  const backgroundColor = useThemeColor({}, 'background')
  const textColor = useThemeColor({}, 'textPrimary')
  const placeholderColor = useThemeColor({}, 'textSecondary')
  const borderColor = useThemeColor({}, 'border')
  const errorColor = useThemeColor({}, 'error')

  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name })

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: textColor }]}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          multiline && styles.textArea,
          { 
            backgroundColor: backgroundColor,
            borderColor: error ? errorColor : borderColor,
            color: textColor
          }
        ]}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={placeholderColor}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        {...props}
      />
      {error && (
        <Text style={[styles.error, { color: errorColor }]}>
          {error.message}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: responsive.margin(16),
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: responsive.fontSize(14),
    fontWeight: '600',
    marginBottom: responsive.margin(8),
  },
  input: {
    borderWidth: 1,
    borderRadius: responsive.borderRadius(8),
    padding: responsive.padding(12),
    fontSize: responsive.fontSize(16),
  },
  textArea: {
    height: responsive.height(100),
    textAlignVertical: 'top',
  },
  error: {
    fontSize: responsive.fontSize(12),
    marginTop: responsive.margin(4),
  },
})

export default CustomInput