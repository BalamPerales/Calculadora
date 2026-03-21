const inputPermisos = document.getElementById("inputPermisos");
const selectUsuario = document.getElementById("selectUsuario");
const selectGrupo = document.getElementById("selectGrupo");
const selectOtros = document.getElementById("selectOtros");

const selects = [selectUsuario, selectGrupo, selectOtros];

inputPermisos.addEventListener("input", (event) => {
  let valor = event.target.value.replace(/[^0-7]/g, "");
  inputPermisos.value = valor;

  let valorCompleto = valor.padEnd(3, "0");

  selectUsuario.value = valorCompleto[0];
  selectGrupo.value = valorCompleto[1];
  selectOtros.value = valorCompleto[2];
});

function actualizarInputDesdeSelects() {
  const nuevoValor =
    selectUsuario.value + selectGrupo.value + selectOtros.value;
  inputPermisos.value = nuevoValor;
}

selects.forEach((select) => {
  select.addEventListener("change", actualizarInputDesdeSelects);
});

inputPermisos.dispatchEvent(new Event("input"));
