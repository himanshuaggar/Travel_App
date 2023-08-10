import React, { useState} from "react";
import { Image, View, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { HeartIcon } from 'react-native-heroicons/solid';

const FavoriteButton = ({active, style}) => {
    const [isFavourite, toggleFavourite] = useState(false);
    return(
        <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)} style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isFavourite? "red": "white"} />
        </TouchableOpacity>
    )
}

export default FavoriteButton;