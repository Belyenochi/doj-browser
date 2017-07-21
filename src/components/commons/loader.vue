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
@import '../../styles/index';

@loader-speed: 0.6s;
@loader-line-width: 0.2em;
@loader-line-color: @light-blue-a200;
@loader-fill-color: @grey-500;
@loader-border-color: @loader-line-color @loader-line-color @loader-fill-color @loader-fill-color;

@mini    : @14px;
@tiny    : @16px;
@small   : @24px;
@medium  : @32px;
@large   : @48px;
@big     : @52px;
@huge    : @58px;
@massive : @64px;

@miniOffset: 0em 0em 0em -(@mini / 2);
@tinyOffset: 0em 0em 0em -(@tiny / 2);
@smallOffset: 0em 0em 0em -(@small / 2);
@mediumOffset: 0em 0em 0em -(@medium / 2);
@largeOffset: 0em 0em 0em -(@large / 2);
@bigOffset: 0em 0em 0em -(@big / 2);
@hugeOffset: 0em 0em 0em -(@huge / 2);
@massiveOffset: 0em 0em 0em -(@massive / 2);

@tinyFontSize: @relativeTiny;
@miniFontSize: @relativeMini;
@smallFontSize: @relativeSmall;
@mediumFontSize: @relativeMedium;
@largeFontSize: @relativeLarge;
@bigFontSize: @relativeBig;
@hugeFontSize: @relativeHuge;
@massiveFontSize: @relativeMassive;

@import '../../styles/commons/loader';
</style>
