 <template>
    <nav class="header">
        <span>{{get_brand}}</span>
    </nav>
</template>

<script>

export default {
    
    data() {
        return {
            ...this.$store.getters
        }
    },

    methods: {
        upwork_login(e) {
            
        },
    },

    computed() {
        return {
            
        }
    }
}

</script>
