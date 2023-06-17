收录学习过程中封装的组件

### SearchBar usage

![img](https://smms.app/image/H9PW3oKLzGT4Qbs)

```
<SearchBar style={{ height: 40, margin: 10, borderRadius: 20, paddingHorizontal: 10, }}
          textInputStyle={{ paddingLeft: 10, color: 'red', fontSize: 15, }}
          clearButtonMode='while-editing'
          chaneTextHandler={(text) => {
            console.log(text)
          }} />
```

![img](https://smms.app/image/3dUNQPnb84L7yl6)

```
        <SearchBar style={{ height: 40, margin: 10, borderRadius: 20, paddingHorizontal: 10, }}
          textInputStyle={{ paddingLeft: 10, color: 'red', fontSize: 15, }}
          clearButtonMode='while-editing'
          chaneTextHandler={(text) => {
            console.log(text)
          }} >
          <Ionicons name="ios-camera-outline" size={20} style={{ marginRight: 5, }} onPress={() => {
            console.log('camera')
          }} />
        </SearchBar>

```
