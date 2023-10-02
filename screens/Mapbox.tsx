import * as React from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps"

MapboxGL.setAccessToken("pk.eyJ1IjoiZXhvdHJhaWxzIiwiYSI6ImNsODJnemJ5bTBweGgzd21rM3NkZHg1dTcifQ.Z5S3APmFZB4YZ19vEHlXwA")
MapboxGL.setConnected(true)
MapboxGL.setTelemetryEnabled(false)
MapboxGL.setWellKnownTileServer("Mapbox")

const MapBox = () => {
    return (
        <View className="flex-1">
            <MapboxGL.MapView
                zoomEnabled={true}
                styleURL="mapbox://styles/mapbox/streets-v12"
                rotateEnabled={true}
            >

                <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={[10.181667, 36.80389]}
                    pitch={60}
                    animationMode={"flyTo"}
                    animationDuration={6000}
                />

            </MapboxGL.MapView>
        </View>
    );
};


export default MapBox