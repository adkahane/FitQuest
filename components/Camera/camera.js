import { Constants, Camera, FileSystem, Permissions } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider, Vibration } from 'react-native';
import GalleryScreen from './GalleryScreen';
// import isIPhoneX from 'react-native-is-iphonex';

const landmarkSize = 2;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

export default class CameraScreen extends React.Component {
  state = {
    flash: 'auto',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    photoId: 1,
    showGallery: false,
    photos: [],
    permissionsGranted: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  toggleView() {
    this.setState({
      showGallery: !this.state.showGallery,
    });
  }

  setRatio(ratio) {
    this.setState({
      ratio,
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth,
    });
  }

  takePicture = async function() {
    if (this.camera) {
      this.camera.takePictureAsync().then(data => {
        FileSystem.moveAsync({
          from: data.uri,
          to: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`,
        }).then(() => {
          this.setState({
            photoId: this.state.photoId + 1,
          });
          Vibration.vibrate();
        });
      });
    }
  };

  renderGallery() {
    return <GalleryScreen onPress={this.toggleView.bind(this)} />;
  }

  renderNoPermissions() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Text style={{ color: 'white' }}>
          Camera permissions not granted - cannot open camera preview.
        </Text>
      </View>
    );
  }

  renderCamera() {
    return (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
        }}
        type={this.state.type}
        ratio={this.state.ratio}
        focusDepth={this.state.depth}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: Constants.statusBarHeight / 2,
          }}>
        </View>
        <View
          style={{
            flex: 0.4,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginBottom: -5,
          }}>
        </View>
        <View
          style={{
            flex: 0.1,
            // paddingBottom: isIPhoneX ? 20 : 0,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity
            style={[styles.flipButton, styles.picButton, { flex: 0.3, alignSelf: 'flex-end' }]}
            onPress={this.takePicture.bind(this)}>
            <Text style={styles.flipText}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flipButton, styles.galleryButton, { flex: 0.25, alignSelf: 'flex-end' }]}
            onPress={this.toggleView.bind(this)}>
            <Text style={styles.flipText}> Gallery </Text>
          </TouchableOpacity>
        </View>
        {this.renderFaces()}
        {this.renderLandmarks()}
      </Camera>
    );
  }

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = this.state.showGallery ? this.renderGallery() : cameraScreenContent;
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  navigation: {
    flex: 1,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  item: {
    margin: 4,
    backgroundColor: 'indianred',
    height: 35,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  galleryButton: {
    backgroundColor: 'indianred',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
  },
});