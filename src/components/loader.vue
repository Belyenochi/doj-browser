<template>
  <div class="loader">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<style lang="less">
@import '../styles/index';

@loaderTopOffset: 50%;
@loaderLeftOffset: 50%;
*, :after, :before {
    box-sizing: inherit;
}
.loader {
  position: absolute;
  top: @loaderTopOffset;
  left: @loaderLeftOffset;
  margin: 0px;
  text-align: center;
  z-index: 1000;
  transform: translateX(-50%) translateY(-50%);
}

.ui.loader:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;

  border-radius: 500rem;
  border: @loaderLineWidth solid @loaderFillColor;
}

.loader:after {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;

  border-radius: 500rem;

  border-color: @loaderLineColor @loaderFillColor @loaderFillColor;
  border-style: solid;
  border-width: @loaderLineWidth;

  animation: loader @loaderSpeed linear;
  animation-iteration-count: infinite; 

  box-shadow: 0px 0px 0px 1px transparent;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@emSize   : 14px;
@fontSize : 14px;
@mediumSize      : (32 / 14);

@medium: unit( round(@mediumSize * @emSize) / @emSize, rem);
@relativeMedium  : unit( round(@mediumSize * @emSize) / @emSize, em);
@mediumFontSize: @relativeMedium;
@mediumOffset: 0em 0em 0em -(@medium / 2);

.loader {
  width: @medium;
  height: @medium;
  font-size: @mediumFontSize;
}

.loader:after {
  width: @medium;
  height: @medium;
  margin: @mediumOffset;
}

</style>
