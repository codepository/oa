<template>
  <div>
    <material-upload
      @change="change">导入员工</material-upload>
  </div>
</template>
<script>
import { uploadUser } from '@/api/user'
export default {
  name: 'UploadUser',
  methods: {
    change (file) {
      let param = new FormData()
      param.append('file', file)
      // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      uploadUser(param).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
