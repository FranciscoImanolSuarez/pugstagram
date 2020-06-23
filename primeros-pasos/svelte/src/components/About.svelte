<script>
    //Logica de Javascript
    import Button from './Button.svelte'
    let someText = `Frontend Developer`
    let count = 0;
    let styles = { darkMode: false }

    const handleClick = () => {
        count += 1;
    }
    const restarClick = () => {
        count -= 1;
    }

    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }

</script>


<style>
    p{
        color: var(--theme-color);
    }
</style>


<div class="About">

    {#if !styles.darkMode}
     <p> { someText } </p>
    {:else}
        <span>Hello DarkMode</span>
    {/if}
    <p> { count === 0 ? 'Nada' : count } </p>

    <Button text='Click' {count} on:click={handleClick}/>
    <Button text='DarkMode' on:click={toggle} />
    <button on:click={toggle}>DarkMode {styles.darkmode ? '🌘' : '🌞'}</button>

</div>