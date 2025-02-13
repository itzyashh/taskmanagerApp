# Task Manager App 📝

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Features

- ✨ Task Management
  - Create, edit, and delete tasks
  - Mark tasks as complete/incomplete
  - Set due dates for tasks
  - Search and filter tasks
  - Swipe-to-delete functionality

- 🎨 UI/UX
  - Clean and modern interface
  - Dark/Light theme support
  - Responsive design
  - Smooth animations
  - Form validation

- 💾 Data Management
  - Local storage persistence
  - Redux state management
  - Type-safe development

## Technologies Used

### Core
- [Expo](https://expo.dev) - Development framework
- [React Native](https://reactnative.dev/) - Mobile framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### State Management & Data
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) - Redux development tools
- [AsyncStorage](https://react-native-async-storage.github.io/) - Local storage

### UI Components & Styling
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations
- [Expo Router](https://docs.expo.dev/router/introduction/) - Navigation
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) - Icons

### Form & Validation
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Zod](https://zod.dev/) - Schema validation

### Date Handling
- [Day.js](https://day.js.org/) - Date manipulation

## Project Structure

```
taskManagerApp/
├── src/
│   ├── app/                 # Expo Router pages
│   ├── components/          # Reusable components
│   ├── constants/          # App constants and theme
│   ├── store/             # Redux store and slices
│   ├── types/             # TypeScript types
│   └── db/                # Local storage handling
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npx expo build:android  # For Android
npx expo build:ios      # For iOS
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Known Issues

- Date formatting might need adjustment in different locales
- Theme changes require app restart (to be fixed)

## Future Enhancements

- [ ] Task categories
- [ ] Task priorities
- [ ] Push notifications for due dates
- [ ] Task sharing
- [ ] Cloud sync
- [ ] Statistics and progress tracking

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
