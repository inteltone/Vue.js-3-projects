<template>
<span :class="class">
	<slot></slot>
</span>
</template>

<script>
export default {
	name: 'AppButtonIcon',
	props: ['class'],
}
</script>


<style>

</style>