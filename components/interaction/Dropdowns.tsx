import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { ChevronDown, ChevronUp, User, Mail, Flag, Phone, Check } from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

export default function Dropdowns() {
  const { colors, sizes, fonts, getShadow } = useTheme();
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  
  const [selectedOption1, setSelectedOption1] = useState('Select an option');
  const [selectedOption2, setSelectedOption2] = useState(null);
  
  // Animation values
  const dropdown1Height = useSharedValue(0);
  const dropdown2Height = useSharedValue(0);
  const dropdown3Height = useSharedValue(0);
  const buttonScale = useSharedValue(1);
  
  const options1 = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  
  const options2 = [
    { icon: User, label: 'Profile', value: 'profile' },
    { icon: Mail, label: 'Messages', value: 'messages' },
    { icon: Flag, label: 'Notifications', value: 'notifications' },
    { icon: Phone, label: 'Contacts', value: 'contacts' },
  ];
  
  const toggleDropdown1 = () => {
    animateButton();
    setDropdown1Open(!dropdown1Open);
    dropdown1Height.value = withTiming(dropdown1Open ? 0 : options1.length * 40, { duration: 300 });
  };
  
  const toggleDropdown2 = () => {
    animateButton();
    setDropdown2Open(!dropdown2Open);
    dropdown2Height.value = withTiming(dropdown2Open ? 0 : options2.length * 48, { duration: 300 });
  };
  
  const toggleDropdown3 = () => {
    animateButton();
    setDropdown3Open(!dropdown3Open);
    dropdown3Height.value = withTiming(dropdown3Open ? 0 : 200, { duration: 300 });
  };
  
  const animateButton = () => {
    buttonScale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  };
  
  const handleSelectOption1 = (option: string) => {
    setSelectedOption1(option);
    toggleDropdown1();
  };
  
  const handleSelectOption2 = (option: {icon: any, label: string, value: string}) => {
    setSelectedOption2(option);
    toggleDropdown2();
  };
  
  const dropdown1Style = useAnimatedStyle(() => {
    return {
      height: dropdown1Height.value,
      opacity: dropdown1Height.value > 0 ? 1 : 0,
    };
  });
  
  const dropdown2Style = useAnimatedStyle(() => {
    return {
      height: dropdown2Height.value,
      opacity: dropdown2Height.value > 0 ? 1 : 0,
    };
  });
  
  const dropdown3Style = useAnimatedStyle(() => {
    return {
      height: dropdown3Height.value,
      opacity: dropdown3Height.value > 0 ? 1 : 0,
    };
  });
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Basic Dropdown */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Basic Dropdown
        </Text>
        
        <View style={styles.dropdownContainer}>
          <Animated.View style={buttonAnimatedStyle}>
            <Pressable
              style={[
                styles.dropdownButton,
                { 
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  ...(dropdown1Open && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
                }
              ]}
              onPress={toggleDropdown1}
            >
              <Text 
                style={[
                  styles.dropdownButtonText, 
                  { 
                    color: selectedOption1 === 'Select an option' ? colors.text.secondary : colors.text.primary, 
                    ...fonts.regular 
                  }
                ]}
              >
                {selectedOption1}
              </Text>
              {dropdown1Open ? (
                <ChevronUp size={18} color={colors.text.secondary} />
              ) : (
                <ChevronDown size={18} color={colors.text.secondary} />
              )}
            </Pressable>
          </Animated.View>
          
          <Animated.View 
            style={[
              styles.dropdownListContainer,
              { 
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderTopWidth: 0,
              },
              dropdown1Style
            ]}
          >
            <ScrollView>
              {options1.map((option, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.dropdownItem,
                    pressed && { backgroundColor: colors.primary + '10' }
                  ]}
                  onPress={() => handleSelectOption1(option)}
                >
                  <Text 
                    style={[
                      styles.dropdownItemText, 
                      { 
                        color: colors.text.primary, 
                        ...fonts.regular 
                      }
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </View>
      
      {/* Icon Dropdown */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          With Icons
        </Text>
        
        <View style={styles.dropdownContainer}>
          <Animated.View style={buttonAnimatedStyle}>
            <Pressable
              style={[
                styles.dropdownButton,
                { 
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  ...(dropdown2Open && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })
                }
              ]}
              onPress={toggleDropdown2}
            >
              {selectedOption2 ? (
                <View style={styles.selectedOptionWithIcon}>
                  <selectedOption2.icon size={16} color={colors.primary} />
                  <Text 
                    style={[
                      styles.dropdownButtonText, 
                      { color: colors.text.primary, ...fonts.regular, marginLeft: 8 }
                    ]}
                  >
                    {selectedOption2.label}
                  </Text>
                </View>
              ) : (
                <Text 
                  style={[
                    styles.dropdownButtonText, 
                    { color: colors.text.secondary, ...fonts.regular }
                  ]}
                >
                  Select an option
                </Text>
              )}
              
              {dropdown2Open ? (
                <ChevronUp size={18} color={colors.text.secondary} />
              ) : (
                <ChevronDown size={18} color={colors.text.secondary} />
              )}
            </Pressable>
          </Animated.View>
          
          <Animated.View 
            style={[
              styles.dropdownListContainer,
              { 
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderTopWidth: 0,
              },
              dropdown2Style
            ]}
          >
            <ScrollView>
              {options2.map((option, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.iconDropdownItem,
                    pressed && { backgroundColor: colors.primary + '10' }
                  ]}
                  onPress={() => handleSelectOption2(option)}
                >
                  <option.icon size={16} color={colors.primary} />
                  <Text 
                    style={[
                      styles.iconDropdownItemText, 
                      { color: colors.text.primary, ...fonts.regular }
                    ]}
                  >
                    {option.label}
                  </Text>
                  
                  {selectedOption2 && selectedOption2.value === option.value && (
                    <Check size={16} color={colors.primary} />
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </View>
      
      {/* Dropdown Panel */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Dropdown Panel
        </Text>
        
        <View style={styles.dropdownContainer}>
          <Animated.View style={buttonAnimatedStyle}>
            <Pressable
              style={[
                styles.dropdownPanelButton,
                { 
                  backgroundColor: dropdown3Open ? colors.primary : colors.surface,
                  borderColor: dropdown3Open ? colors.primary : colors.border,
                }
              ]}
              onPress={toggleDropdown3}
            >
              <Text 
                style={[
                  styles.dropdownButtonText, 
                  { 
                    color: dropdown3Open ? colors.white : colors.text.primary, 
                    ...fonts.medium 
                  }
                ]}
              >
                Filter Options
              </Text>
              
              {dropdown3Open ? (
                <ChevronUp size={18} color={dropdown3Open ? colors.white : colors.text.secondary} />
              ) : (
                <ChevronDown size={18} color={dropdown3Open ? colors.white : colors.text.secondary} />
              )}
            </Pressable>
          </Animated.View>
          
          <Animated.View 
            style={[
              styles.dropdownPanelContainer,
              { 
                backgroundColor: colors.surface,
                borderColor: colors.border,
                ...getShadow('medium'),
              },
              dropdown3Style
            ]}
          >
            <ScrollView style={styles.panelScrollView}>
              <View style={styles.panelSection}>
                <Text style={[styles.panelSectionTitle, { color: colors.text.primary, ...fonts.medium }]}>
                  Date Range
                </Text>
                <View style={styles.panelOptions}>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { 
                        backgroundColor: colors.primary + '10',
                        borderColor: colors.primary
                      }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.primary, ...fonts.medium }]}>
                      Today
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { borderColor: colors.border }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.text.primary, ...fonts.regular }]}>
                      This Week
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { borderColor: colors.border }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.text.primary, ...fonts.regular }]}>
                      This Month
                    </Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={styles.panelSection}>
                <Text style={[styles.panelSectionTitle, { color: colors.text.primary, ...fonts.medium }]}>
                  Categories
                </Text>
                <View style={styles.panelOptions}>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { 
                        backgroundColor: colors.secondary + '10',
                        borderColor: colors.secondary
                      }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.secondary, ...fonts.medium }]}>
                      Technology
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { borderColor: colors.border }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.text.primary, ...fonts.regular }]}>
                      Design
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.panelOption,
                      { borderColor: colors.border }
                    ]}
                  >
                    <Text style={[styles.panelOptionText, { color: colors.text.primary, ...fonts.regular }]}>
                      Business
                    </Text>
                  </Pressable>
                </View>
              </View>
              
              <View style={styles.panelActions}>
                <Pressable
                  style={[
                    styles.panelButton,
                    { 
                      backgroundColor: 'transparent',
                      borderColor: colors.border
                    }
                  ]}
                  onPress={toggleDropdown3}
                >
                  <Text style={[styles.panelButtonText, { color: colors.text.primary, ...fonts.medium }]}>
                    Reset
                  </Text>
                </Pressable>
                
                <Pressable
                  style={[
                    styles.panelButton,
                    { 
                      backgroundColor: colors.primary,
                      borderColor: colors.primary
                    }
                  ]}
                  onPress={toggleDropdown3}
                >
                  <Text style={[styles.panelButtonText, { color: colors.white, ...fonts.medium }]}>
                    Apply
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  dropdownContainer: {
    position: 'relative',
    zIndex: 1, // Required for the dropdown to appear over other elements
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  dropdownButtonText: {
    fontSize: 14,
  },
  dropdownListContainer: {
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownItemText: {
    fontSize: 14,
  },
  selectedOptionWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  iconDropdownItemText: {
    fontSize: 14,
    marginLeft: 12,
    flex: 1,
  },
  dropdownPanelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  dropdownPanelContainer: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 10,
  },
  panelScrollView: {
    padding: 16,
  },
  panelSection: {
    marginBottom: 16,
  },
  panelSectionTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  panelOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  panelOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  panelOptionText: {
    fontSize: 12,
  },
  panelActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 8,
  },
  panelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  panelButtonText: {
    fontSize: 14,
  },
});