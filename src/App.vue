<script setup lang="ts">
	import { shallowRef, ref } from "vue";
	import type { DomEventHandler, YMap, YMapLocationRequest } from '@yandex/ymaps3-types';
	import { 
		YandexMap,
		YandexMapDefaultSchemeLayer, 
		YandexMapDefaultFeaturesLayer, 
		YandexMapListener,
		YandexMapControls,
		YandexMapGeolocationControl, 
		YandexMapZoomControl
	} from "vue-yandex-maps";


	const map = shallowRef<null | YMap>(null);

	const LOCATION = ref<YMapLocationRequest>({
		center: [0, 0],
		zoom: 15
	});

	const success = ({ coords }: { coords: GeolocationCoordinates }) => {
		const { latitude, longitude } = coords;

		LOCATION.value = {
			center: [longitude, latitude],
			zoom: 15
		}
	}

	const error = ({ message }: { message: string }) => {
		console.log(message);
	}

	navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });

	const logMapClick: DomEventHandler = (object, event) => console.log(object, event);
</script>


<template>
	<yandex-map 
		v-model="map" 
		:settings="{
			location: {
				...LOCATION,
				duration: 2500
			},
			showScaleInCopyrights: true
		}" 
		real-settings-location
	>
		<YandexMapDefaultSchemeLayer/>
		<YandexMapDefaultFeaturesLayer/>
		<YandexMapListener :settings="{ onClick: logMapClick }"/>
		<yandex-map-controls :settings="{ position: 'right', orientation: 'vertical' }">
			<YandexMapZoomControl/>
			<YandexMapGeolocationControl/>
    </yandex-map-controls>
	</yandex-map>
</template>


<style scoped lang="scss">
	.map {
		height: 100%;
		width: 100%;
	}
</style>
