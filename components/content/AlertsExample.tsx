import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence,
  runOnJS,
  Easing
} from 'react-native-reanimated';

export default function AlertsExample() {
  const { colors, fonts, getShadow } = useTheme();
  
  // Alert visibility states
  const [infoAlertVisible, setInfoAlertVisible] = useState(false);
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [warningAlertVisible, setWarningAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);
  
  // Animation values
  const buttonScale = useSharedValue(1);
  const alertHeight = useSharedValue(0);
  const alertOpacity = useSharedValue(0);
  
  const animateButtonPress = () => {
    buttonScale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  };
  
  const showAlertAnimation = () => {
    alertHeight.value = withTiming(56, { duration: 300, easing: Easing.out(Easing.back(1.2)) });
    alertOpacity.value = withTiming(1, { duration: 300 });
  };
  
  const hideAlertAnimation = (callback: () => void) => {
    alertHeight.value = withTiming(0, { duration: 200 });
    alertOpacity.value = withTiming(0, { duration: 200 });
    
    setTimeout(() => {
      callback();
    }, 200);
  };
  
  const showInfoAlert = () => {
    animateButtonPress();
    setInfoAlertVisible(true);
    showAlertAnimation();
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (infoAlertVisible) {
        hideInfoAlert();
      }
    }, 3000);
  };
  
  const showSuccessAlert = () => {
    animateButtonPress();
    setSuccessAlertVisible(true);
    showAlertAnimation();
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      if (successAlertVisible) {
        hideSuccessAlert();
      }
    }, 3000);
  };
  
  const showWarningAlert = () => {
    animateButtonPress();
    setWarningAlertVisible(true);
    showAlertAnimation();
  };
  
  const showErrorAlert = () => {
    animateButtonPress();
    setErrorAlertVisible(true);
    showAlertAnimation();
  };
  
  const hideInfoAlert = () => {
    hideAlertAnimation(() => setInfoAlertVisible(false));
  };
  
  const hideSuccessAlert = () => {
    hideAlertAnimation(() => setSuccessAlertVisible(false));
  };
  
  const hideWarningAlert = () => {
    hideAlertAnimation(() => setWarningAlertVisible(false));
  };
  
  const hideErrorAlert = () => {
    hideAlertAnimation(() => setErrorAlertVisible(false));
  };
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  const alertAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: alertHeight.value,
      opacity: alertOpacity.value,
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Alert Trigger Buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.primary }
            ]}
            onPress={showInfoAlert}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Info Alert
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.success.light }
            ]}
            onPress={showSuccessAlert}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Success Alert
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.warning.light }
            ]}
            onPress={showWarningAlert}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Warning Alert
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.error.light }
            ]}
            onPress={showErrorAlert}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Error Alert
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Alerts Container - Fixed at the top */}
      <View style={styles.alertsContainer}>
        {/* Info Alert */}
        {infoAlertVisible && (
          <Animated.View 
            style={[
              styles.alert,
              { backgroundColor: colors.primary + '15', borderColor: colors.primary },
              getShadow('small'),
              alertAnimatedStyle
            ]}
          >
            <Info size={20} color={colors.primary} />
            <Text style={[styles.alertText, { color: colors.text.primary, ...fonts.regular }]}>
              This is an information message.
            </Text>
            <Pressable onPress={hideInfoAlert}>
              <X size={18} color={colors.text.secondary} />
            </Pressable>
          </Animated.View>
        )}
        
        {/* Success Alert */}
        {successAlertVisible && (
          <Animated.View 
            style={[
              styles.alert,
              { backgroundColor: colors.success.light + '15', borderColor: colors.success.light },
              getShadow('small'),
              alertAnimatedStyle
            ]}
          >
            <CheckCircle size={20} color={colors.success.light} />
            <Text style={[styles.alertText, { color: colors.text.primary, ...fonts.regular }]}>
              Your changes have been saved successfully!
            </Text>
            <Pressable onPress={hideSuccessAlert}>
              <X size={18} color={colors.text.secondary} />
            </Pressable>
          </Animated.View>
        )}
        
        {/* Warning Alert */}
        {warningAlertVisible && (
          <Animated.View 
            style={[
              styles.alert,
              { backgroundColor: colors.warning.light + '15', borderColor: colors.warning.light },
              getShadow('small'),
              alertAnimatedStyle
            ]}
          >
            <AlertTriangle size={20} color={colors.warning.light} />
            <Text style={[styles.alertText, { color: colors.text.primary, ...fonts.regular }]}>
              Warning: This action may have consequences.
            </Text>
            <Pressable onPress={hideWarningAlert}>
              <X size={18} color={colors.text.secondary} />
            </Pressable>
          </Animated.View>
        )}
        
        {/* Error Alert */}
        {errorAlertVisible && (
          <Animated.View 
            style={[
              styles.alert,
              { backgroundColor: colors.error.light + '15', borderColor: colors.error.light },
              getShadow('small'),
              alertAnimatedStyle
            ]}
          >
            <AlertCircle size={20} color={colors.error.light} />
            <Text style={[styles.alertText, { color: colors.text.primary, ...fonts.regular }]}>
              Error: Something went wrong. Please try again.
            </Text>
            <Pressable onPress={hideErrorAlert}>
              <X size={18} color={colors.text.secondary} />
            </Pressable>
          </Animated.View>
        )}
      </View>
      
      {/* Alert Types Examples (Static) */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.secondary, ...fonts.medium }]}>
          Alert Types
        </Text>
        
        <View 
          style={[
            styles.alertExample,
            { backgroundColor: colors.primary + '15', borderColor: colors.primary },
          ]}
        >
          <Info size={20} color={colors.primary} />
          <Text style={[styles.alertExampleText, { color: colors.text.primary, ...fonts.regular }]}>
            Info: This is an information message.
          </Text>
        </View>
        
        <View 
          style={[
            styles.alertExample,
            { backgroundColor: colors.success.light + '15', borderColor: colors.success.light },
          ]}
        >
          <CheckCircle size={20} color={colors.success.light} />
          <Text style={[styles.alertExampleText, { color: colors.text.primary, ...fonts.regular }]}>
            Success: Operation completed successfully.
          </Text>
        </View>
        
        <View 
          style={[
            styles.alertExample,
            { backgroundColor: colors.warning.light + '15', borderColor: colors.warning.light },
          ]}
        >
          <AlertTriangle size={20} color={colors.warning.light} />
          <Text style={[styles.alertExampleText, { color: colors.text.primary, ...fonts.regular }]}>
            Warning: Please review the information.
          </Text>
        </View>
        
        <View 
          style={[
            styles.alertExample,
            { backgroundColor: colors.error.light + '15', borderColor: colors.error.light },
          ]}
        >
          <AlertCircle size={20} color={colors.error.light} />
          <Text style={[styles.alertExampleText, { color: colors.text.primary, ...fonts.regular }]}>
            Error: Something went wrong.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
  alertsContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  alert: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  alertText: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 12,
  },
  section: {
    marginTop: 200, // Space for the floating alerts
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  alertExample: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    marginBottom: 12,
  },
  alertExampleText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 12,
  },
});