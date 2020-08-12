<template>
    <div>
        <el-form  style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">


            <el-form-item label="编号" >
                <el-input v-model="ruleForm.id" readonly></el-input>
            </el-form-item>
            <el-form-item label="图书名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="go()">go</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: '',

                },
                rules: {
                    name: [
                        /*required = true  表示为必填项  trigger 触发事件*/
                        { required: true, message: '请输入图书名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    author: [
                        { required: true, message: '请输入作者名称', trigger: 'change' }
                    ],

                }
            };
        },
        created() {

            const _this = this
            axios.get('http://localhost:8888/books/findById/'+this.$route.query.id).then(function (resp) {
                _this.ruleForm = resp.data

            })
        },
        methods: {
            go(){
                console.log(this.ruleForm)
            },
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {


                        axios.put('http://localhost:8888/books',this.ruleForm).then(function (resp) {
                            if (resp.data == 'success') {
                                _this.$message({
                                    message: '修改成功',
                                    type: 'success',
                                });
                                _this.$router.push('/PageOne')


                            }







                        })


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>