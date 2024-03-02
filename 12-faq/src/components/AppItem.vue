<template>
<div class="item">
	<div class="item__qa qa">
		<slot name="qa"></slot>
	</div>
	<div class="item__btns btns">
		<slot name="btns"></slot>
	</div>
</div>
</template>

<script>
export default {
name: 'AppItem',
}
</script>


<style>

</style>