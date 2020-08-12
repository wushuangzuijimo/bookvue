<template>
	<div>


  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="图书名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
	:page-size="pageSize"
    :total="total"
	@current-change="page">
  </el-pagination>
      <el-button @click="ok">oko</el-button>








  </div>
</template>

<script>
  export default {
    methods: {
      ok(){
        alert(resp.status)
      },

      edit(row) {

        this.$router.push({
          path: '/update',
          query:{
            id:row.id
          }
        })
      },
      del(row){
        const  _this =this
        axios.delete('http://localhost:8888/books/deleteById/'+row.id).then(function (resp) {

          if (resp.status==200) {
            _this.$message({
              message: '删除成功',
              type: 'success',
            });

            window.location.reload();



          }


         /* if (resp.data == 'success') {
            _this.$message({
              message: '修改成功',
              type: 'success',
            });
            _this.$router.push('/PageOne')


          }*/




        })

      },
	  page(currentPage){
		  const _this = this
		  axios.get('http://localhost:8888/books/'+(currentPage-1)+'/3').then(function(resp){
		  	_this.tableData = resp.data.content
		  	_this.pageSize = resp.data.size
		  	_this.total = resp.data.totalElements
			})
			}
    },

    data() {
      return {
		  pageSize:'',
		  total:'',
        tableData: []
      }
    },
	created() {
		const _this = this;
		axios.get('http://localhost:8888/books/0/3').then(function(resp){

		  alert(resp.status)
			_this.tableData = resp.data.content
			_this.pageSize = resp.data.size
			_this.total = resp.data.totalElements

		})
		
		
	}
  }
</script>