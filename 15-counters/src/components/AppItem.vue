<template>
	<span :class="class">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'AppItem',
	props: ['class']
}
</script>
