import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { X, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withSequence,
  withDelay,
  Easing
} from 'react-native-reanimated';

export default function ModalsExample() {
  const { colors, fonts, getShadow } = useTheme();
  
  // Modal visibility states
  const [basicModalVisible, setBasicModalVisible] = useState(false);
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  
  // Animation values
  const buttonScale = useSharedValue(1);
  const modalScale = useSharedValue(0.8);
  const modalOpacity = useSharedValue(0);
  
  const animateButtonPress = () => {
    buttonScale.value = withSequence(
      withTiming(0.95, { duration: 100 }),
      withTiming(1, { duration: 100 })
    );
  };
  
  const showModalAnimation = () => {
    modalScale.value = withTiming(1, { duration: 300, easing: Easing.out(Easing.back(1.5)) });
    modalOpacity.value = withTiming(1, { duration: 300 });
  };
  
  const hideModalAnimation = (callback: () => void) => {
    modalScale.value = withTiming(0.8, { duration: 200 });
    modalOpacity.value = withTiming(0, { duration: 200 });
    
    setTimeout(() => {
      callback();
    }, 200);
  };
  
  const showBasicModal = () => {
    animateButtonPress();
    setBasicModalVisible(true);
    showModalAnimation();
  };
  
  const showAlertModal = () => {
    animateButtonPress();
    setAlertModalVisible(true);
    showModalAnimation();
  };
  
  const showSuccessModal = () => {
    animateButtonPress();
    setSuccessModalVisible(true);
    showModalAnimation();
  };
  
  const showConfirmModal = () => {
    animateButtonPress();
    setConfirmModalVisible(true);
    showModalAnimation();
  };
  
  const hideBasicModal = () => {
    hideModalAnimation(() => setBasicModalVisible(false));
  };
  
  const hideAlertModal = () => {
    hideModalAnimation(() => setAlertModalVisible(false));
  };
  
  const hideSuccessModal = () => {
    hideModalAnimation(() => setSuccessModalVisible(false));
  };
  
  const hideConfirmModal = () => {
    hideModalAnimation(() => setConfirmModalVisible(false));
  };
  
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });
  
  const modalAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: modalOpacity.value,
      transform: [{ scale: modalScale.value }],
    };
  });
  
  return (
    <View style={styles.container}>
      {/* Modal Trigger Buttons */}
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.primary }
            ]}
            onPress={showBasicModal}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Basic Modal
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.error.light }
            ]}
            onPress={showAlertModal}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Alert Modal
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.success.light }
            ]}
            onPress={showSuccessModal}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Success Modal
            </Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.warning.light }
            ]}
            onPress={showConfirmModal}
          >
            <Text style={[styles.buttonText, { color: colors.white, ...fonts.medium }]}>
              Confirm Modal
            </Text>
          </Pressable>
        </Animated.View>
      </View>
      
      {/* Basic Modal */}
      <Modal
        transparent={true}
        visible={basicModalVisible}
        onRequestClose={hideBasicModal}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <Animated.View 
            style={[
              styles.modalContainer,
              { backgroundColor: colors.surface },
              getShadow('large'),
              modalAnimatedStyle
            ]}
          >
            <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
              <Text style={[styles.modalTitle, { color: colors.text.primary, ...fonts.medium }]}>
                Basic Modal
              </Text>
              <Pressable onPress={hideBasicModal}>
                <X size={20} color={colors.text.secondary} />
              </Pressable>
            </View>
            
            <View style={styles.modalBody}>
              <Text style={[styles.modalText, { color: colors.text.primary, ...fonts.regular }]}>
                This is a basic modal dialog. Modals are used to show content that requires user attention or interaction.
              </Text>
            </View>
            
            <View style={[styles.modalFooter, { borderTopColor: colors.border }]}>
              <Pressable
                style={[
                  styles.modalButton,
                  { backgroundColor: 'transparent', borderColor: colors.border }
                ]}
                onPress={hideBasicModal}
              >
                <Text style={[styles.modalButtonText, { color: colors.text.primary, ...fonts.medium }]}>
                  Cancel
                </Text>
              </Pressable>
              
              <Pressable
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary }
                ]}
                onPress={hideBasicModal}
              >
                <Text style={[styles.modalButtonText, { color: colors.white, ...fonts.medium }]}>
                  OK
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </Modal>
      
      {/* Alert Modal */}
      <Modal
        transparent={true}
        visible={alertModalVisible}
        onRequestClose={hideAlertModal}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <Animated.View 
            style={[
              styles.modalContainer,
              styles.alertModal,
              { backgroundColor: colors.surface },
              getShadow('large'),
              modalAnimatedStyle
            ]}
          >
            <View style={styles.alertIconContainer}>
              <View style={[styles.alertIcon, { backgroundColor: colors.error.light + '20' }]}>
                <AlertCircle size={32} color={colors.error.light} />
              </View>
            </View>
            
            <Text style={[styles.alertTitle, { color: colors.text.primary, ...fonts.bold }]}>
              Error
            </Text>
            
            <Text style={[styles.alertMessage, { color: colors.text.secondary, ...fonts.regular }]}>
              Something went wrong while processing your request. Please try again later.
            </Text>
            
            <Pressable
              style={[
                styles.alertButton,
                { backgroundColor: colors.error.light }
              ]}
              onPress={hideAlertModal}
            >
              <Text style={[styles.alertButtonText, { color: colors.white, ...fonts.medium }]}>
                Close
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
      
      {/* Success Modal */}
      <Modal
        transparent={true}
        visible={successModalVisible}
        onRequestClose={hideSuccessModal}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <Animated.View 
            style={[
              styles.modalContainer,
              styles.alertModal,
              { backgroundColor: colors.surface },
              getShadow('large'),
              modalAnimatedStyle
            ]}
          >
            <View style={styles.alertIconContainer}>
              <View style={[styles.alertIcon, { backgroundColor: colors.success.light + '20' }]}>
                <CheckCircle size={32} color={colors.success.light} />
              </View>
            </View>
            
            <Text style={[styles.alertTitle, { color: colors.text.primary, ...fonts.bold }]}>
              Success!
            </Text>
            
            <Text style={[styles.alertMessage, { color: colors.text.secondary, ...fonts.regular }]}>
              Your changes have been saved successfully.
            </Text>
            
            <Pressable
              style={[
                styles.alertButton,
                { backgroundColor: colors.success.light }
              ]}
              onPress={hideSuccessModal}
            >
              <Text style={[styles.alertButtonText, { color: colors.white, ...fonts.medium }]}>
                Continue
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
      
      {/* Confirm Modal */}
      <Modal
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={hideConfirmModal}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <Animated.View 
            style={[
              styles.modalContainer,
              styles.alertModal,
              { backgroundColor: colors.surface },
              getShadow('large'),
              modalAnimatedStyle
            ]}
          >
            <View style={styles.alertIconContainer}>
              <View style={[styles.alertIcon, { backgroundColor: colors.warning.light + '20' }]}>
                <AlertTriangle size={32} color={colors.warning.light} />
              </View>
            </View>
            
            <Text style={[styles.alertTitle, { color: colors.text.primary, ...fonts.bold }]}>
              Confirm Action
            </Text>
            
            <Text style={[styles.alertMessage, { color: colors.text.secondary, ...fonts.regular }]}>
              Are you sure you want to delete this item? This action cannot be undone.
            </Text>
            
            <View style={styles.confirmButtons}>
              <Pressable
                style={[
                  styles.confirmButton,
                  { backgroundColor: 'transparent', borderColor: colors.border }
                ]}
                onPress={hideConfirmModal}
              >
                <Text style={[styles.confirmButtonText, { color: colors.text.primary, ...fonts.medium }]}>
                  Cancel
                </Text>
              </Pressable>
              
              <Pressable
                style={[
                  styles.confirmButton,
                  { backgroundColor: colors.warning.light }
                ]}
                onPress={hideConfirmModal}
              >
                <Text style={[styles.confirmButtonText, { color: colors.white, ...fonts.medium }]}>
                  Delete
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 18,
  },
  modalBody: {
    padding: 16,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    gap: 12,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  modalButtonText: {
    fontSize: 14,
  },
  alertModal: {
    padding: 24,
    alignItems: 'center',
  },
  alertIconContainer: {
    marginBottom: 16,
  },
  alertIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
    textAlign: 'center',
  },
  alertButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  alertButtonText: {
    fontSize: 14,
  },
  confirmButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  confirmButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  confirmButtonText: {
    fontSize: 14,
  },
});