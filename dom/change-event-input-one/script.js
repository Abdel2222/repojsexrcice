(() => {
    const input = document.getElementById("pass-one");

    input.addEventListener("input", ({ target: { value } }) => {
      if (value.length >= 10) {
        input.value = value.substring(0, 10);
      }
    });
})();