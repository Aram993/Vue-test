let response = "";
let value = "";

async function copyInfo(value) {
    try {
        await window.navigator.clipboard.writeText(value);
        const answer = await window.navigator.clipboard.readText();
        response = answer;
    } catch(err) {
        console.error(err);
    }
}

async function wrapperFunction(param) {
    try {
        await copyInfo(value);
        if (param) {
            alert(`ВАШ ТЕКСТ:\n\n"${response}" \n\nСКОПИРОВАН УСПЕШНО!`);
        }
    } catch(err) {
        console.error(err);
    }
}


export default {

    mounted(el, binding) {
        if (binding.value) {
            value = binding.value;
        } else {
            value = el.textContent;
        }

        el.nextElementSibling.addEventListener("click", wrapperFunction.bind(binding.modifiers.alert));
    },

    beforeUnmount(el) {
        el.nextElementSibling.removeEventListener()
    }
}