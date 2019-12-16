<template>
  <div class="form-group">
    <input
      id="fname"
      class="form-control"
      type="text"
      placeholder="Placeholder"
      required
    />
    <label for="fname">First name</label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  border-bottom: 2px solid $color-mono-7;
}
input {
  position: relative;
  display: block;
  width: 100%;
  transition: all 0.2s ease-in-out;
  border: 0;
  background: white;
  padding: space(6) space(2) space(2) space(2);
  font-size: 16px;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  display: block;
  width: 100%;
  font-size: 16px;
  cursor: text;
  transition: all 0.15s ease-in-out;
  transform: translate(space(2), space(4));
}

input:valid + label,
input:focus + label {
  font-size: 13px;
  font-weight: $font-weight-bold;
  transform: translate(space(2), space(1));
}

::-webkit-input-placeholder {
  text-align: right;
  color: #ddd;
  font-size: 13px;
  font-weight: 200;
}
:-moz-placeholder {
  text-align: right;
  color: #ddd;
  font-size: 13px;
  font-weight: 200;
}
::-moz-placeholder {
  text-align: right;
  color: #ddd;
  font-size: 13px;
  font-weight: 200;
}
:-ms-input-placeholder {
  text-align: right;
  color: #ddd;
  font-size: 13px;
  font-weight: 200;
}

input:focus ::-webkit-input-placeholder {
  color: transparent;
  font-size: 0;
}
input:focus :-moz-placeholder {
  color: transparent;
  font-size: 0;
}
input:focus ::-moz-placeholder {
  color: transparent;
  font-size: 0;
}
input:focus :-ms-input-placeholder {
  color: transparent;
  font-size: 0;
}
</style>
