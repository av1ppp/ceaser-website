<template>
    <v-container>
        <v-card>
            <v-card-text class="pa-8">
                <v-row class="mb-10">
                    <v-btn
                        color="green darken-1"
                    >
                    <v-icon left>
                        mdi-plus
                    </v-icon>
                    Добавить
                    </v-btn>
                </v-row>

                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Название
                            </th>
                            <th class="text-left">
                                Просмотры
                            </th>
                            <th class="text-left">
                                Рейтинг
                            </th>
                            <th class="text-left">
                                Действия
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>