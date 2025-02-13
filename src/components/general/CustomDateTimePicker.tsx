import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useController } from 'react-hook-form'
import dayjs from 'dayjs'
import { Text, View, useThemeColor } from './Themed'
import responsive from '@/src/constants/scalling'

type CustomDateTimePickerProps = {
    label?: string
    placeholder?: string
    name: string
    mode?: 'date' | 'time' | 'datetime'
}

const CustomDateTimePicker: FC<CustomDateTimePickerProps> = ({ 
    label, 
    placeholder = 'Select date and time', 
    name, 
    mode 
}) => {
    // Get theme colors
    const backgroundColor = useThemeColor({}, 'background')
    const textColor = useThemeColor({}, 'textPrimary')
    const placeholderColor = useThemeColor({}, 'textSecondary')
    const borderColor = useThemeColor({}, 'border')
    const errorColor = useThemeColor({}, 'error')
    const primaryColor = useThemeColor({}, 'primary')

    const {
        field: { value, onChange },
        fieldState: { error },
    } = useController({name})

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (date: Date) => {
        const formattedDate = dayjs(date).format('DD/MM/YYYY HH:mm')
        onChange(formattedDate)
        hideDatePicker()
    }

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, { color: textColor }]}>{label}</Text>}
            <TouchableOpacity 
                onPress={showDatePicker}
                style={[styles.input, {
                    backgroundColor: backgroundColor,
                    borderColor: error ? errorColor : borderColor,
                }]}
            >
                <Text style={[styles.inputText, { 
                    color: value ? textColor : placeholderColor 
                }]}>
                    {value || placeholder}
                </Text>
            </TouchableOpacity>
            
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                date={value ? dayjs(value, 'DD/MM/YYYY HH:mm').toDate() : new Date()}
                mode={mode || 'datetime'}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                accentColor={primaryColor}
            />
            {error && (
                <Text style={[styles.error, { color: errorColor }]}>
                    {error.message}
                </Text>
            )}
        </View>
    )
}

export default CustomDateTimePicker

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        minHeight: responsive.height(48),
        justifyContent: 'center',
    },
    inputText: {
        fontSize: responsive.fontSize(16),
    },
    error: {
        fontSize: responsive.fontSize(12),
        marginTop: responsive.margin(4),
    },
})