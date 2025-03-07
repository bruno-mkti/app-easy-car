import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ride.style.js";
import icons from "../../constants/icons.js";
import { useCallback, useEffect, useState } from "react";
import { api, HandleError } from "../../constants/api.js";
import { useFocusEffect } from "@react-navigation/native";

function Ride(props) {

    const userId = 2; // id. do usuario logado no app (vem do login)
    const [rides, setRides] = useState([]);

    function ClickRide(id) {
        props.navigation.navigate("ride-detail", {
            rideId: id,
            userId: userId
        });
    }

    async function RequestRides() {

        try {
            const response = await api.get("/rides/drivers/" + userId);

            if (response.data)
                setRides(response.data);

        } catch (error) {
            HandleError(error);
        }
    }

    useFocusEffect(useCallback(() => {
        RequestRides();
    }, []));

    return <View style={styles.container}>
        <FlatList data={rides}
            keyExtractor={(ride) => ride.ride_id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <TouchableOpacity style={styles.ride}
                    onPress={() => ClickRide(item.ride_id)}>
                    <View style={styles.containerName}>
                        {
                            item.driver_user_id == userId && <Image source={icons.car} style={styles.car} />
                        }

                        <Text style={styles.name}>{item.passenger_name}</Text>
                    </View>
                    <Text style={styles.address}>Origem: {item.pickup_address}</Text>
                    <Text style={styles.address}>Destino: {item.dropoff_address}</Text>
                </TouchableOpacity>
            }}
        />
    </View>
}

export default Ride;