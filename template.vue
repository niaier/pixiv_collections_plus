<!-- 组件说明 -->
<template>
	<div id="app">
  <div id="viewCollection">
    <el-button type="primary" size="small" :style="{
       'margin-left': '10px'
     }" @click="showCollection">查看收藏</el-button>


    <el-dialog title="查看收藏列表" :visible.sync="collectionVisible" width="60%" center append-to-body :style="{
        height: '80%',
      }">
      <el-container>
        <el-aside width="200px">
          <h5>收藏列表</h5>
          <el-menu default-active="0" class="el-menu-vertical-demo">
            <el-menu-item :index="index" :key="item.id" v-for="(item, index) in collectionList">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="getCollectionListContent(item)">{{ item.list_name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div>
            <div
            :style="{
              'margin-top': '10px'
            }"
            >
             <h5>收藏展示</h5>
            <el-button type="primary" @click="exportJson" size="small">导出json</el-button>

            <input type="file" name="file" id="importJson" v-show="false" @change="handleImport">
            <el-button size="small" type="primary" @click="importJson" :style="{
            'margin-left': '10px',
          }">导入Json</el-button>
            </div>



            <el-row :gutter="10">
              <el-col :span="8" :key="item.id" v-for="item in collectionListContent">
                <div :style="{ height: 250 }">
                  <div class="pic" :style="{ 'text-align': 'center' }">
                    <img :src="item.preview_url" alt="" height="184" />
                  </div>
                  <div class="title" :style="{
                    'display':'flex',
                    'justify-content':'center'
                  }">
                    <h5 :style="{width:'130px'}">
                      <el-link :href="item.url" target="_blank">
                        {{ item.title }}
                      </el-link>
                    </h5>
                  </div>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-dialog>
  </div>

  
 


  <div id="addCollection">
    <el-button type="primary" size="small" @click="showCollectionList" :style="{
       'margin-right': '10px'
     }">
      添加到收藏</el-button>
    <el-dialog title="收藏列表" :visible.sync="collectionListVisible" width="30%" center append-to-body>
      <div class="currentTag">
        当前标签：
        <span>
          <el-tag v-for="item in tag" :key="item" type="info" size="mimi" :style="{
              'margin-left': '10px',
              'margin-bottom': '10px',
            }">
            {{ item.originTag + " | " + item.translatedTag }}
          </el-tag>
        </span>
      </div>
      <div class="customTag" :style="{
          'margin-top': '10px',
          'margin-button': '10px',
        }">
        自定义标签：

        <span>
          <el-tag :key="item" size="mimi" v-for="item in custom_category" closable :disable-transitions="false"
            @close="deleteCustomCategory(item)" :style="{
              'margin-left': '10px',
              'margin-button': '10px',
            }">
            {{ item.originTag + " | " + item.translatedTag }}
          </el-tag>
          <el-input class="input-new-tag" v-if="customCategoryInputVisible" v-model="selfCategory" ref="saveTagInput"
            size="small" @keyup.enter.native="addSelfCategory">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showSelfCategoryInput">+ 新增自定义标签</el-button>
        </span>
      </div>

      <el-input placeholder="新建收藏列表" v-model="inputListName" class="input-with-select" :style="{
        'margin-top': '10px',
        'margin-button': '10px',
        }">
        <el-button slot="append" @click="addCollectionList" size="small" type="primary" icon="el-icon-plus"></el-button>
      </el-input>

      <div class="collectionList">
        <el-row>
          <el-col :span="24" v-for="(item, index) in collectionList" :key="index" :style="{
              'display':'flex',
              'justify-content':'space-between',
              'margin-top':'10px'
            }">
            <el-checkbox v-model="item.checked" @change="changeChecked(index, item)">{{ item.list_name }}</el-checkbox>
            <i class="el-icon-delete" @click="deleteCollectionList(item)" :style="{
              cursor:'pointer'
            }"></i>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="collectionListVisible = false">取 消</el-button>
        <el-button type="primary" @click="collectionListVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
		
	</div>
</template>

<script>
//import x from ''
export default {
	name: '',
	components: {

	},
	data () {
		return {

		};
	},
	computed: {

	},
	methods: {

	},
}
</script>

<style lang='scss' scoped>
//@import url()
</style>