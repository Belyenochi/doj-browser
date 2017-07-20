# docute

## TODO LIST

### 構建工程

- [ ] Document Generator 文檔生成器
- [ ] Continuous Integration 持續集成

### 組件庫

分類：

- `derive` 衍生組件
- `sub` 子組件
- `feature` 特性
- `mode` 模式
- `prop` 屬性
- `method` 方法
- `event` 事件

General: <!-- TBD -->

- [ ] Loader
- [ ] Icon
- [ ] Button
  - [ ] sub: Group
  - [ ] mode: icon
  - [ ] mode: loading
  - [ ] mode: inverse
  - [ ] mode: disabled
  - [ ] prop: size
  - [ ] prop: shape
- [ ] Popover
  - [ ] derive: Popconfirm
- [ ] Dropdown
  - [ ] mode: disabled
  - [ ] prop: trigger
  - [ ] prop: placement
- [ ] List
- [ ] Tree


Layout:

- [ ] Grid
  - [ ] sub: Row
  - [ ] sub: Col
  - [ ] mode: flex
  - [ ] prop: span
  - [ ] prop: order, offset, push, pull
  - [ ] prop: gutter
  - [ ] prop: xs, sm, md, lg, xl
- [ ] Layout
  - [ ] sub: Header
  - [ ] sub: Sider
  - [ ] sub: Content
  - [ ] sub: Footer
  - [ ] sub: Divider
  - [ ] feature: collapsible
  - [ ] feature: responsive
- [ ] Rail

Navigation:

- [ ] Affix <!-- TBD -->
  - [ ] derive: BackTop
- [ ] Breadcrumb
  - [ ] prop: routes
  - [ ] prop: params
  - [ ] prop: separator
- [ ] Menu
  - [ ] sub: SubMenu
  - [ ] sub: Divider
  - [ ] sub: Group
  - [ ] feature: collapsible
  - [ ] feature: cascading
  - [ ] mode: inline
  - [ ] mode: vertical
  - [ ] mode: horizontal
  - [ ] mode: inverse
- [ ] Pagination
  - [ ] sub: SizeChanger
  - [ ] sub: QuickJumper
  - [ ] mode: simply
  - [ ] mode: borderless
  - [ ] prop: size
  - [ ] prop: showTotal
- [ ] Steps
  - [ ] feature: custom display
  - [ ] mode: vertical
  - [ ] mode: dot, node, block
  - [ ] prop: title
  - [ ] prop: description
  - [ ] prop: size
  - [ ] prop: status
  - [ ] prop: icon
- [ ] Anchor


Entry: <!-- TBD -->

- [ ] Form
- [ ] Input
  - [ ] feature: Pointing
  - [ ] feature: auto complete
  - [ ] feature: mention
- [ ] Textarea
- [ ] Radio
- [ ] Checkbox
- [ ] DatePicker
- [ ] TimePicker
- [ ] Rate
- [ ] Select
  - [ ] derive: TreeSelect
  - [ ] feature: search
  - [ ] feature: group
  - [ ] feature: data source
  - [ ] mode: tags
  - [ ] mode: multiple
  - [ ] prop: allowClear
  - [ ] prop: filter
- [ ] Slider
- [ ] Switch
- [ ] Cascader
  - [ ] feature: custom display
- [ ] Transfer
- [ ] Upload


Feedback:

- [ ] Alter
- [ ] Modal
- [ ] Tooltip
- [ ] Message
- [ ] Notification
- [ ] Progress


Display:

- [ ] Image
  - [ ] sub: Avatar
  - [ ] sub: Reveal
- [ ] Label
  - [ ] sub: Tag
  - [ ] sub: Ribbon
  - [ ] sub: Attached
  - [ ] sub: Badge
  - [ ] sub: Corner
- [ ] Calendar
- [ ] Card
   - [ ] sub: Segment
- [ ] Carousel
- [ ] Table
- [ ] Timeline


Elements:

- [ ] Collapse
- [ ] Tabs


## 其他

### 文檔

#### 構建文檔

``` bash
npm i -g docute-cli // 安裝 docute
```

#### 預覽文檔

``` bash
docute ./docs // 使用 docute 預覽文檔
```

#### 編寫文檔

組件目錄需要一個 `meta.yml`，作爲組件的文檔。

它記錄了組件的當前信息和修改歷史，例如該目錄下的 `meta.yml`。

如果修改了組件代碼，需要在組件目錄的 `meta.yml` 的 changes 中加上一條記錄，並直接使用 `next` 作爲版本號。

一條記錄的開頭，需要用一對中括號表示變更類型，類型如下：

 - `build`: 修改構建用的配置文件
 - `eslint`: 修改語法檢查的配置文件
 - `docs`: 修改幫助文檔
 - `assets`: 修改資源文件
 - `fix`: 修復一處錯誤，例如修復文字提示、修復未捕捉的異常
 - `enhance`: 改善一處體驗，例如增強魯棒性
 - `feature`: 增加一個特性，例如增加組件、屬性、事件、功能等
 - `change`: 改變一個行爲，例如調整組件的接口、改變組件內部的實現
 - `styles`: 改變一處樣式，例如美化組件樣式
