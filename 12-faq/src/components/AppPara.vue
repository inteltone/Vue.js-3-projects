<template>
	<p :class="class">
		<slot></slot>
	</p>
</template>

<script>
export default {
	name: 'AppPara',
	props: ['class']
}
</script>


<style>

</style>