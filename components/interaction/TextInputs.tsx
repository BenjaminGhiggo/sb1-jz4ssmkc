import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { Mail, Lock, Eye, EyeOff, Search, X } from 'lucide-react-native';

export default function TextInputs() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [multiline, setMultiline] = useState('');
  
  return (
    <View style={styles.container}>
      {/* Standard Text Input */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: colors.text.secondary, ...fonts.medium }]}>
          Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              color: colors.text.primary,
              ...fonts.regular
            }
          ]}
          placeholder="Enter your name"
          placeholderTextColor={colors.text.disabled}
          value={text}
          onChangeText={setText}
        />
      </View>
      
      {/* Email Input with Icon */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: colors.text.secondary, ...fonts.medium }]}>
          Email
        </Text>
        <View
          style={[
            styles.iconInputContainer,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }
          ]}
        >
          <Mail size={18} color={colors.text.secondary} style={styles.inputIcon} />
          <TextInput
            style={[
              styles.iconInput,
              {
                color: colors.text.primary,
                ...fonts.regular
              }
            ]}
            placeholder="email@example.com"
            placeholderTextColor={colors.text.disabled}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
      
      {/* Password Input with Toggle */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: colors.text.secondary, ...fonts.medium }]}>
          Password
        </Text>
        <View
          style={[
            styles.iconInputContainer,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            }
          ]}
        >
          <Lock size={18} color={colors.text.secondary} style={styles.inputIcon} />
          <TextInput
            style={[
              styles.iconInput,
              {
                color: colors.text.primary,
                ...fonts.regular
              }
            ]}
            placeholder="Enter password"
            placeholderTextColor={colors.text.disabled}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <Pressable 
            style={styles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={18} color={colors.text.secondary} />
            ) : (
              <Eye size={18} color={colors.text.secondary} />
            )}
          </Pressable>
        </View>
      </View>
      
      {/* Search Input */}
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.searchInputContainer,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              ...getShadow('small')
            }
          ]}
        >
          <Search size={18} color={colors.text.secondary} style={styles.searchIcon} />
          <TextInput
            style={[
              styles.searchInput,
              {
                color: colors.text.primary,
                ...fonts.regular
              }
            ]}
            placeholder="Search..."
            placeholderTextColor={colors.text.disabled}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <Pressable 
              style={styles.clearButton}
              onPress={() => setSearch('')}
            >
              <X size={16} color={colors.text.secondary} />
            </Pressable>
          )}
        </View>
      </View>
      
      {/* Multiline Text Input */}
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { color: colors.text.secondary, ...fonts.medium }]}>
          Message
        </Text>
        <TextInput
          style={[
            styles.multilineInput,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              color: colors.text.primary,
              ...fonts.regular
            }
          ]}
          placeholder="Write your message here..."
          placeholderTextColor={colors.text.disabled}
          value={multiline}
          onChangeText={setMultiline}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  iconInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
  },
  passwordToggle: {
    padding: 4,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
  },
  clearButton: {
    padding: 4,
  },
  multilineInput: {
    minHeight: 100,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
});