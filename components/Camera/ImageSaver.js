import { Constants, Camera, FileSystem, Permissions } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Slider, Vibration } from 'react-native';
import GalleryScreen from './GalleryScreen';
import Quest from '../../server/models/Quest';
let photos = ["/path/to/file.jpg","/path/to/file.jpg","/path/to/file.jpg"];
let photoUrl = "http://localhost:3333/userdata/photos/"

export default class ImageSaver extends React.Component{
    
_savePhotos(photos){
    let i = 0;
    photos.forEach(function()  {
        const photo ={
            uri: photos[i],
            type: "image/jpeg",
            name: "photo"
        }
        const body = new FormData();
        body.append('file', file)

        fetch(photoUrl, {
            method: 'POST',
            body
        });
        i++;
    });
}    
    
    
}