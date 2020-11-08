<template>
    <v-snackbar
            v-model="options.show"
            :timeout="options.timeout"
            color="rounded"
    >
        {{ options.text }}
        <template v-slot:action="{ attrs }">
            <v-btn
                    color="textPrimary"
                    text
                    v-bind="attrs"
                    @click="options.btnAction"
            >
                {{ options.btnText }}
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        name: 'MySnackbar',
        props: {
            options: Object
        }
    };
</script>