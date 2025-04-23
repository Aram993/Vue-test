// let response = "";
// let value = "";

// async function copyInfo(value) {
//     try {
//         await window.navigator.clipboard.writeText(value);
//         const answer = await window.navigator.clipboard.readText();
//         response = answer;
//     } catch(err) {
//         console.error(err);
//     }
// }

// async function wrapperFunction(param) {
//     try {
//         await copyInfo(value);
//         if (param) {
//             alert(`ВАШ ТЕКСТ:\n\n"${response}" \n\nСКОПИРОВАН УСПЕШНО!`);
//         }
//     } catch(err) {
//         console.error(err);
//     }
// }


// export default {

//     mounted(el, binding) {
//         if (binding.value) {
//             value = binding.value;
//         } else {
//             value = el.textContent;
//         }

//         el.nextElementSibling.addEventListener("click", wrapperFunction.bind(binding.modifiers.alert));
//     },

//     beforeUnmount(el) {
//         el.nextElementSibling.removeEventListener()
//     }
// }
let value = "";
let isAlert = false;

async function copyInfo() {
    try {
        await window.navigator.clipboard.writeText(value);
        const answer = await window.navigator.clipboard.readText();
        response = answer;
    } catch(err) {
        console.error(err);
    }
}

async function wrapperFunction() {
    try {
        await copyInfo(value);
        if (isAlert) {
            alert(`ВАШ ТЕКСТ:\n\n"${value}" \n\nСКОПИРОВАН УСПЕШНО!`);
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

        value = binding.value || el.textContent;

        isAlert = binding.modifiers.alert;

        // el._handler = () => {
        //     console.log(1)
        // }

        // console.dir(el._handler);

        el.nextElementSibling.addEventListener("click", wrapperFunction);
    },

    beforeUnmount(el) {
        el.nextElementSibling.removeEventListener('click', wrapperFunction)
    }
}