<template>
	<span :class="class">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: 'AppSpan',
	props: ['class'],
}
</script>
