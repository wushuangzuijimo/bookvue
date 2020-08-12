<template>

    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

            <el-menu router :default-openeds="['0','1']">
                <el-submenu v-for="(item,index) in $router.options.routes" v-bind:index="index+''" v-if="item.show">
                    <template slot="title" ><i class="el-icon-phone"></i>{{item.name}}</template>


                    <el-menu-item v-for="(item2,index2) in item.children" v-bind:index="item2.path" v-bind:class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>

                </el-submenu>


            </el-menu>



        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>


</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>