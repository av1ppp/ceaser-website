<template>
    <div class="ma-3">
        <v-card>
            <v-card-text>
                <v-row>
                    <v-btn>Normal</v-btn>
                    <v-btn
                        color="primary"
                    >
                        Primary
                    </v-btn>
                    <v-btn
                        color="error"
                    >
                        Error
                    </v-btn>
                </v-row>
            </v-card-text>
        </v-card>


        

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>