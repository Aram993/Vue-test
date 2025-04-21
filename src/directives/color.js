let interval = null;
const handleClick = () => {
    alert(1);
}

export default {
    mounted(el, binding) {
       
        console.log(binding, 'mountr');
        el.style[binding.arg] = binding.value;

        if(binding.modifiers.blink) {
            let flag = true;

            interval = setInterval(() => {
                el.style.color = flag ? '#fff' : binding.value;
                flag = !flag;
            }, 1000)
        }

        el.addEventListener('click', handleClick)
    },
    updated(el, binding) {
        el.style[binding.arg] = binding.value;
        console.log(binding);
    },
    beforeUnmount(el) {
        if(interval) {
            clearInterval(interval);
        }

        el.removeEventListener('click', handleClick)
    },
}