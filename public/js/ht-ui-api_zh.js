/**
 * This file is part of HT for web.
 * Copyright (c) 2014 by www.hightopo.com
 *
 * @description HT for web顶层包
 * @namespace
 */
var ht = {};

/**
 * 通用组件包, 包括组件, 布局器等
 * @namespace
 */
ht.ui = {};

/**
 * Drawable 绘制接口及实现类
 * @namespace
 */
ht.ui.drawable = {};

/**
 * Border 绘制接口及实现类
 * @namespace
 */
ht.ui.border = {};


/**
 * 列表(表格)编辑器接口及实现类
 * @namespace
 */
ht.ui.editor = {};


/**
 * 列数据，用于定义表格组件的列信息，包含列名称、类型以及自定义渲染和编辑单元格等信息
 * 样式属性(不含从父类继承)：paddingLeft, paddingRight, align
 * @constructor
 * @extends {ht.Data}
 */
ht.ui.Column = function() {};

/** 
 * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式
 * @param {Object} value 格式化之前值
 * @param {ht.Data} data 数据元素
 * @return {Object} 格式化之后的值
 */
ht.ui.Column.prototype.formatValue = function(value, data) {};

/**
 * 自定义要显示的单元格内容
 * @param {ht.Data} data 数据元素
 * @param {ht.ui.Column} column 列
 * @param {ht.View} view 视图组件
 * @return {Object} 自定义的显示内容
 */
ht.ui.Column.prototype.getValue = function(data, column, view) {};

/** 
 * 获取列的属性类型，值列表如下：<br>
 * <ul>
 * <li>null: 默认类型，如 name 为 age，采用g etAge() 和 setAge(98) 的 get/set 或 is/set 方式存取</li>
 * <li>style: 如 name 为 age，采用 getStyle('age') 和 setStyle('age', 98) 的方式存取</li>
 * <li>field：如 name  为age，采用 data.age 和 data.age = 98 的方式存取</li>
 * <li>attr：如 name 为 age，采用 getAttr('age') 和 setAttr('age', 98) 的方式存取</li>
 * </ul>
 * @return {String|null}
 */
ht.ui.Column.prototype.getAccessType = function() {};

/** 
 * 获取文字(表头和内容)的水平对齐方式，可用值有 left|right|center，默认为 left
 * @return {String}
 */
ht.ui.Column.prototype.getAlign = function() {};

/** 
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.Column.prototype.getSortFunc = function() {};

/** 
 * 获取排序状态<br>
 * <ul>
 * <li>asc: 升序</li>
 * <li>desc: 降序</li>
 * </ul>
 * @return {String}
 */
ht.ui.Column.prototype.getSortOrder = function() {};

/** 
 * 获取提示文字
 * @param {ht.Data} data 数据元素
 * @param {ht.ui.TableView} tableView 视图对象
 * @return {String}
 */
ht.ui.Column.prototype.getToolTip = function(data, tableView) {};

/** 
 * 获取值类型，值类型用于提示组件提供合适的 renderer 渲染<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过 parseInt 进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过 parseFloat 转换</li>
 * </ul>
 * @return {String}
 */
ht.ui.Column.prototype.getValueType = function() {};

/** 
 * 获取列宽度, 默认为 80
 * @return {Number} 宽度值
 */
ht.ui.Column.prototype.getWidth = function() {};


/** 
 * 获取统计方式
 * @return {String} 统计方式
 */
ht.ui.Column.prototype.getSummary = function() {};

/** 
 * 判断该列是否允许多选时批量编辑
 * @return {Boolean} 是否可批量编辑
 */
ht.ui.Column.prototype.isBatchEditable = function() {};

/** 
 * 判断此列是否可编辑
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否可编辑
 */
ht.ui.Column.prototype.isEditable = function(data) {};

/** 
 * 判断当前列是否可排序
 * @return {Boolean} 是否可排序
 */
ht.ui.Column.prototype.isSortable = function() {};

/** 
 * 获取列左侧内边距
 * @return {Number} 左侧内边距
 */
ht.ui.Column.prototype.getPaddingLeft = function() {};

/** 
 * 获取列右侧内边距
 * @return {Number} 右侧内边距
 */
ht.ui.Column.prototype.getPaddingRight = function() {};

/** 
 * 判断当前列是否是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.Column.prototype.isVisible = function() {};

/**
 * 获取列的编辑类, 如 'ht.editor.StringEditor'
 * @return {String|function} 编辑器类或类名
 */
ht.ui.Column.prototype.getEditorClass = function() {};

/** 
 * 设置列的属性类型，可选值如下：<br>
 * <ul>
 * <li>null: 默认类型，如 name 为 age，采用 getAge() 和 setAge(98) 的 get/set 或 is/set 方式存取</li>
 * <li>style: 如 name 为 age，采用 getStyle('age') 和 setStyle('age', 98) 的方式存取</li>
 * <li>field：如 name 为 age，采用 data.age 和 data.age = 98 的方式存取</li>
 * <li>attr：如 name 为 age，采用 getAttr('age') 和 setAttr('age', 98) 的方式存取</li>
 * </ul>
 * @param {String} accessType
 */
ht.ui.Column.prototype.setAccessType = function(accessType) {};

/** 
 * 设置文字的水平对齐方式，可用值有 left|right|center，默认为 left
 * @param {String} align 对齐方式
 */
ht.ui.Column.prototype.setAlign = function(align) {};

/** 
 * 设置列是否允许多选时批量编辑
 * @param {Boolean} batchEditable 是否可批量编辑
 */
ht.ui.Column.prototype.setBatchEditable = function(batchEditable) {};

/** 
 * 设置此列是否可编辑
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.Column.prototype.setEditable = function(editable) {};

/** 
 * 设置列是否可排序
 * @param {Boolean} sortable 是否允许排序
 */
ht.ui.Column.prototype.setSortable = function(sortable) {};

/** 
 * 设置排序函数
 * @param {Function} func 排序函数
 */
ht.ui.Column.prototype.setSortFunc = function(func) {};

/** 
 * 设置排序状态<br>
 * <ul>
 * <li>asc: 升序</li>
 * <li>desc: 降序</li>
 * </ul>
 * @param {String} sortOrder
 */
ht.ui.Column.prototype.setSortOrder = function(sortOrder) {};

/** 
 * 设置值类型，值类型用于提示组件提供合适的 renderer 渲染<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过 parseInt 进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过 parseFloat 转换</li>
 * </ul>
 * @param {String} type 值类型
 */
ht.ui.Column.prototype.setValueType = function(type) {};

/** 
 * 设置列是否是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.Column.prototype.setVisible = function(visible) {};

/** 
 * 设置列宽度
 * @param {Number} width 宽度值，如果值为负数表示占据表格剩余空间的百分比，如 -0.1，表示当前列的宽度为表格剩余宽度的百分之十
 */
ht.ui.Column.prototype.setWidth = function(width) {};


/** 
 * 设置统计方式；统计数据显示在 TableFooter 组件中
 * @param {String} summary 统计方式，支持：sum|min|max|average|first
 */
ht.ui.Column.prototype.setSummary = function(summary) {};

/** 
 * 设置列左侧内边距
 * @param {Number} paddingLeft 左侧内边距
 */
ht.ui.Column.prototype.setPaddingLeft = function(paddingLeft) {};

/** 
 * 获取列右侧内边距
 * @param {Number} paddingRight 右侧内边距
 */
ht.ui.Column.prototype.setPaddingRight = function(paddingRight) {};


/**
 * 设置列的编辑类, 如 'ht.editor.StringEditor'
 * @param {String|function} editorClass 编辑器类或类名
 */
ht.ui.Column.prototype.setEditorClass = function(editorClass) {};


/**
 * 是否固定列；固定列始终显示在左侧，不会随滚动条滚动
 * @return {Boolean} 是否是固定列
 */
ht.ui.Column.prototype.isFixed = function() {};


/**
 * 是否固定列；固定列始终显示在左侧，不会随滚动条滚动
 * @param {Boolean} fixed 是否是固定列
 */
ht.ui.Column.prototype.setFixed = function(fixed) {};



/**
 * 枚举列，对枚举数据提供渲染和编辑功能
 * @constructor
 * @extends {ht.ui.Column}
 * @example
 * var column = new ht.ui.EnumColumn();
 * column.setDatas([
 *      {
 *          icon: 'node_icon',
 *          id: 0,
 *          label: 'Female'
 *      },
 *      {
 *          icon: 'shape_icon',
 *          id: 1,
 *          label: 'Male
 *      }
 * ]);
 *
 * columnModel.add(column);
 */
ht.ui.EnumColumn = function() {};

/**
 * 设置枚举数据
 * @param {Array} datas 枚举数组
 */
ht.ui.EnumColumn.prototype.setDatas = function(datas) {};

/**
 * 获取枚举数组
 * @return {Array} 枚举数据
 */
ht.ui.EnumColumn.prototype.getDatas = function() {};


/**
 * 设置编辑时的下拉框是否是只读的
 * @param {Boolean} readOnly 只读
 */
ht.ui.EnumColumn.prototype.setReadOnly = function(readOnly) {};

/**
 * 获取编辑时的下拉框是否是只读的
 * @return {Boolean} 只读
 */
ht.ui.EnumColumn.prototype.isReadOnly = function() {};


/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * column.setDropDownConfig({
 * 	'width': 100, // 下拉框宽度
 * 	'height': 100, // 下拉框高度
 * 	'dropDownView.background': 'red' // dropDownView.xxx 用来设置下拉组件的属性
 * });
 */
ht.ui.EnumColumn.prototype.setDropDownConfig = function(config) {};

/**
 * 获取下拉模板属性配置表
 * @return {Object} 属性配置表
 */
ht.ui.EnumColumn.prototype.getDropDownConfig = function() {};

/**
 * 获取数据对象中的 id 属性名
 * @return {String} 属性名
 */
ht.ui.EnumColumn.prototype.getValueField = function (){};

/**
 * 设置数据对象中的 id 属性名
 * @param {String} valueField 属性名
 */
ht.ui.EnumColumn.prototype.setValueField = function (valueField){};

/**
 * 获取数据对象中用于显示的属性，默认为 label
 * @return {String} 属性名
 */
ht.ui.EnumColumn.prototype.getDisplayField = function (){};

/**
 * 设置数据对象中用于显示的属性
 * @param {String} displayField 属性名，默认为 label
 */
ht.ui.EnumColumn.prototype.setDisplayField = function (displayField){};


/**
 * 获取数据对象中的图标属性名，默认为 icon
 * @return {String} 属性名 
 */
ht.ui.EnumColumn.prototype.getIconField = function (){};

/**
 * 设置数据对象中的图标属性名
 * @param {String} iconField 属性名，默认为 icon
 */
ht.ui.EnumColumn.prototype.setIconField = function (iconField){};

/**
 * 分组列，只用于对普通列进行分组，不能用使用排序、编辑等功能
 * @constructor
 * @extends {ht.ui.Column}
 * @example
 * var column1 = new ht.ui.Column();
 * // init column1
 * 
 * var column2 = new ht.ui.Column();
 * // init column2
 *
 * var groupColumn = new ht.ui.GroupColumn();
 * groupColumn.setName('Group Column');
 * groupColumn.addChild(column1);
 * groupColumn.addChild(column2);
 *
 * columnModel.add(column1);
 * columnModel.add(column2);
 * columnModel.add(groupColumn);
 */
ht.ui.GroupColumn = function() {};

/**
 * 增加子列
 * @param {ht.ui.Column} column 被嵌套的列
 */
ht.ui.GroupColumn.prototype.addChild = function(column) {};


/**
 * 删除子列
 * @param {ht.ui.Column} column 被嵌套的列
 */
ht.ui.GroupColumn.prototype.removeChild = function(column) {};

/**
 * 属性元素，用于定义属性表组件中的属性
 * @constructor
 * @extends {ht.Data}
 */
ht.ui.Property = function() {};

/** 
 * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式
 * @param {ht.Data} data 数据元素
 * @param {Object} value 格式化之前值
 * @return {Object} 格式化之后的值
 */
ht.ui.Property.prototype.formatValue = function(data, value) {};

/** 
 * 获取属性访问类型，值列表如下：<br>
 * <ul>
 * <li>null: 默认类型，如 name 为 age，采用g etAge() 和 setAge(98) 的 get/set 或 is/set 方式存取</li>
 * <li>style: 如 name 为 age，采用 getStyle('age') 和 setStyle('age', 98) 的方式存取</li>
 * <li>field：如 name  为age，采用 data.age 和 data.age = 98 的方式存取</li>
 * <li>attr：如 name 为 age，采用 getAttr('age') 和 setAttr('age', 98) 的方式存取</li>
 * </ul>
 * @return {String|null}
 */
ht.ui.Property.prototype.getAccessType = function() {};

/** 
 * 获取文字的水平对齐方式，可用值有 left|right|center
 * @return {String}
 */
ht.ui.Property.prototype.getAlign = function() {};

/** 
 * 获取提示文字
 * @param {ht.Data} data 数据元素
 * @param {Boolean} isValue 是否在属性值区域
 * @param {ht.ui.PropertyView} propertyView 视图对象
 * @return {String} 文字内容
 */
ht.ui.Property.prototype.getToolTip = function(data, isValue, propertyView) {};

/** 
 * 获取列左侧内边距
 * @return {Number} 左侧内边距
 */
ht.ui.Property.prototype.getPaddingLeft = function() {};

/** 
 * 获取列右侧内边距
 * @return {Number} 右侧内边距
 */
ht.ui.Property.prototype.getPaddingRight = function() {};

/** 
 * 获取值类型，值类型用于提示组件提供合适的 renderer 渲染<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过 parseInt 进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过 parseFloat 转换</li>
 * </ul>
 * @return {String}
 */
ht.ui.Property.prototype.getValueType = function() {};

/** 
 * 判断是否可编辑
 * @return {Boolean} 是否可编辑
 */
ht.ui.Property.prototype.isEditable = function() {};

/**
 * 获取编辑类, 如 'ht.editor.StringEditor'
 * @return {String|function} 编辑器类或类名
 */
ht.ui.Property.prototype.getEditorClass = function() {};

/**
 * 获取文字颜色
 * @return {color} 颜色值
 */
ht.ui.Property.prototype.getColor = function() {};


/**
 * 获取分类名
 * @return {String} 分类名
 */
ht.ui.Property.prototype.getCategoryName = function() {};


/** 
 * 设置属性类型，可选值如下：<br>
 * <ul>
 * <li>null: 默认类型，如 name 为 age，采用 getAge() 和 setAge(98) 的 get/set 或 is/set 方式存取</li>
 * <li>style: 如 name 为 age，采用 getStyle('age') 和 setStyle('age', 98) 的方式存取</li>
 * <li>field：如 name 为 age，采用 data.age 和 data.age = 98 的方式存取</li>
 * <li>attr：如 name 为 age，采用 getAttr('age') 和 setAttr('age', 98) 的方式存取</li>
 * </ul>
 * @param {String} accessType
 */
ht.ui.Property.prototype.setAccessType = function(accessType) {};

/** 
 * 设置文字的水平对齐方式，值为：left|right|center；为保持统一的视觉效果，请设置 ht.ui.PropertyView 的 nameAlign 和 valueAlign 属性，尽量避免为每个属性单独设置
 * @param {String} align 对齐方式
 */
ht.ui.Property.prototype.setAlign = function(align) {};

/** 
 * 设置是否可编辑
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.Property.prototype.setEditable = function(editable) {};

/** 
 * 设置值类型，值类型用于提示组件提供合适的 renderer 渲染<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过 parseInt 进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过 parseFloat 转换</li>
 * </ul>
 * @param {String} type 值类型
 */
ht.ui.Property.prototype.setValueType = function(type) {};

/**
 * 设置编辑类, 如 'ht.editor.StringEditor'
 * @param {String|function} editorClass 编辑器类或类名
 */
ht.ui.Property.prototype.setEditorClass = function(editorClass) {};

/**
 * 设置文字颜色
 * @param {color} color 颜色值
 */
ht.ui.Property.prototype.setColor = function(color) {};

/**
 * 设置分类名
 * @param {String} name 分类名
 */
ht.ui.Property.prototype.setCategoryName = function(name) {};



/** 
 * 设置列左侧内边距；为保持统一的视觉效果，请设置 ht.ui.PropertyView 的 cellPaddingLeft 属性，尽量避免为每个属性单独设置
 * @param {Number} paddingLeft 左侧内边距
 */
ht.ui.Property.prototype.setPaddingLeft = function(paddingLeft) {};

/** 
 * 设置列右侧内边距；为保持统一的视觉效果，请设置 ht.ui.PropertyView 的 cellPaddingRight 属性，尽量避免为每个属性单独设置
 * @param {Number} paddingRight 右侧内边距
 */
ht.ui.Property.prototype.setPaddingRight = function(paddingRight) {};
/**
 * 枚举类型的属性元素，对枚举数据提供渲染和编辑功能
 * @constructor
 * @extends {ht.ui.Property}
 * @example
 * var property = new ht.ui.EnumProperty();
 * property.setDatas([
 *      {
 *          icon: 'node_icon',
 *          id: 0,
 *          label: 'Female'
 *      },
 *      {
 *          icon: 'shape_icon',
 *          id: 1,
 *          label: 'Male
 *      }
 * ]);
 *
 * propertyModel.add(property);
 */
ht.ui.EnumProperty = function() {};

/**
 * 设置枚举数据
 * @param {Array} datas 枚举数组
 */
ht.ui.EnumProperty.prototype.setDatas = function(datas) {};

/**
 * 获取枚举数组
 * @return {Array} 枚举数据
 */
ht.ui.EnumProperty.prototype.getDatas = function() {};

/**
 * 设置编辑时的下拉框是否是只读的
 * @param {Boolean} readOnly 只读
 */
ht.ui.EnumProperty.prototype.setReadOnly = function(readOnly) {};

/**
 * 获取编辑时的下拉框是否是只读的
 * @return {Boolean} 只读
 */
ht.ui.EnumProperty.prototype.isReadOnly = function() {};

/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * column.setDropDownConfig({
 * 	'width': 100, // 下拉框宽度
 * 	'height': 100, // 下拉框高度
 * 	'dropDownView.background': 'red' // dropDownView.xxx 用来设置下拉组件的属性
 * });
 */
ht.ui.EnumProperty.prototype.setDropDownConfig = function(config) {};

/**
 * 获取下拉模板属性配置表
 * @return {Object} 属性配置表
 */
ht.ui.EnumProperty.prototype.getDropDownConfig = function() {};


/**
 * 获取数据对象中的 id 属性名
 * @return {String} 属性名
 */
ht.ui.EnumProperty.prototype.getValueField = function (){};

/**
 * 设置数据对象中的 id 属性名
 * @param {String} valueField 属性名
 */
ht.ui.EnumProperty.prototype.setValueField = function (valueField){};

/**
 * 获取数据对象中用于显示的属性，默认为 label
 * @return {String} 属性名
 */
ht.ui.EnumProperty.prototype.getDisplayField = function (){};

/**
 * 设置数据对象中用于显示的属性
 * @param {String} displayField 属性名，默认为 label
 */
ht.ui.EnumProperty.prototype.setDisplayField = function (displayField){};


/**
 * 获取数据对象中的图标属性名，默认为 icon
 * @return {String} 属性名 
 */
ht.ui.EnumProperty.prototype.getIconField = function (){};

/**
 * 设置数据对象中的图标属性名
 * @param {String} iconField 属性名，默认为 icon
 */
ht.ui.EnumProperty.prototype.setIconField = function (iconField){};

/**
 * 交互器基类，处理交互应该从此类继承
 * @param {ht.ui.View} component 组件对象
 * @constructor
 */
ht.ui.Interactor = function(component) {};

/** 
 * 返回组件的交互 DOM 对象，一般无需处理此函数
 * @return {HTMLElement} DOM 对象
 */
ht.ui.Interactor.prototype.getView = function(value) {};

/**
 * 获取交互器绑定的组件对象
 * @return {ht.ui.View} 组件对象
 */
ht.ui.Interactor.prototype.getComponent = function() {};

/**
 * UI 序列化和反序列化器
 * @constructor
 * @example
 * var serializer = new ht.ui.UIJSONSerializer();
 * var json = serializer.serialize(borderLayout); // 序列化 borderLayout
 * 
 * var newBorderLayout = serializer.deserialize(json); // 反序列化 json，得到新的 borderLayout
 */
ht.ui.UIJSONSerializer = function() {};

/** 
 * 序列化组件
 * @param {ht.ui.View} view 要序列化的组件
 * @param {space} [space] 分隔符，同 JSON.stringify 函数中的 space 参数
 * @return {String} json 字符串
 */
ht.ui.UIJSONSerializer.prototype.serialize = function(view, space) {};

/** 
 * 序列化组件，返回值为 Object 类型
 * @param {ht.ui.View} view 要序列化的组件
 * @return {Object} json 对象
 */
ht.ui.UIJSONSerializer.prototype.toJSON = function(view) {};

/** 
 * 是否是引用类型；序列化某个类实例时，通过此函数判断是否是引用类型，如果是引用类型将其序列化结果放置到引用块中，可重写自定义
 * @param {Object} value 属性值
 * @param {String} name 属性名
 * @param {Object} instance 属性所属的类实例
 * @return {Boolean} 是否是引用类型
 */
ht.ui.UIJSONSerializer.prototype.isRef = function(value, name, instance) {};

/** 
 * 序列化属性值，可重写自定义
 * @param {Object} value 属性值
 * @param {String} name 属性名
 * @param {Object} instance 属性所属的类实例
 * @return {Object} 序列化后的属性值
 */
ht.ui.UIJSONSerializer.prototype.serializeProperty = function(value, name, instance) {};

/** 
 * 反序列化组件
 * @param {String|Object} json json 数据或对象
 * @param {Boolean} setDataId DataModel 中数据是否保留原始 id
 * @return {ht.ui.View} 反序列化后得到的组件
 */
ht.ui.UIJSONSerializer.prototype.deserialize = function(json, setDataId) {};

/** 
 * 反序列化属性值，可重写自定义
 * @param {String} json 属性值 json
 * @param {String} name 属性名
 * @param {Object} instance 属性所属的类实例
 * @return {Object} 反序列化后的属性值
 */
ht.ui.UIJSONSerializer.prototype.deserializeProperty = function(json, name, instance) {};





/**
 * 表单处理工具类；可快速将容器中的表单组件的名称和值组装为 JSON 数据，也支持通过修改 JSON 将值反填回组件中；<br>
 * 此工具还支持 JSON 整体变化事件和 JSON 中单条数据变化事件<br>
 * 通过 addChangeListener 可监听到的事件：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>jsonChange</code></td>
 * <td> 
* <pre>
 * {
 *      kind: 'jsonChange', // 事件类型
 *      oldValue: oldValue, // 旧值
 *      newValue: newValue, // 新值
 *      form: form, 表单工具类实例
 *      fromSetter: true|false // 是否是手动调用 setJSON 导致此事件被派发；如果为 false，说明是切换 viewGroup 或增删表单组件导致此事件被派发
 * }
 * </pre>
 * </td>
 * <td>JSON 数据整体变化事件(比如绑定了新的 viewGroup)</td>
 * </tr>
 * <tr>
 * <td class="name"><code>formDataValueChange</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'formDataValueChange', // 事件类型
 *      view: view, // 表单组件实例
 *      name: name, // 表单组件的名称
 *      oldValue: oldValue, // 旧值
 *      newValue: newValue, // 新值
 *      form: form, 表单工具类实例
 *      fromSetter: true|false // 是否是手动调用 setItem 导致此事件被派发；如果为 false，说明是组件值变化导致此事件被派发
 * }
 * </pre>
 * </td>
 * <td>JSON 中单条数据值变化事件</td>
 * </tr>
 * </tbody>
 * </table>
 * @param {ht.ui.ViewGroup} viewGroup 容器对象
 * @constructor
 */
ht.ui.Form = function(viewGroup) {};

/**
 * 增加数据变化监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.Form.prototype.addChangeListener = function(listener, scope, ahead) {};

/**
 * 删除数据变化监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.ui.Form.prototype.removeChangeListener = function(listener, scope) {};

/**
 * 设置容器对象；递归遍历此容器对象并获取表单组件，为表单组件增加属性变化监听器以及时更新 JSON
 * @param {ht.ui.ViewGroup} viewGroup 容器对象
 */
ht.ui.Form.prototype.setViewGroup = function(viewGroup) {};

/**
 * 获取容器对象
 * @return {ht.ui.ViewGroup} 容器对象
 */
ht.ui.Form.prototype.getViewGroup = function() {};

/**
 * 获取由表单组件的名称和值组装成的 JSON 数据 
 * @return {Object} JSON 对象
 */
ht.ui.Form.prototype.getJSON = function() {};

/**
 * 设置 JSON 数据，同步更新容器中的表单组件
 * @param {Object} json JSON 对象
 */
ht.ui.Form.prototype.setJSON = function(json) {};

/**
 * 根据表单组件的名称获取对应的数据值
 * @param {String} name 表单组件的 formDataName
 * @return {Object} 值
 */
ht.ui.Form.prototype.getItem = function(name) {};


/**
 * 根据名称获取对应的表单组件
 * @param {String} name 表单组件的 formDataName
 * @return {ht.ui.View|Array} 组件
 */
ht.ui.Form.prototype.getFormView = function(name) {};


/**
 * 获取 表单组件名称-表单组件 映射表
 * @return {Object} 组件
 */
ht.ui.Form.prototype.getFormViewMap = function() {};


/**
 * 获取所有的表单组件名称
 * @return {Array}
 */
ht.ui.Form.prototype.getFormDataNames = function() {};

/**
 * 设置 JSON 数据中表单组件的名称对应的值，这会同步修改组件的值
 * @param {String} name 表单组件的 formDataName
 * @param {Object} value 值
 */
ht.ui.Form.prototype.setItem = function(name, value) {};

/**
 * 获取是否禁用了 formDataName 重复检测
 * @return {Boolean} 是否禁用
 */
ht.ui.Form.prototype.isFormDataNameWarnDisabled = function() {};

/**
 * 设置是否禁用 formDataName 重复检测，默认为 flase; <br>
 * 除 ToggleButton、CheckBox、RadioButton 之外其它组件的 formDataName 属性如果重复，浏览器会在控制台打印警告，
 * 如果要关闭警告，请调用此 API 并将参数设为 true
 * @param {Boolean} disabled 是否禁用
 */
ht.ui.Form.prototype.setFormDataNameWarnDisabled = function(disabled) {};
/**
 * Drawable 定义了绘制接口，此接口可用于绘制组件背景、图标等(如按钮的背景和图标)；
 * 一个 Drawable 实例可用于多个组件，并在 draw 函数中通过参数区分；开发者如果需要自定义 Drawable，一般需要重写 draw 函数
 * 
 * @constructor
 */
ht.ui.drawable.Drawable = function() {};

/**
 * 派发属性变化事件
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.drawable.Drawable.prototype.firePropertyChange = function(property, oldValue, newValue, compareFunc) {}

/**
 * 派发属性变化事件，{@link ht.ui.drawable.Drawable#firePropertyChange firePropertyChange} 的缩写
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.drawable.Drawable.prototype.fp = function(property, oldValue, newValue, compareFunc) {}

/**
 * 增加属性事件变化监听函数
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.drawable.Drawable.prototype.addPropertyChangeListener = function(listener, scope, ahead) {}

/**
 * 增加属性事件变化监听函数，{@link ht.ui.drawable.Drawable#addPropertyChangeListener addPropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.drawable.Drawable.prototype.mp = function(listener, scope, ahead) {}

/**
 * 删除属性事件变化监听器
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.drawable.Drawable.prototype.removePropertyChangeListener = function(listener, scope) {}

/**
 * 删除属性事件变化监听器，{@link ht.ui.drawable.Drawable#removePropertyChangeListener removePropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.drawable.Drawable.prototype.ump = function(listener, scope) {}

/** 
 * 绘制内容
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} [data] 绘制相关的 Data 对象，如绘制树组件中节点的 icon 时，可以用此参数判断出当前在绘制哪个节点
 * @param {ht.View} view 当前在绘制的组件
 * @param {HTMLElement} [dom] 当前在绘制的 dom 对象，绝大多数组件无需考虑这个参数(因为只有一个绘制 canvas)，特殊的是右键菜单，每个子菜单都是一个单独的 canvas，这种情况下才有这个参数
 * @example // 下面这段代码绘制了一个矩形
 * function MyDrawable() {
 * 	MyDrawable.superClass.constructor.call(this);
 * }
 * ht.Default.def(MyDrawable, ht.ui.drawable.Drawable, {
 * 	draw: function(x, y, width, height, data, view, dom) {
 * 		var g = view.getRootContext(dom);
 * 		g.beginPath();
 * 		g.rect(x, y, width, height);
 * 		g.fillStyle = 'red';
 * 		g.fill();
 * 	}
 * });
 */
ht.ui.drawable.Drawable.prototype.draw = function(x, y, width, height, data, view, dom) {};
/**
 * ColorDrawable 类从 ht.ui.drawable.Drawable 继承，重写了 draw 方法在绘制区域内绘制颜色
 * @param {color} color 要绘制的颜色值
 * @param {Number|Array} radius 绘制范围的圆角半径，配合此参数可绘制圆角矩形
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.ColorDrawable = function(color, radius) {};

/** 
 * 获取要绘制的颜色
 * @return {color} 要绘制的颜色值
 */
ht.ui.drawable.ColorDrawable.prototype.getColor = function() {};

/** 
 * 获取绘制范围的圆角半径
 * @return {Number|Array} 圆角半径；如果是数组，则表示[左上圆角半径, 右上圆角半径, 左下圆角半径, 右下圆角半径]
 */
ht.ui.drawable.ColorDrawable.prototype.getRadius = function() {};

/** 
 * 设置要绘制的颜色
 * @param {color} color 要绘制的颜色值，如'red'、'#00ff00' 等
 */
ht.ui.drawable.ColorDrawable.prototype.setColor = function(color) {};

/** 
 * 设置绘制范围的圆角半径，配合此参数可绘制圆角矩形
 * @param {Number|Array} radius 圆角半径；如果是数组，则表示[左上圆角半径, 右上圆角半径, 左下圆角半径, 右下圆角半径]
 */
ht.ui.drawable.ColorDrawable.prototype.setRadius = function(radius) {};
/**
 * ImageDrawable 类从 ht.ui.drawable.Drawable 继承，重写了 draw 方法来绘制图片和矢量图；
 * 提供了拉伸、染色等属性来控制绘制效果。
 * @param {String|Object} image 要绘制的图片，可以是注册的图片名或图片路径或者矢量对象
 * @param {String} [stretch] 拉伸方式，可选值为：'fill'|'uniform'|'centerUniform'|'center'|null(等同于 centerUniform)
 * @param {color} [colorTint] 染色
 * @param {rect} [rect] 图片矩形范围，格式为：{x: x, y: y, width: width, height: height}
 * @constructor
 * @extends ht.ui.drawable.Drawable
 * @example
 * button.setBackgroundDrawable(new ht.ui.drawable.ImageDrawable('node_image'));
 */
ht.ui.drawable.ImageDrawable = function(image, stretch, colorTint, rect) {};

/** 
 * 获取要绘制的图片
 * @return {String|Object} 要绘制的图片，可能是注册的图片名或图片路径或者矢量对象
 */
ht.ui.drawable.ImageDrawable.prototype.getImage = function() {};

/** 
 * 获取拉伸方式，默认为 'centerUniform'
 * @return {String} 拉伸方式，可选值为：'fill'|'uniform'|'centerUniform'|'center'|null(等同于 centerUniform)
 */
ht.ui.drawable.ImageDrawable.prototype.getStretch = function() {};

/** 
 * 获取图片染色
 * @return {color} 图片染色
 */
ht.ui.drawable.ImageDrawable.prototype.getColorTint = function() {};

/** 
 * 获取图片范围
 * @return {rect} 图片范围
 */
ht.ui.drawable.ImageDrawable.prototype.getRect = function() {};


/** 
 * 设置要绘制的图片
 * @param {String|Object} image 要绘制的图片，可以是注册的图片名或图片路径或者矢量对象
 */
ht.ui.drawable.ImageDrawable.prototype.setImage = function(image) {};

/** 
 * 设置拉伸方式
 * @param {String} stretch 拉伸方式，可选值为：'fill'|'uniform'|'centerUniform'|'center'|null(等同于 'fill')
 */
ht.ui.drawable.ImageDrawable.prototype.setStretch = function(stretch) {};

/** 
 * 设置图片染色
 * @param {color} color 颜色值
 */
ht.ui.drawable.ImageDrawable.prototype.setColorTint = function(color) {};


/** 
 * 设置图片范围
 * @param {rect} rect 矩形范围，格式为：{x: 'left'|'right'|'center'|Number, y: 'top'|'bottom'|'middle'|Number, width: 'wrap_content'|'match_parent'|Number, height: 'wrap_content'|'match_parent'|Number }
 */
ht.ui.drawable.ImageDrawable.prototype.setRect = function(rect) {};
/**
 * NinePatchImageDrawable 类从 ht.ui.drawable.Drawable 继承，重写了 draw 方法来绘制九宫格图片，
 * 九宫格图片格式遵循 Android 标准
 * @param {String} image 要绘制的九宫格图片，可以是注册的图片名或图片路径
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.NinePatchImageDrawable = function(image) {};

/** 
 * 获取要绘制的九宫格图片
 * @return {String} 要绘制的九宫格图片，可能是注册的图片名或图片路径
 */
ht.ui.drawable.NinePatchImageDrawable.prototype.getImage = function() {};

/** 
 * 获取图片染色
 * @return {color} 图片染色
 */
ht.ui.drawable.NinePatchImageDrawable.prototype.getColorTint = function() {};

/** 
 * 设置要绘制的九宫格图片
 * @param {String} image 要绘制的九宫格图片，可以是注册的图片名或图片路径
 */
ht.ui.drawable.NinePatchImageDrawable.prototype.setImage = function(image) {};

/** 
 * 设置图片染色
 * @param {color} color 颜色值
 */
ht.ui.drawable.NinePatchImageDrawable.prototype.setColorTint = function(color) {};
/**
 * 此类用于绘制选中行背景
 * @param {Number} borderSize 边框宽度
 * @param {color} borderColor 边框颜色
 * @param {color} startColor 开始渐变色
 * @param {color} endColor 结束渐变色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.SelectListItemDrawable = function(borderSize, borderColor, startColor, endColor) {};

/** 
 * 获取边框宽度
 * @return {Number} 边框宽度
 */
ht.ui.drawable.SelectListItemDrawable.prototype.getBorderSize = function() {};

/** 
 * 获取边框颜色
 * @return {color} 边框颜色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.getBorderColor = function() {};

/** 
 * 获取开始渐变色
 * @return {color} 开始渐变色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.getStartColor = function() {};


/** 
 * 获取结束渐变色
 * @return {color} 结束渐变色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.getEndColor = function() {};

/** 
 * 设置边框宽度
 * @param {Number} borderSize 边框宽度
 */
ht.ui.drawable.SelectListItemDrawable.prototype.setBorderSize = function(borderSize) {};

/** 
 * 设置边框颜色
 * @param {color} color 边框颜色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.setBorderColor = function(color) {};

/** 
 * 设置开始渐变色
 * @return {color} color 开始渐变色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.setStrtColor = function(color) {};

/** 
 * 设置结束渐变色
 * @param {color} color 结束渐变色
 */
ht.ui.drawable.SelectListItemDrawable.prototype.setEndColor = function(color) {};

/**
 * 此类用于绘制菜单项的 hover 和选中背景
 * @param {Number} borderSize 边框高度
 * @param {color} borderColor 边框颜色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.HoverMenuItemDrawable = function(borderSize, borderColor) {};

/** 
 * 获取边框高度
 * @return {Number} 边框高度
 */
ht.ui.drawable.HoverMenuItemDrawable.prototype.getBorderSize = function() {};

/** 
 * 获取边框颜色
 * @return {color} 边框颜色
 */
ht.ui.drawable.HoverMenuItemDrawable.prototype.getBorderColor = function() {};

/** 
 * 设置边框高度
 * @param {Number} borderSize 边框高度
 */
ht.ui.drawable.HoverMenuItemDrawable.prototype.setBorderSize = function(borderSize) {};

/** 
 * 设置边框颜色
 * @param {color} borderColor 边框颜色
 */
ht.ui.drawable.HoverMenuItemDrawable.prototype.setBorderColor = function(borderColor) {};
/**
 * 此类用于绘制 Panel 和 Dialog 组件的 header 背景
 * @param {Number} borderSize 边框宽度
 * @param {color} borderColor 边框颜色
 * @param {color} startColor 开始渐变色
 * @param {color} endColor 结束渐变色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable = function(borderSize, borderColor, startColor, endColor) {};

/** 
 * 获取边框宽度
 * @return {Number} 边框宽度
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.getBorderSize = function() {};

/** 
 * 获取边框颜色
 * @return {color} 边框颜色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.getBorderColor = function() {};

/** 
 * 获取开始渐变色
 * @return {color} 开始渐变色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.getStartColor = function() {};


/** 
 * 获取结束渐变色
 * @return {color} 结束渐变色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.getEndColor = function() {};

/** 
 * 设置边框宽度
 * @param {Number} borderSize 边框宽度
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.setBorderSize = function(borderSize) {};

/** 
 * 设置边框颜色
 * @param {color} color 边框颜色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.setBorderColor = function(color) {};

/** 
 * 设置开始渐变色
 * @return {color} color 开始渐变色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.setStrtColor = function(color) {};

/** 
 * 设置结束渐变色
 * @param {color} color 结束渐变色
 */
ht.ui.drawable.PanelHeaderBackgroundDrawable.prototype.setEndColor = function(color) {};

/**
 * 此类用于绘制 TabLayout 的标签头
 * @param {Number} borderWidth 边框宽度
 * @param {color} borderColor 边框颜色
 * @param {color} background 背景颜色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.TabBackgroundDrawable = function(borderWidth, borderColor, background) {};

/** 
 * 获取边框宽度
 * @return {Number} 宽度值
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.getBorderWidth = function() {};

/** 
 * 获取边框颜色
 * @return {color} 边框颜色
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.getBorderColor = function() {};

/** 
 * 获取背景色
 * @return {color} 背景色
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.getBackground = function() {};
/** 
 * 设置边框宽度
 * @param {Number} borderWidth 宽度值
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.setBorderWidth = function(borderWidth) {};

/** 
 * 设置边框颜色
 * @param {color} borderColor 边框颜色
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.setBorderColor = function(borderColor) {};

/** 
 * 设置背景色
 * @param {color} backgroundColor 背景色
 */
ht.ui.drawable.TabBackgroundDrawable.prototype.setBackground = function(backgroundColor) {};
/**
 * 此类用于绘制 TabLayout 的标签头(分割线方式)
 * @param {Number} lineWidth 分割线宽度
 * @param {color} color 分割线颜色
 * @param {String} position 位置
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.TabBackgroundLineDrawable = function(lineWidth, color, background) {};

/** 
 * 获取分割线宽度
 * @return {Number} 宽度值
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.getLineWidth = function() {};

/** 
 * 获取分割线颜色
 * @return {color} 颜色值
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.getColor = function() {};

/** 
 * 获取分割线位置
 * @return {String} 值为：outside|inside
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.getPosition = function() {};
/** 
 * 设置分割线宽度
 * @param {Number} color 宽度值
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.setLineWidth = function(width) {};

/** 
 * 设置分割线颜色
 * @param {color} color 颜色值
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.setColor = function(color) {};

/** 
 * 设置分割线位置
 * @param {String} position 位置，可选值为：outside|inside
 */
ht.ui.drawable.TabBackgroundLineDrawable.prototype.setPosition = function(position) {};
/**
 * 此类用于 Slider 和 ProgressBar 组件的背景
 * @param {color} startColor 开始渐变色
 * @param {color} endColor 结束渐变色
 * @param {Number} radius 圆角半径
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.SliderBarDrawable = function(startColor, endColor, radius) {};

/** 
 * 获取开始渐变色
 * @return {color} 开始渐变色
 */
ht.ui.drawable.SliderBarDrawable.prototype.getStartColor = function() {};

/** 
 * 获取结束渐变色
 * @return {color} 结束渐变色
 */
ht.ui.drawable.SliderBarDrawable.prototype.getEndColor = function() {};

/** 
 * 获取圆角半径
 * @return {Number} 圆角半径
 */
ht.ui.drawable.SliderBarDrawable.prototype.getRadius = function() {};

/** 
 * 设置开始渐变色
 * @return {color} color 开始渐变色
 */
ht.ui.drawable.SliderBarDrawable.prototype.setStrtColor = function(color) {};

/** 
 * 设置结束渐变色
 * @param {color} color 结束渐变色
 */
ht.ui.drawable.SliderBarDrawable.prototype.setEndColor = function(color) {};


/** 
 * 设置圆角半径
 * @param {Number} radius 圆角半径
 */
ht.ui.drawable.SliderBarDrawable.prototype.setRadius = function(radius) {};
/**
 * 此类用于绘制 DateTimePane 中的选中背景(如日期、月份)
 * @param {color} borderColor 边框颜色
 * @param {color} background 背景颜色
 * @param {Number|Boolean} radius 圆角，如果指定为 Boolean，则表示绘制一个圆形
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable = function(borderColor, background, radius) {};

/** 
 * 获取边框颜色
 * @return {color} 颜色值
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.getBorderColor = function() {};

/** 
 * 获取背景颜色
 * @return {color} 颜色值
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.getBackground = function() {};

/** 
 * 获取圆角
 * @return {Number|Boolean} 
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.getRadius = function() {};

/** 
 * 设置边框颜色
 * @param {color} borderColor
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.setBorderColor = function(borderColor) {};

/** 
 * 设置背景色
 * @param {color} background 颜色值
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.setBackground = function(background) {};

/** 
 * 设置圆角
 * @param {Number|Boolean} radius 圆角值，如果为 Boolean 表示绘制一个圆形
 */
ht.ui.drawable.DateTimePaneSelectGridDrawable.prototype.setRadius = function(radius) {};
/**
 * 此 Drawable 用于绘制箭头类型的面包屑导航中的导航按钮背景
 * @param {Number} borderWidth 边框宽度
 * @param {color} borderColor 边框颜色
 * @param {color} background 背景色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable = function(borderColor, borderWidth, background) {};

/** 
 * 获取导航按钮的边框颜色
 * @return {color} 颜色值
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.getBorderColor = function() {};


/** 
 * 设置导航按钮的边框颜色
 * @param {color} color 颜色值，如'red'、'#00ff00' 等
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.setBorderColor = function(color) {};

/** 
 * 获取导航按钮的边框宽度
 * @return {Number} 宽度值
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.getBorderWidth = function() {};


/** 
 * 设置导航按钮的边框宽度
 * @param {Number} width 宽度值
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.setBorderWidth = function(width) {};


/** 
 * 获取导航按钮的背景色
 * @return {color} 背景色
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.getBackground = function() {};


/** 
 * 设置导航按钮的背景色
 * @param {color} color 背景色
 */
ht.ui.drawable.BreadcrumbItemBackgroundDrawable.prototype.setBackground = function(color) {};
/**
 * ContextMenuScrollIndicatorDrawable 类从 ht.ui.drawable.Drawable 继承，重写了 draw 方法在绘制区域内绘制滚动指示
 * @param {String} direction 方向，值为 up|down
 * @param {color} backgroundColor 背景色
 * @param {color} foregroundColor 前景色
 * @constructor
 * @extends ht.ui.drawable.Drawable
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable = function(direction, backgroundColor, foregroundColor) {};

/** 
 * 获取绘制方向
 * @return {String}
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.getDirection = function() {};


/** 
 * 设置绘制方向
 * @param {String} direction 值为 up|down
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.setDirection = function(direction) {};

/** 
 * 获取背景颜色
 * @return {color} 
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.getBackgroundColor = function() {};


/** 
 * 设置背景颜色
 * @param {color} backgroundColor 
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.setBackgroundColor = function(backgroundColor) {};


/** 
 * 获取前景颜色
 * @return {color} 
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.getForegroundColor = function() {};


/** 
 * 设置前景颜色
 * @param {color} foregroundColor 
 */
ht.ui.drawable.ContextMenuScrollIndicatorDrawable.prototype.setForegroundColor = function(foregroundColor) {};
/**
 * Border 用于绘制组件边框，开发者如果需要自定义边框，需要继承此类并重写 drawBorder 函数
 * @constructor
 * @example 
 * // 下面这段代码绘制了一个直线边框
 * function MyBorder() {
 * 	MyBorder.superClass.constructor.call(this);
 * }
 * ht.Default.def(MyBorder, ht.ui.border.Border, {
 *  getLeft: function() {return 1;},
 *  getTop: function() {return 1;},
 *  getBottom: function() {return 1;},
 *  getRight: function() {return 1;},
 * 	draw: function(x, y, width, height, view, dom) {
 * 		var g = view.getRootContext(dom);
 * 		g.beginPath();
 * 		g.rect(x, y, width, height);
 * 		g.lineWidth = 1;
 * 		g.strokeStyle = 'red';
 * 		g.stroke();
 * 	}
 * });
 */
ht.ui.border.Border = function() {};

/**
 * 派发属性变化事件
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.border.Border.prototype.firePropertyChange = function(property, oldValue, newValue, compareFunc) {}

/**
 * 派发属性变化事件，{@link ht.ui.border.Border#firePropertyChange firePropertyChange} 的缩写
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.border.Border.prototype.fp = function(property, oldValue, newValue, compareFunc) {}

/**
 * 增加属性事件变化监听函数
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.border.Border.prototype.addPropertyChangeListener = function(listener, scope, ahead) {}

/**
 * 增加属性事件变化监听函数，{@link ht.ui.border.Border#addPropertyChangeListener addPropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.border.Border.prototype.mp = function(listener, scope, ahead) {}

/**
 * 删除属性事件变化监听器
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.border.Border.prototype.removePropertyChangeListener = function(listener, scope) {}

/**
 * 删除属性事件变化监听器，{@link ht.ui.border.Border#removePropertyChangeListener removePropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.border.Border.prototype.ump = function(listener, scope) {}

/**
 * 此边框是否使用 CSS 设置 border
 * @return {Boolean} 是否是 CSS border
 */
ht.ui.border.Border.prototype.isCSSBorder = function() {}

/**
 * 返回边框左侧的宽度
 * @return {Number} 左侧宽度
 */
ht.ui.border.Border.prototype.getLeft = function() {}

/**
 * 返回边框右侧的宽度
 * @return {Number} 右侧宽度
 */
ht.ui.border.Border.prototype.getRight = function() {}

/**
 * 返回边框顶部的高度
 * @return {Number} 顶部高度
 */
ht.ui.border.Border.prototype.getTop = function() {}

/**
 * 返回边框底部的高度
 * @return {Number} 底部高度
 */
ht.ui.border.Border.prototype.getBottom = function() {}

/**
 * 绘制 border，如果自定义 border，都需要重写此函数
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.View} view 当前在绘制的组件
 * @param {HTMLElement} [dom] 当前在绘制的 dom 对象，绝大多数组件无需考虑这个参数(因为只有一个绘制 canvas)，特殊情况下如右键菜单，每个子菜单都是一个单独的 canvas，这种情况下才有这个参数
 */
ht.ui.border.Border.prototype.drawBorder = function(x, y, width, height, view, dom) {}


/**
 * border 被卸载时调用，只有 CSS border 才需要重写这个函数将 CSS 清除，一般用 canvas 绘制的 border 无需重写此函数
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.View} view 当前在绘制的组件
 * @param {HTMLElement} [dom] 当前在绘制的 dom 对象，绝大多数组件无需考虑这个参数(因为只有一个绘制 canvas)，特殊情况下如右键菜单，每个子菜单都是一个单独的 canvas，这种情况下才有这个参数
 */
ht.ui.border.Border.prototype.tearDownBorder = function(x, y, width, height, view, dom) {}

/**
 * 获取可序列化的属性
 * @return {Object} 属性 map
 */
ht.ui.border.Border.prototype.getSerializableProperties = function() {}










/**
 * LineBorder 类从 ht.ui.border.Border 继承，在组件的画布上绘制直线边框
 * @param {Number} [width] 边框宽度
 * @param {color} [color] 边框颜色
 * @param {Number|Array} [radius] 圆角半径
 * @constructor
 * @extends {ht.ui.border.Border}
 * @example
 * button.setBorder(new ht.ui.border.LineBorder(1, 'red'));
 */
ht.ui.border.LineBorder = function(width, color, radius) {};

/**
 * 返回边框宽度
 * @return {Number} 边框宽度，默认为 1
 */
ht.ui.border.LineBorder.prototype.getWidth = function() {}


/**
 * 返回边框颜色
 * @return {color} 边框颜色值，默认为 'black'
 */
ht.ui.border.LineBorder.prototype.getColor = function() {}


/**
 * 返回边框圆角半径
 * @return {Number|Array} 边框圆角半径
 */
ht.ui.border.LineBorder.prototype.getRadius = function() {}

/**
 * 设置边框宽度
 * @param {Number} width 边框宽度，默认为 1
 */
ht.ui.border.LineBorder.prototype.setWidth = function(width) {}


/**
 * 设置边框颜色
 * @param {color} color 边框颜色值，默认为 'black'
 */
ht.ui.border.LineBorder.prototype.setColor = function(color) {}


/**
 * 设置边框圆角半径
 * @param {Number|Array} radius 边框圆角半径，如果为数组则表示：[左上角圆角, 右上角圆角, 右下角圆角, 左下角圆角]
 */
ht.ui.border.LineBorder.prototype.setRadius = function(radius) {}





/**
 * CSSBorder 类从 ht.ui.border.Border 继承，用 CSS 样式设置组件边框；注意此 border 不能应用于右键菜单组件
 * @param {Number|Array} [width] 边框宽度
 * @param {color|Array} [color] 边框颜色
 * @param {String} [style] 边框样式，如 solid、dashed 等
 * @constructor
 * @extends {ht.ui.border.Border}
 * @example
 * button.setBorder(new ht.ui.border.CSSBorder(1, 'red', 'dashed'));
 */
ht.ui.border.CSSBorder = function(width, color, style) {};

/**
 * 返回边框宽度
 * @return {Number|Array} 边框宽度，默认为 1
 */
ht.ui.border.CSSBorder.prototype.getWidth = function() {}


/**
 * 返回边框颜色
 * @return {color|Array} 边框颜色值，默认为 'black'
 */
ht.ui.border.CSSBorder.prototype.getColor = function() {}


/**
 * 返回边框样式
 * @return {String|Array} 边框样式，默认为 'solid'
 */
ht.ui.border.CSSBorder.prototype.getStyle = function() {}

/**
 * 设置边框宽度
 * @param {Number|Array} width 边框宽度，默认为 1；如果为数组，表示[上边框宽度、右边框宽度、下边框宽度、左边框宽度]
 */
ht.ui.border.CSSBorder.prototype.setWidth = function(width) {}


/**
 * 设置边框颜色
 * @param {color|Array} color 边框颜色值，默认为 'black'；如果为数组，表示[上边框颜色、右边框颜色、下边框颜色、左边框颜色]
 */
ht.ui.border.CSSBorder.prototype.setColor = function(color) {}

/**
 * 设置边框样式
 * @param {String|Array} style 边框样式，默认为 'solid'；如果为数组，表示[上边框样式、右边框样式、下边框样式、左边框样式]
 */
ht.ui.border.CSSBorder.prototype.setStyle = function(style) {}





/**
 * IndividualLineBorder 类从 ht.ui.border.Border 继承，在组件的画布上绘制直线边框；
 * 与 LineBorder 不同的是，此边框可以单独绘制某一个或几个方向的边框
 * @param {Number} [top] 顶部边框高度
 * @param {Number} [right] 右侧边框宽度
 * @param {Number} [bottom] 底部边框高度
 * @param {Number} [left] 左侧边框宽度
 * @param {color} [color] 边框颜色
 * @constructor
 * @extends {ht.ui.border.Border}
 * @example
 * // 只在顶部绘制边框
 * button.setBorder(new ht.ui.border.IndividualLineBorder(1, 0, 0, 0, 'red'));
 */
ht.ui.border.IndividualLineBorder = function(top, right, bottom, left, color) {};

/**
 * 返回边框颜色
 * @return {color} 边框颜色值，默认为 'black'
 */
ht.ui.border.IndividualLineBorder.prototype.getColor = function() {}

/**
 * 设置边框顶部高度
 * @param {Number} top 边框顶部高度，默认为 0
 */
ht.ui.border.IndividualLineBorder.prototype.setTop = function(top) {}

/**
 * 设置边框右侧宽度
 * @param {Number} right 边框右侧宽度，默认为 0
 */
ht.ui.border.IndividualLineBorder.prototype.setRight = function(right) {}

/**
 * 设置边框底部高度
 * @param {Number} bottom 边框底部高度，默认为 0
 */
ht.ui.border.IndividualLineBorder.prototype.setBottom = function(bottom) {}

/**
 * 设置边框左侧宽度
 * @param {Number} left 边框左侧宽度，默认为 0
 */
ht.ui.border.IndividualLineBorder.prototype.setLeft = function(left) {}

/**
 * 设置边框颜色
 * @param {color} color 边框颜色值，默认为 'black'
 */
ht.ui.border.IndividualLineBorder.prototype.setColor = function(color) {}






/**
 * ht.ui.Popover 容器使用的边框，支持绘制三角箭头
 * @param {Number} [width] 边框宽度
 * @param {color} [color] 边框颜色
 * @constructor
 * @extends {ht.ui.border.Border}
 */
ht.ui.border.PopoverBorder = function(width, color) {};

/**
 * 返回边框宽度
 * @return {Number} 边框宽度，默认为 1
 */
ht.ui.border.PopoverBorder.prototype.getWidth = function() {}


/**
 * 返回边框颜色
 * @return {color} 边框颜色值，默认为 '#e6e6e6'
 */
ht.ui.border.PopoverBorder.prototype.getColor = function() {}

/**
 * 设置边框宽度
 * @param {Number} width 边框宽度，默认为 1
 */
ht.ui.border.PopoverBorder.prototype.setWidth = function(width) {}


/**
 * 设置边框颜色
 * @param {color} color 边框颜色值，默认为 '#e6e6e6'
 */
ht.ui.border.PopoverBorder.prototype.setColor = function(color) {}
/**
 * FocusLineBorder 类从 ht.ui.border.Border 继承，在组件的画布上根据组件 focus 状态绘制不同颜色的直线边框；使用此边框时需要将组件的 redrawOnFocus 属性设为 true
 * @param {Number|Array} [width] 边框宽度
 * @param {color} [color] 边框颜色
 * @param {focusColor} [focusColor] focus 状态时的边框颜色
 * @param {Number|Array} [radius] 圆角半径
 * @constructor
 * @extends {ht.ui.border.Border}
 * @example
 * button.setBorder(new ht.ui.border.FocusLineBorder(1, 'red', 'green'));
 * button.setRedrawOnFocus(true);
 */
ht.ui.border.FocusLineBorder = function(width, color, focusColor, radius) {};

/**
 * 返回边框宽度
 * @return {Number|Array} 边框宽度，默认为 1
 */
ht.ui.border.FocusLineBorder.prototype.getWidth = function() {}


/**
 * 返回边框颜色
 * @return {color} 颜色值
 */
ht.ui.border.FocusLineBorder.prototype.getColor = function() {}

/**
 * 返回 focus 状态时的边框颜色
 * @return {color} 颜色值
 */
ht.ui.border.FocusLineBorder.prototype.getFocusColor = function() {}


/**
 * 返回边框圆角半径
 * @return {Number|Array} 边框圆角半径
 */
ht.ui.border.FocusLineBorder.prototype.getRadius = function() {}

/**
 * 设置边框宽度
 * @param {Number|Array} width 边框宽度，默认为 1；如果为数组表示：[上边框宽度、右边框宽度、下边框宽度、左边框宽度]
 */
ht.ui.border.FocusLineBorder.prototype.setWidth = function(width) {}


/**
 * 设置边框颜色
 * @param {color} color 颜色值
 */
ht.ui.border.FocusLineBorder.prototype.setColor = function(color) {}

/**
 * 设置 focus 状态时的边框颜色
 * @param {color} focusColor 颜色值
 */
ht.ui.border.FocusLineBorder.prototype.setFocusColor = function(focusColor) {}


/**
 * 设置边框圆角半径
 * @param {Number|Array} radius 边框圆角半径，如果为数组则表示：[左上角圆角, 右上角圆角, 右下角圆角, 左下角圆角]
 */
ht.ui.border.FocusLineBorder.prototype.setRadius = function(radius) {}





/**
 * TreeView、ListView 中的行数据、TableView、TreeTableView 中的单元格和 PropertyView 中的属性的编辑器接口；<br>
 * 此接口提供了一些回调函数(isEditable、initEditorView、afterLayout、beforeRemove、getEditorValue)可供重写以自定义自己的编辑器，并提供 stopEditing 和 cancelEditing 两个函数控制编辑器结束编辑<br><br>
 * 通过 addEditorListener 可监听的事件：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>stop</code></td>
 * <td>{ kind: 'stop' }</td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>cancel</code></td>
 * <td>{ kind: 'cancel' }</td>
 * <td>取消编辑时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * @constructor
 */
ht.ui.editor.Editor = function() {};

/** 
 * 是否可编辑；编辑之前此函数被调用，默认只有 event 是双击事件才返回 true
 * @param {Event} event 交互对象
 * @return {Boolean} 是否可编辑
 */
ht.ui.editor.Editor.prototype.isEditable = function(event) {};

/** 
 * 增加编辑器事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.editor.Editor.prototype.addEditorListener = function(listener, scope, ahead) {};

/**
 * 创建并返回编辑器组件；如果 isEditable 返回 true，此函数将会被调用；此函数只回调一次(初始化)，后续获取编辑器组件应该调用 getEditorView
 * @param {ht.Data} data 数据元素
 * @param {ht.ui.Column|ht.ui.Property} column 列对象或属性对象
 * @param {ht.ui.View} view 当前正在编辑的视图组件，如 ListView
 * @return {ht.ui.View} 编辑器组件，如文本框等
 */
ht.ui.editor.Editor.prototype.initEditorView = function(data, column, view) {};

/**
 * 获取编辑器组件
 * @return {ht.ui.View} 编辑器组件，如文本框等
 */
ht.ui.editor.Editor.prototype.getEditorView = function(data, column, view) {};

/**
 * 编辑器组件布局完成后调用此函数，可以重写此函数做组件的初始化工作，如打开下拉框
 * @param {ht.ui.View} view 编辑器组件，如文本框等
 */
ht.ui.editor.Editor.prototype.afterLayout = function(view) {};

/**
 * 编辑器组件移除之前调用此函数，可以重写此函数做组件的清理工作，如关闭下拉框
 * @param {ht.ui.View} view 编辑器组件，如文本框等
 */
ht.ui.editor.Editor.prototype.beforeRemove = function(view) {};

/**
 * 结束编辑并保存编辑器组件的值；在 initEditorView 函数中创建组件时应当监听相应事件(如文本框敲击回车)调用此函数结束编辑
 */
ht.ui.editor.Editor.prototype.stopEditing = function() {};

/**
 * 结束编辑并丢弃编辑器组件里的值；在 initEditorView 函数中创建组件时应当监听相应事件(如文本框敲击回车)调用此函数结束编辑，编辑器组件的值将被丢弃
 */
ht.ui.editor.Editor.prototype.cancelEditing = function() {};

/**
 * 派发值变化事件；如果希望编辑器组件(如 Slider)的值在改变时立即(而不是结束编辑时)同步到正在编辑的视图组件中，应该监听编辑器组件相关事件，并调用此函数将编辑器组件的值派发出去
 * @param {Object} value 编辑器组件的值
 */
ht.ui.editor.Editor.prototype.fireValueChange = function(value) {};

/**
 * 返回编辑器组件的值
 * @return {Object} 编辑器组件的值
 */
ht.ui.editor.Editor.prototype.getEditorValue = function() {};





/**
 * 文本编辑器，重写了 getEditorView 函数创建文本框(TextField) 作为编辑器组件
 * @constructor
 * @extends {ht.ui.editor.Editor}
 */
ht.ui.editor.StringEditor = function() {};

/**
 * 创建一个 ht.ui.TextField 组件
 * @return {ht.ui.TextField} 文本框组件
 */
ht.ui.editor.StringEditor.prototype.createTextField = function() {};

/**
 * 数字编辑器
 * @constructor
 * @extends {ht.ui.editor.StringEditor}
 */
ht.ui.editor.NumberEditor = function() {};

/**
 * 整数编辑器
 * @constructor
 * @extends {ht.ui.editor.StringEditor}
 */
ht.ui.editor.IntEditor = function() {};

/**
 * 颜色编辑器，重写了 getEditorView 函数创建颜色选择器(ColorPicker) 作为编辑器组件
 * @constructor
 * @extends {ht.ui.editor.Editor}
 */
ht.ui.editor.ColorEditor = function() {};

/**
 * ComboBox 组件的下拉模版接口<br>
 * @constructor
 */
ht.ui.DropDownTemplate = function() {};

/** 
 * 获取下拉模版组件的宽度，首先取 width 属性(通过 comboBox.setDropDownConfig 配置)，如果为空则取组件的 preferredSize.width，同时会确保返回值不会大于组件的 maxSize.width<br>
 * 可重写自定义
 * @return {Number} 组件宽度
 */
ht.ui.DropDownTemplate.prototype.getWidth = function() {};

/** 
 * 获取下拉模版组件的高度，首先取 height 属性(通过 comboBox.setDropDownConfig 配置)，如果为空则取组件的 preferredSize.height，同时会确保返回值不会大于组件的 maxSize.height<br>
 * 可重写自定义
 * @return {Number} 组件高度
 */
ht.ui.DropDownTemplate.prototype.getHeight = function() {};

/** 
 * 初始化下拉组件；此函数只回调一次(初始化)，后续获取下拉组件应该调用 getDropDownView
 * @param {ht.ui.ComboBox} master 当前 comboBox
 * @param {Array} datas 数据列表
 * @param {Object} value 当前值
 * @return {ht.ui.View} 组件实例
 */
ht.ui.DropDownTemplate.prototype.initDropDownView = function(master, datas, value) {};

/** 
 * 获取下拉组件
 * @return {ht.ui.View} 组件实例
 */
ht.ui.DropDownTemplate.prototype.getDropDownView = function() {};

/** 
 * 获取下拉组件的值；如果通过 stop 函数关闭下拉组件，此函数会被调用，返回值被当作 ComboBox 的值
 * @return {Object} 值
 */
ht.ui.DropDownTemplate.prototype.getDropDownValue = function() {};

/** 
 * 关闭下拉组件；在 initDropDownView 函数中创建组件时可以监听相应事件(如文本框敲击回车)调用此函数关闭下拉组件<br>
 * 调用这个函数关闭下拉组件会使下拉组件的值同步到 ComboBox 中
 */
ht.ui.DropDownTemplate.prototype.stop = function() {};

/** 
 * 关闭下拉组件；在 initDropDownView 函数中创建组件时可以监听相应事件(如文本框敲击回车)调用此函数关闭下拉组件<br>
 * 调用这个函数关闭下拉组件时 getDropDownValue 不会被回调，因此下拉组件的值会被丢弃
 */
ht.ui.DropDownTemplate.prototype.cancel = function() {};

/** 
 * 下拉组件打开之前的回调函数
 * @param {Object} value ComboBox 的值
 */
ht.ui.DropDownTemplate.prototype.beforeOpen = function(value) {};

/** 
 * 下拉组件打开之后的回调函数
 * @param {Object} value ComboBox 的值
 */
ht.ui.DropDownTemplate.prototype.afterOpen = function(value) {};

/** 
 * 下拉组件关闭之前的回调函数
 */
ht.ui.DropDownTemplate.prototype.beforeClose = function() {};

/** 
 * 下拉组件关闭之后的回调函数
 */
ht.ui.DropDownTemplate.prototype.afterClose = function() {};


/** 
 * 是否启用输入过滤
 * @return {Boolean}
 */
ht.ui.DropDownTemplate.prototype.isFilterEnabled = function() {};

/** 
 * 设置是否启用输入过滤
 * @param {Boolean} enabled 
 */
ht.ui.DropDownTemplate.prototype.setFilterEnabled = function(enabled) {};


/** 
 * 获取过滤函数
 * @return {Function}
 */
ht.ui.DropDownTemplate.prototype.getFilterFunc = function() {};

/** 
 * 设置过滤函数
 * @param {Function} func 函数格式为：function(data, value) { return true|false }
 */
ht.ui.DropDownTemplate.prototype.setFilterFunc = function(func) {};
/**
 * ComboBox 弹出的列表类，从 ht.ui.ListView 继承<br>
 * 此类名用于在外部定义 ComboBox 弹出列表的样式，一般无需直接使用此类
 * @constructor
 * @extends {ht.ui.ListView}
 */
ht.ui.PopupList = function() {};

/**
 * 设置可选中过滤器
 * @param {Function} func 过滤器函数
 */
ht.ui.PopupList.prototype.setSelectableFunc = function(func) {}

/**
 * 获取可选中过滤器
 * @return {Function} 过滤器函数
 */
ht.ui.PopupList.prototype.getSelectableFunc = function() {}
/**
 * 所有视图组件的基类，所有可视化组件都必须从此类继承；此类提供的主要功能如下：
 * <ul>
 * <li> 使用 Drawable 接口绘制背景 </li>
 * <li> 使用 Border 接口绘制边框 </li>
 * <li> padding 内边距 </li>
 * <li> style 样式支持 </li>
 * <li> 提供 preferredSize/minSize/maxSize 机制用于布局 </li>
 * </ul>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>invalidate</code></td>
 * <td> { kind: 'invalidate' } </td>
 * <td>组件被无效时派发的事件</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidatePreferredSize</code></td>
 * <td>  { kind: 'invalidatePreferredSize' }  </td>
 * <td>组件的 preferredSize 无效时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beginValidate</code></td>
 * <td> { kind: 'beginValidate' } </td>
 * <td>组件刷新之前被派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endValidate</code></td>
 * <td>  { kind: 'endValidate' }  </td>
 * <td>组件刷新之后被派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>mounted</code></td>
 * <td>  { kind: 'mounted' }  </td>
 * <td>组件通过 addToDOM 加到页面中时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>unmounted</code></td>
 * <td>  { kind: 'unmounted' }  </td>
 * <td>组件通过 removeFromDOM 从页面中移除时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性：x, y, width, height, border, background, backgroundDrawable, cursor, padding, disabled, disabledBackground, layoutParams, zIndex, boxShadow, borderRadius, redrawOnFocus, popoverPlacements
 * @constructor
 */
ht.ui.View = function() {};

/**
 * 获取交互器类名数组
 * @return {Array} 交互器类名数组
 */
ht.ui.View.prototype.getInteractorClasses = function() {}

/**
 * 获取工具提示文本内容
 * @return {String} 工具提示文本内容
 */
ht.ui.View.prototype.getToolTip = function () {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.View.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.View.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.View#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.View.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.View#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.View.prototype.disableToolTip = function () {};

/**
 * 初始化组件的 DOM 结构
 * @param {Boolean} [canvas] 是否创建一个私有的 canvas 用来绘制私有内容，一般情况下在默认的 canvas 中绘制就可以，不需要此参数
 */
ht.ui.View.prototype.initView = function(canvas) {}

/**
 * 将组件从页面的 DOM 树中删除；如果要删除通过 addToDOM 添加到页面的组件，应使用此函数，以免内存泄漏
 */
ht.ui.View.prototype.removeFromDOM = function(dom, rect) {}

/**
 * 将组件加到页面的 DOM 树中；如果没有任何参数，或者只指定第一个参数并且第一个参数为 window，则组件会填满整个浏览器窗口，
 * 并且浏览器窗口大小变化时也会自动刷新组件
 * @param {HTMLElement} [dom] 指定组件的父亲 DOM，如果为空，则加到 body 中
 * @param {Object} [rect] 组件的范围，格式为 {x: x, y: y, width: width, height: height}；如果为空，则填满父亲 DOM
 */
ht.ui.View.prototype.addToDOM = function(dom, rect) {}

/**
 * 判断鼠标事件是否发生在组件自身上，例如容器的 div 上监听到一个原生的鼠标点击事件，此事件可能来自容器，也可能来自子组件的冒泡传播；
 * 如果自定义组件，并且改变了组件的 DOM 结构，需要重写此函数
 * @param {Event} event 事件对象
 * @return {Boolean} 事件是否发生在自身 DOM 上
 */
ht.ui.View.prototype.isSelfViewEvent = function(event) {}

/**
 * 判断属性是否是样式属性
 * @param  {String}  property 属性名
 * @return {Boolean} 是否是样式属性
 */
ht.ui.View.prototype.isStyleProperty = function(property) {}


/**
 * 追加样式属性，将参数属性加入到样式属性列表中
 * @param {String }property 属性名
 */
ht.ui.View.prototype.addStyleProperty = function(property) {}

/**
 * 删除样式属性，将参数属性从样式属性列表中移除
 * @param {String} property 属性名
 */
ht.ui.View.prototype.removeStyleProperty = function(property) {}

/**
 * 计算 preferredSize，preferredSize 表示组件自身最合适的尺寸，布局器布局时会考虑此尺寸；
 * 如果自定义组件一般需要重写此函数
 * @return {Object} preferredSize
 */
ht.ui.View.prototype.figurePreferredSize = function() {}

/**
 * 获取 preferredSize，preferredSize 表示组件自身最合适的尺寸，布局器布局时会考虑此尺寸；
 * 如果用户没有设置，则调用 figurePreferredSize 计算
 * @return {Object} preferredSize
 */
ht.ui.View.prototype.getPreferredSize = function() {}

/**
 * 获取弹框组件
 * @return {ht.ui.Popover} 弹框组件
 */
ht.ui.View.prototype.getPopover = function() {}


/**
 * 获取弹框组件的弹出位置
 * @return {Array} 弹出位置
 */
ht.ui.View.prototype.getPopoverPlacements = function() {}

/**
 * 获取弹框触发器
 * @return {String} 弹框触发器，值为：click|hover 
 */
ht.ui.View.prototype.getPopoverTrigger = function() {}

/**
 * 判断 preferredSize 是否被设置(如果为 true, 组件不再调用 figurePreferredSize 自动计算)
 * @return {Boolean} preferredSize 是否被设置
 */
ht.ui.View.prototype.isPreferredSizeSet = function() {}

/**
 * 计算 minSize，minSize 表示组件的最小尺寸，布局器布局时会考虑此尺寸；
 * @return {Object} minSize
 */
ht.ui.View.prototype.figureMinSize = function() {}

/**
 * 获取 minSize，minSize 表示组件的最小尺寸；
 * 如果用户没有设置，则调用 figureMinSize 计算
 * @return {Object} minSize
 */
ht.ui.View.prototype.getMinSize = function() {}

/**
 * 判断 minSize 是否被设置(如果为 true, 组件不再调用 figureMinSize 自动计算)
 * @return {Boolean} minSize 是否被设置
 */
ht.ui.View.prototype.isMinSizeSet = function() {}

/**
 * 计算 maxSize，maxSize 表示组件的最大尺寸，布局器布局时会考虑此尺寸；
 * @return {Object} maxSize
 */
ht.ui.View.prototype.figureMaxSize = function() {}

/**
 * 获取 maxSize，maxSize 表示组件自身最合适的尺寸；
 * 如果用户没有设置，则调用 figureMaxSize 计算
 * @return {Object} maxSize
 */
ht.ui.View.prototype.getMaxSize = function() {}

/**
 * 判断 maxSize 是否被设置(如果为 true, 组件不再调用 figureMaxSize 自动计算)
 * @return {Boolean} maxSize 是否被设置
 */
ht.ui.View.prototype.isMaxSizeSet = function() {}

/**
 * 获取样式属性映射表，格式为：{'padding': true, 'border': true ...}
 * @return {Object} 样式属性映射表
 */
ht.ui.View.prototype.getStyleProperties = function() {}

/**
 * 获取 DOM 属性映射表，格式为：{'width': true ...}；这些属性发生变化才会更新 DOM 结构，否则只需要绘制内容即可
 * @return {Object} DOM 属性映射表
 */
ht.ui.View.prototype.getDOMProperties = function(){}

/**
 * 获取 preferredSize 属性映射表，格式为：{'border': true ...}；这些属性变化会重新计算 preferredSize
 * @return {Object} preferredSize 属性映射表
 */
ht.ui.View.prototype.getPreferredSizeProperties = function() {}

/**
 * 获取 minSize 属性映射表，格式为：{'border': true ...}；这些属性变化会重新计算 minSize
 * @return {Object} minSize 属性映射表
 */
ht.ui.View.prototype.getMinSizeProperties = function() {}

/**
 * 获取 maxSize 属性映射表，格式为：{'border': true ...}；这些属性变化会重新计算 maxSize
 * @return {Object} maxSize 属性映射表
 */
ht.ui.View.prototype.getMaxSizeProperties = function() {}

/**
 * 获取组件最根层的 div
 * @return {HTMLElement} 组件 div
 */
ht.ui.View.prototype.getView = function() {}

/**
 * 获取绑定的右键菜单
 * @return {ht.ui.ContextMenu} 右键菜单
 */
ht.ui.View.prototype.getContextMenu = function() {}

/**
 * 获取内容 div；对于普通组件，contentDiv 里放置了 canvas 画布；对于容器组件，contentDiv 里除了画布，还有所有的子组件
 * @return {HTMLElement} 内容 div
 */
ht.ui.View.prototype.getContentDiv = function() {}

/**
 * 获取根 Canvas，这个 Canvas 用来绘制背景、边框、内容等
 * @return {HTMLCanvasElement} Canvas DOM 对象
 */
ht.ui.View.prototype.getRootCanvas = function() {}

/**
 * 获取内容宽度，即组件宽度减去边框宽度和左右内边距宽度
 * @return {Number} 内容宽度
 */
ht.ui.View.prototype.getContentWidth = function() {}

/**
 * 获取内容高度，即组件高度减去边框高度和上下内边距高度
 * @return {Number} 内容高度
 */
ht.ui.View.prototype.getContentHeight = function() {}

/**
 * 获取内容左侧距离，即左侧边框宽度加左侧内边距宽度
 * @return {Number} 内容左侧距离
 */
ht.ui.View.prototype.getContentLeft = function() {}

/**
 * 获取内容右侧距离，即右侧边框宽度加右侧内边距宽度
 * @return {Number} 内容右侧距离
 */
ht.ui.View.prototype.getContentRight = function() {}

/**
 * 获取内容顶部距离，即顶部边框高度加顶部内边距高度
 * @return {Number} 内容顶部距离
 */
ht.ui.View.prototype.getContentTop = function() {}

/**
 * 获取内容底部距离，即底部边框高度加底部内边距高度
 * @return {Number} 内容底部距离
 */
ht.ui.View.prototype.getContentBottom = function() {}

/**
 * 取组件的某个属性的原始值；
 * 不要直接去取私有变量，例如 padding，不要直接取 _padding 私有变量，而是应该使用此函数取值；
 * 此函数取值顺序：
 * <ul>
 * <li> 先取 _padding 私有变量 </li>
 * <li> 如果为 undefind，再去取样式表中取值 </li>
 * <li> 如果为 undefied，再取 __padding 私有变量 </li>
 * </ul>
 * 
 * @param {String} name 属性名
 * @return {Object} 属性值
 * @example
 * // 这段代码演示了覆盖 getPadding 函数，先取出旧的 padding，再 +2 并返回
 * button.getPadding = function() {
 * 	var oldPadding = this.getPropertyValue('padding');
 * 	oldPadding += 2;
 * 	return oldPadding;
 * }
 */
ht.ui.View.prototype.getPropertyValue = function(name) {}

/**
 * 获取交互 div
 * @return {HTMLElement} 交互 div
 */
ht.ui.View.prototype.getInteractionDiv = function() {}

/**
 * 获取唯一标识，根据标识可快速查找到组件
 * @return {Object} 唯一标识
 */
ht.ui.View.prototype.getId = function() {}

/**
 * 获取组件的 x 坐标
 * @return {Number} x 坐标
 */
ht.ui.View.prototype.getX = function() {}

/**
 * 获取组件的 y 坐标
 * @return {Number} y 坐标
 */
ht.ui.View.prototype.getY = function() {}


/**
 * 获取组件的宽度
 * @return {Number} 组件宽度
 */
ht.ui.View.prototype.getWidth = function() {}

/**
 * 获取组件的高度
 * @return {Number} 组件高度
 */
ht.ui.View.prototype.getHeight = function() {}


/**
 * 获取组件的边框
 * @return {ht.border.Border} 组件边框
 */
ht.ui.View.prototype.getBorder = function() {}

/**
 * 获取组件边框的左侧宽度
 * @return {Number} 组件边框左侧宽度
 */
ht.ui.View.prototype.getBorderLeft = function() {}

/**
 * 获取组件边框的右侧宽度
 * @return {Number} 组件边框右侧宽度
 */
ht.ui.View.prototype.getBorderRight = function() {}

/**
 * 获取组件边框的顶部高度
 * @return {Number} 组件边框顶部高度
 */
ht.ui.View.prototype.getBorderTop=  function() {}

/**
 * 获取组件边框的底部高度
 * @return {Number} 组件边框底部高度
 */
ht.ui.View.prototype.getBorderBottom = function() {}

/**
 * 获取 CSS 阴影值
 * @return {String} 阴影值
 */
ht.ui.View.prototype.getBoxShadow=  function() {}


/**
 * 获取 CSS 边框圆角
 * @return {Number|Array} 边框圆角
 */
ht.ui.View.prototype.getBorderRadius =  function() {}

/**
 * 获取组件的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.View#getBackgroundDrawable getBackgroundDrawable}
 */
ht.ui.View.prototype.getBackground = function() {}

/**
 * 获取组件背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 组件背景
 */
ht.ui.View.prototype.getBackgroundDrawable = function() {}

/**
 * 获取鼠标样式(CSS 格式)
 * @return {String} 鼠标样式
 */
ht.ui.View.prototype.getCursor = function() {}

/**
 * 获取组件内边距，如果是数字，说明四边使用相同的内边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 * @return {Number|Array} 内边距
 */
ht.ui.View.prototype.getPadding = function() {}

/**
 * 获取组件左侧内边距宽度
 * @return {Number} 左侧内边距宽度
 */
ht.ui.View.prototype.getPaddingLeft = function() {}

/**
 * 获取组件右侧内边距宽度
 * @return {Number} 右侧内边距宽度
 */
ht.ui.View.prototype.getPaddingRight = function() {}

/**
 * 获取组件顶部内边距高度
 * @return {Number} 顶部内边距高度
 */
ht.ui.View.prototype.getPaddingTop = function() {}

/**
 * 获取组件底部内边距高度
 * @return {Number} 底部内边距高度
 */
ht.ui.View.prototype.getPaddingBottom = function() {}


/**
 * 获取组件外边距，如果是数字，说明四边使用相同的外边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 * @return {Number|Array} 外边距
 */
ht.ui.View.prototype.getMargin = function() {}

/**
 * 设置组件外边距，如果是数字，说明四边使用相同的外边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 * @param {Number|Array} margin 外边距；父容器布局时，会动态将此参数填充到 layoutParams 中(优先级低于 layoutParams，如果 layoutParams 参数中没有指定相应的 margin 才会从组件上取值)
 */
ht.ui.View.prototype.setMargin = function(margin) {}

/**
 * 获取组件左侧外边距宽度
 * @return {Number} 左侧外边距宽度
 */
ht.ui.View.prototype.getMarignLeft = function() {}

/**
 * 获取组件右侧外边距宽度
 * @return {Number} 右侧外边距宽度
 */
ht.ui.View.prototype.getMarginRight = function() {}

/**
 * 获取组件顶部外边距高度
 * @return {Number} 顶部外边距高度
 */
ht.ui.View.prototype.getMarginTop = function() {}

/**
 * 获取组件底部外边距高度
 * @return {Number} 底部外边距高度
 */
ht.ui.View.prototype.getMarginBottom = function() {}


/**
 * 组件是否可以获取焦点
 * @return {Boolean} 是否可获取焦点
 */
ht.ui.View.prototype.isFocusable = function() {}

/**
 * 判断组件获取或失去焦点时，是否重绘自身
 * @return {Boolean} 是否重绘自身
 */
ht.ui.View.prototype.isRedrawOnFocus = function() {}

/**
 * 组件是否被禁用
 * @return {Boolean} 是否被禁用
 */
ht.ui.View.prototype.isDisabled = function() {}

/**
 * 组件被禁用时，遮罩的背景；这个值被设置到遮罩 div 的 background 样式上，因此可以使用所有 CSS 支持的 background 类型
 * @return {String} 遮罩背景
 */
ht.ui.View.prototype.getDisabledBackground = function() {}

/**
 * 获取布局参数
 * @param {String} [key] 布局参数中的 key
 * @return {Object} 如果指定 key 参数返回布局参数中 key 对应的值，否则返回整个布局参数对象
 */
ht.ui.View.prototype.getLayoutParams = function(key) {}

/**
 * 获取父容器
 * @return {ht.ui.ViewGroup} 父容器
 */
ht.ui.View.prototype.getParent = function() {}

/**
 * 获取组件的堆叠顺序
 * @return {Number} 堆叠顺序
 */
ht.ui.View.prototype.getZIndex = function() {}

/**
 * 获取组件的样式名；如果有多个样式名，以空格分开，如：'header title'；注意此样式是指 HT 的样式，而非 CSS 样式
 * @return {String} 样式名
 */
ht.ui.View.prototype.getStyle = function() {}

/**
 * 获取样式属性对应的样式值
 * @param {String} property 属性名
 * @return {Object} 样式值
 */
ht.ui.View.prototype.getStyleValue = function(property) {}

/**
 * 获取组件匹配到的样式
 * @return {Object} 
 */
ht.ui.View.prototype.getMatchedStyles = function() {}

/**
 * 判断焦点是否在组件上
 * @return {Boolean} 焦点是否在组件上
 */
ht.ui.View.prototype.hasFocus = function() {}

/**
 * 判断组件是否有私有 canvas
 * @return {Boolean} 组件是否有私有 canvas
 */
ht.ui.View.prototype.hasContentCanvas = function() {}

/**
 * 请求获取焦点
 */
ht.ui.View.prototype.requestFocus = function() {}

/**
 * 使组件无效化
 * @param {Boolean} [forceLayoutChildren] 是否强制刷新子组件(即使子组件没有无效标记)
 * @see {@link ht.ui.View#invalidate invalidate}
 */
ht.ui.View.prototype.iv = function(forceLayoutChildren) {}

/**
 * 设置所有的重绘标记包括重绘 canvas 标记、重绘 border 标记和重新布局 DOM 标记 并调用 iv
 * @param {Boolean} [forceLayoutChildren] 是否强制刷新子组件(即使子组件没有无效标记)
 */
ht.ui.View.prototype.redraw = function(forceLayoutChildren) {}

/**
 * 设置重新布局 DOM 标记并调用 invalidate, 组件下次刷新时会强制更新 DOM
 */
ht.ui.View.prototype.invalidateDOM = function() {}

/**
 * 使组件无效化
 * @param {Boolean} [forceLayoutChildren] 是否强制刷新子组件(即使子组件没有无效标记)
 * @see {@link ht.ui.View#iv iv}
 */
ht.ui.View.prototype.invalidate = function(forceLayoutChildren) {}

/**
 * 判断组件是否在 DOM 树中
 * @return {Boolean} 组件是否在 DOM 树中
 */
ht.ui.View.prototype.isInDOM = function() {}

/**
 * 判断组件是否可见
 * @return {Boolean} 组件是否可见
 */
ht.ui.View.prototype.isVisible = function() {}

/**
 * 绘制背景
 * @param {ht.ui.drawable.Drawable} background 背景 Drawable
 * @param {Number} [x] 起点 x 坐标
 * @param {Number} [y] 起点 y 坐标
 * @param {Number} [width] 宽度
 * @param {Number} [height] 高度
 * @param {HTMLElement} [dom] 指定绘制的目标 DOM
 */
ht.ui.View.prototype.drawBackground = function(background, x, y, width, height, dom) {}

/**
 * 绘制边框
 * @param {ht.border.Border} border 边框对象
 * @param {Number} [x] 起点 x 坐标
 * @param {Number} [y] 起点 y 坐标
 * @param {Number} [width] 宽度
 * @param {Number} [height] 高度
 * @param {HTMLElement} [dom] 指定绘制的目标 DOM
 */
ht.ui.View.prototype.drawBorder = function(border, x, y, width, height, dom) {}

/**
 * 卸载边框；只有 CSS 类型的边框才需要此函数
 * @param {ht.border.Border} border 边框对象
 * @param {Number} [x] 起点 x 坐标
 * @param {Number} [y] 起点 y 坐标
 * @param {Number} [width] 宽度
 * @param {Number} [height] 高度
 * @param {HTMLElement} [dom] 指定绘制的目标 DOM
 */
ht.ui.View.prototype.tearDownBorder = function(border, x, y, width, height, dom) {}

/**
 * 获取默认的 canvas 画布的画笔对象，或者获取参数 DOM 对象的画笔；
 * 此函数在绘制背景、边框和自定义组件的情况下经常使用
 * @param {HTMLElement} [dom] 指定目标 DOM，通常是个 canvas 类型的 DOM 对象
 * @return {CanvasRenderingContext2D} 画笔对象
 */
ht.ui.View.prototype.getRootContext = function(dom) {}

/**
 * 重新调整组件的 DOM 结构布局，设置坐标、宽高以及内边距等
 * @param {Number} x 组件的 x 坐标
 * @param {Number} y 组件的 y 坐标
 * @param {Number} width 组件宽度
 * @param {Number} height 组件高度
 */
ht.ui.View.prototype.layoutDOM = function(x, y, width, height) {}

/**
 * 重绘组件；此函数负责重新布局组件 DOM、设置层叠关系、加载需要的图片资源、派发 validate 事件等
 * 如果自定义组件，不要重写此函数，而是重写 validateImpl 函数
 * @see {@link ht.ui.View#validateImpl validateImpl}
 */
ht.ui.View.prototype.validate = function() {}

/**
 * 绘制组件边框、背景及调用 validateImpl；此函数在 validate 中被调用
 */
ht.ui.View.prototype.processValidate = function() {}

/**
 * 绘制组件内容；如果自定义组件，一般要重写此函数，通过 getRootContext() 获取画笔然后绘制
 * @param {Number} x 内容范围的 x 坐标
 * @param {Number} y 内容范围的 y 坐标
 * @param {Number} width 内容范围宽度
 * @param {Number} height 内容范围高度
 */
ht.ui.View.prototype.validateImpl = function(x, y, width, height) {}

/** 
 * 增加 View 事件监听器，如 invalidate(无效事件)、beginValidate 等事件
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.View.prototype.addViewListener = function(listener, scope, ahead){}

/**
 * 删除 View 事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.ui.View.prototype.removeViewListener = function(listener, scope){}

/**
 * 派发 View 事件
 * @param {Object|String} event 事件对象；如果是字符串，表示事件类型，函数内自动组装一个事件对象并派发<br>示例：view.fireViewEvent('myevent') 等同于 view.fireViewEvent({kind: 'myevent'})
 */
ht.ui.View.prototype.fireViewEvent = function(event) {}

/**
 * 派发属性变化事件
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.View.prototype.prototype.firePropertyChange = function(property, oldValue, newValue, compareFunc) {}

/**
 * 派发属性变化事件，{@link ht.ui.View#firePropertyChange firePropertyChange} 的缩写
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.View.prototype.fp = function(property, oldValue, newValue, compareFunc) {}

/**
 * 增加属性事件变化监听函数
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.View.prototype.addPropertyChangeListener = function(listener, scope, ahead) {}

/**
 * 增加属性事件变化监听函数，{@link ht.ui.View#addPropertyChangeListener addPropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.View.prototype.mp = function(listener, scope, ahead) {}

/**
 * 删除属性事件变化监听器
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.View.prototype.removePropertyChangeListener = function(listener, scope) {}

/**
 * 删除属性事件变化监听器，{@link ht.ui.View#removePropertyChangeListener removePropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.View.prototype.ump = function(listener, scope) {}

/**
 * 获取内容坐标点；此坐标与内边距和边框无关，是从内容区域左上角开始计算
 * @param  {Event} event 交互事件对象(如鼠标事件对象)
 * @return {Object} 内容坐标点，包含 x、y 坐标
 */
ht.ui.View.prototype.getContentPoint = function(event) {};

/**
 * 获取组件坐标点；从组件的左上角开始计算
 * @param  {Event} event 交互事件对象(如鼠标事件对象)
 * @return {Object} 组件坐标点，包含 x、y 坐标
 */
ht.ui.View.prototype.getViewPoint = function(event) {};


/**
 * 设置错误信息
 * @param {String} message 错误信息
 * @param {Object} params ErrorMessagePopover 组件的属性配置，如 { placements: ['top'] } 将错误提示显示在上方
 * @return {ht.ui.ErrorMessagePopover} 错误提示组件
 */
ht.ui.View.prototype.setErrorMessage = function(message, params) {}

/**
 * 获取错误信息
 * @return {String} 错误信息
 */
ht.ui.View.prototype.getErrorMessage = function() {}

/**
 * 设置唯一标识，根据标识可快速查找到组件
 * @param {Object} id 唯一标识
 */
ht.ui.View.prototype.setId = function(id) {}

/**
 * 设置组件的 x 坐标
 * @param {Number} x x 坐标
 */
ht.ui.View.prototype.setX = function(x) {}

/**
 * 设置组件的 y 坐标
 * @param {Number} y y 坐标
 */
ht.ui.View.prototype.setY = function(y) {}


/**
 * 设置组件的宽度
 * @param {Number} width 组件宽度
 */
ht.ui.View.prototype.setWidth = function(width) {}

/**
 * 设置组件的高度
 * @param {Number} height 组件高度
 */
ht.ui.View.prototype.setHeight = function(height) {}

/**
 * 设置 CSS 阴影值
 * @param {String} boxShadow 阴影值
 */
ht.ui.View.prototype.setBoxShadow =  function(boxShadow) {}


/**
 * 设置 CSS 边框圆角
 * @param {Number|Array} radius 边框圆角；如果是数组，则表示[左上角圆角、右上角圆角、右下角圆角、左下角圆角]
 */
ht.ui.View.prototype.setBorderRadius =  function(radius) {}

/**
 * 设置组件的边框
 * @param {ht.border.Border} border 组件边框
 */
ht.ui.View.prototype.setBorder = function(border) {}

/**
 * 设置组件的背景，可以是颜色或者图片等；此值最终会被转换为 Drawable 对象
 * @param {Object} background 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.View#setBackgroundDrawable setBackgroundDrawable}
 */
ht.ui.View.prototype.setBackground = function(background) {}

/**
 * 设置组件的背景 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 background 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.View.prototype.setBackgroundDrawable = function(drawable) {}

/**
 * 设置绑定的右键菜单
 * @param {ht.ui.ContextMenu} contextMenu 右键菜单
 */
ht.ui.View.prototype.setContextMenu = function(contextMenu) {}

/**
 * 设置鼠标样式(CSS 格式)
 * @param {String} cursor 鼠标样式
 */
ht.ui.View.prototype.setCursor = function(cursor) {}

/**
 * 设置组件内边距，如果是数字，说明四边使用相同的内边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 * @param {Number|Array} padding 内边距
 */
ht.ui.View.prototype.setPadding = function(padding) {}


/**
 * 设置弹框组件
 * @param {ht.ui.Popover|String} popover 弹框组件，如果参数是字符串，则用这段文本作为弹框内容(内部自动创建 Popover 和 HtmlView 组件)
 * @param {String} [trigger] 触发器，值为：click|hover
 */
ht.ui.View.prototype.setPopover = function(popover, trigger) {}

/**
 * 设置弹框组件的弹出位置
 * @param {Array} placements 位置数组
 */
ht.ui.View.prototype.setPopoverPlacements = function(placements) {}

/**
 * 设置弹框触发器
 * @param {String} trigger 弹框触发器，值为：click|hover 
 */
ht.ui.View.prototype.setPopoverTrigger = function(trigger) {}

/**
 * 显示弹框组件
 */
ht.ui.View.prototype.showPopover = function(trigger) {}

/**
 * 隐藏弹框组件
 */
ht.ui.View.prototype.hidePopover = function(trigger) {}

/**
 * 设置组件是否可以获取焦点
 * @param {Boolean} focusable 是否可获取焦点
 */
ht.ui.View.prototype.setFocusable = function(focusable) {}

/**
 * 设置组件获取或失去焦点时，是否重绘自身
 * @param {Boolean} redrawOnFocus 是否重绘自身
 */
ht.ui.View.prototype.setRedrawOnFocus = function(redrawOnFocus) {}

/**
 * 设置组件是否被禁用
 * @param {Boolean|String} disabled 是否被禁用；如果为字符串，组件除了被禁用，disabledDiv 还会被设置相应的 CSS 样式名
 */
ht.ui.View.prototype.setDisabled = function(disabled) {}

/**
 * 设置组件被禁用时，遮罩的背景；这个值被设置到遮罩 div 的 background 样式上，因此可以使用所有 CSS 支持的 background 类型
 * @param {String} background 遮罩背景
 * @example
 * // 设置一个居中的 gif 图片 作为背景
 * view.setDisabledBackground('url(a.gif) no-repeat 50% 50%');
 */
ht.ui.View.prototype.setDisabledBackground = function(background) {}

/**
 * 设置属性值并派发事件，自定义 set 函数内部应该调用此函数设值
 * @param {String} name 属性名
 * @param {Object} value 属性值
 */
ht.ui.View.prototype.setPropertyValue = function(name, value) {}

/**
 * 设置布局参数；这个函数有两种使用方式：
 * <ul>
 * <li> view.setLayoutParams({ marginLeft: 20, marginRight: 20 }) 指定布局参数对象</li>
 * <li> view.setLayoutParams('marginLeft', 20) 传入两个参数设置布局参数对象中的属性</li>
 * </ul>
 * @param {Object} layoutParams 布局参数对象或 key
 * @param {Object} [value] 布局参数值
 */
ht.ui.View.prototype.setLayoutParams = function(layoutParams) {}

/**
 * 设置组件的堆叠顺序
 * @param {Number} zIndex 堆叠顺序
 */
ht.ui.View.prototype.setZIndex = function(zIndex) {}

/**
 * 设置组件的样式名；如果有多个样式名，以空格分开，如：'header title'；注意此样式是指 HT 的样式，而非 CSS 样式
 * @param {String} styleName 样式名
 */
ht.ui.View.prototype.setStyle = function(styleName) {}

/**
 * 设置 preferredSize，preferredSize 表示组件自身最合适的尺寸，布局器布局时会考虑此尺寸作为布局尺寸；
 * 如果设置过 preferredSize，就不会再调用 figurePreferredSize 计算；
 * 如果要清空设置过的 preferredSize，可以调用 setPreferredSize(undefined, undefined);
 * @param {Number} width 首选宽度
 * @param {Number} height 首选高度
 */
ht.ui.View.prototype.setPreferredSize = function(width, height) {}

/**
 * 计算 minSize，minSize 表示组件的最小尺寸，布局器布局时会考虑此尺寸，尽量不让组件的布局宽高小于此尺寸；
 * 如果设置过 minSize，就不会再调用 figureMinSize 计算；
 * 如果要清空设置过的 minSize，可以调用 setMinSize(undefined, undefined);
 * @param {Number} width 最小宽度
 * @param {Number} height 最小高度
 */
ht.ui.View.prototype.setMinSize = function(width, height) {}

/**
 * 计算 maxSize，maxSize 表示组件的最大尺寸，布局器布局时会考虑此尺寸，尽量不让组件的布局宽高大于此尺寸；
 * 如果设置过 maxSize，就不会再调用 figureMaxSize 计算；
 * 如果要清空设置过的 maxSize，可以调用 setMaxSize(undefined, undefined);
 * @param {Number} width 最大宽度
 * @param {Number} height 最大高度
 */
ht.ui.View.prototype.setMaxSize = function(width, height) {}

/**
 * 设置组件是否可见
 * @param {Boolean} visible 组件是否可见
 */
ht.ui.View.prototype.setVisible = function(visible) {}


/**
 * 设置禁用组件样式，默认会将 disabedDiv 插入到组件内部
 * @param {disabled} disabled 是否禁用
 * @param {HTMLElement} disabledDiv 遮罩 div
 */
ht.ui.View.prototype.makeDisabled = function(disabled, disabledDiv) {}

/**
 * 增加事件监听
 * @param {String} name 属性名，p: 开头(如 p:value)，表示监听的是属性变化事件；d: 开头(如 d:mousedown) 表示监听原生 DOM 事件；其它情况当作 viewEvent 处理
 * @param {Function} function 监听器函数
 * @param {Object} scope 监听器函数域
 * @param {Boolean} ahead 如果是 DOM 事件，表示 useCapture；否则表示是否将当前监听器插入到监听器列表开头
 */
ht.ui.View.prototype.on = function(name, listener, scope, ahead) {}

/**
 * 增加一次性事件监听(监听器执行一次，然后马上被删除)
 * @param {String} name 属性名，p: 开头(如 p:value)，表示监听属性变化事件；d: 开头(如 d:mousedown) 表示监听原生 DOM 事件；其它情况当作 viewEvent 处理
 * @param {Function} function 监听器函数
 * @param {Object} scope 监听器函数域
 * @param {Boolean} ahead 如果是 DOM 事件，表示 useCapture；否则表示是否将当前监听器插入到监听器列表开头 
 */
ht.ui.View.prototype.onOnce = function(name, listener, scope, ahead) {}


/**
 * 删除事件监听
 * @param {String} name 属性名，p: 开头(如 p:value)，表示监听属性变化事件；d: 开头(如 d:mousedown) 表示监听原生 DOM 事件；其它情况当作 viewEvent 处理
 * @param {Function} function 监听器函数
 * @param {Object} scope 监听器函数域
 * @param {Boolean} ahead 如果是 DOM 事件，表示 useCapture；否则表示是否将当前监听器插入到监听器列表开头 
 */
ht.ui.View.prototype.off = function(name, listener, scope, ahead) {}

/**
 * 批量设置组件属性
 * @param {Object} properties 格式示范：{ background: 'red', border: new ht.ui.border.LineBorder(1, 'red'), padding: 20 }
 */
ht.ui.View.prototype.set = function(properties) {}



/**
 * 判断当前组件是否是参数容器的子孙组件
 * @param {ht.ui.ViewGroup} viewGroup 容器
 * @return {Boolean}
 */
ht.ui.View.prototype.isDescendantOf = function(viewGroup) {}
/**
 * 所有容器组件(又称布局器，如 HBoxLayout、VBoxLayout 等)的基类；<br>
 * 如果要自定义布局器，需要从此类继承，一般要重写 figurePreferredSize 和 validateImpl 函数，
 * 前者负责计算容器的首选尺寸，后者对子组件做布局<br>
 * 此类是一个抽象类，不可直接使用<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>beforeAddView</code></td>
 * <td> { kind: 'beforeAddView', source: viewGroup, child: view } </td>
 * <td>增加子组件之前派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>addView</code></td>
 * <td> { kind: 'addView', source: viewGroup, child: view } </td>
 * <td>增加子组件时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beforeRemoveView</code></td>
 * <td>  { kind: 'beforeRemoveView', source: viewGroup, child: view }  </td>
 * <td>删除子组件之前派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>removeView</code></td>
 * <td>  { kind: 'removeView', source: viewGroup, child: view }  </td>
 * <td>删除子组件时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.ViewGroup = function() {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.ViewGroup.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.ViewGroup.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.ViewGroup.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.ViewGroup.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.ViewGroup.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'|'hidden'
 * @return {String} 滚动条模式
 */
ht.ui.ViewGroup.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.ViewGroup.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.ViewGroup.prototype.getTranslateY = function (){};

/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.ViewGroup.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.ViewGroup.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.ViewGroup.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.ViewGroup.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.ViewGroup.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.ViewGroup.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.ViewGroup.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.ViewGroup.prototype.isCloseToVScrollBar = function (e){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.ViewGroup.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.ViewGroup.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.ViewGroup.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.ViewGroup.prototype.getScrollRect = function (value){};

/**
 * 判断容器是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.ViewGroup.prototype.isVScrollable = function (){};

/**
 * 判断容器是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.ViewGroup.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.ViewGroup.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.ViewGroup.prototype.setTranslateY = function (translateY) {};

/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.ViewGroup.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.ViewGroup.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.ViewGroup.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.ViewGroup.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.ViewGroup.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.ViewGroup.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'|'hidden'
 */
ht.ui.ViewGroup.prototype.setScrollBarMode = function (mode){};


/**
 * 将子组件加到容器中
 * @param {ht.ui.View} view 子组件
 * @param {Object} [params] 布局参数；可通过 childView.setLayoutPrams({...}) 提前设置并省略此参数
 * @param {Number} [index] 在子组件列表中的插入位置
 */
ht.ui.ViewGroup.prototype.addView = function (view, params, index){};

/**
 * 遍历子组件列表根据 id 查找匹配的子组件
 * @param {Object} id 子组件 id
 * @param {Boolean} recursive 是否递归查找
 * @return {ht.ui.View} 匹配到的子组件
 */
ht.ui.ViewGroup.prototype.findViewById = function (id, recursive){};

/**
 * 将子组件从容器中删除
 * @param {ht.ui.View} view 要删除的子组件
 */
ht.ui.ViewGroup.prototype.removeView = function (view){};

/**
 * 删除容器子组件列表中对应下标为 index 的子组件
 * @param {Number} index 子组件下标
 */
ht.ui.ViewGroup.prototype.removeViewAt = function (index){};

/**
 * 布局器计算出子组件的宽度，传入此函数进行验证，确保其不会大于 maxSize.width 或小于 minSize.width；
 * 返回值会被用于布局子组件
 * @param {ht.ui.View} child 子组件
 * @param {Number} width 验证之前的宽度
 * @return {Number} 验证之后的宽度
 */
ht.ui.ViewGroup.prototype.adjustChildWidth = function (child, width){};

/**
 * 布局器计算出子组件的高度，传入此函数进行验证，确保其不会大于 maxSize.height 或小于 minSize.height
 * 返回值会被用于布局子组件
 * @param {ht.ui.View} child 子组件
 * @param {Number} height 验证之前的高度
 * @return {Number} 验证之后的高度
 */
ht.ui.ViewGroup.prototype.adjustChildHeight = function (child, height){};

/**
 * 删除所有子组件
 */
ht.ui.ViewGroup.prototype.clear = function (){};

/**
 * 获取子组件列表
 * @return {ht.List} 子组件列表
 */
ht.ui.ViewGroup.prototype.getChildren = function (){};

/**
 * 获取可见的子组件列表
 * @return {ht.List} 可见的子组件列表
 */
ht.ui.ViewGroup.prototype.getVisibleChildren = function (){};

/**
 * 获取鼠标事件下的子组件
 * @param {Event|Point} 事件对象或逻辑坐标点
 * @return {ht.View} 子组件
 */
ht.ui.ViewGroup.prototype.getChildAt = function (event){};

/**
 * 获取子组件的 layoutParams
 * @param {ht.ui.View} 子组件
 * @return {Object} layoutParams
 */
ht.ui.ViewGroup.prototype.getChildLayoutParams = function (child){};

/**
 * 布局子组件，设置组件的 x、y 坐标以及宽高并调用子组件的 validate；
 * 如果自定义布局器，一般需要在 validateImpl 函数中调用此函数对子组件进行布局
 * @param {ht.ui.View} child 要布局的子组件
 * @param {Number} x 组件的 x 坐标
 * @param {Number} y 组件的 y 坐标
 * @param {Number} width 组件的宽度
 * @param {Number} height 组件的高度
 */
ht.ui.ViewGroup.prototype.layoutChild = function (child, x, y, width, height){};

/**
 * 更新滚动条；如果布局器需要滚动条，应该在 validateImpl 函数的末尾调用此函数更新滚动条
 * @param  {Number} width 组件布局宽度
 * @param  {Number} height 组件布局高度
 * @param  {Number} scrollWidth 组件内容宽度
 * @param  {Number} scrollHeight 组件内容高度
 */
ht.ui.ViewGroup.prototype.updateScrollBar = function(width, height, scrollWidth, scrollHeight) {};




/**
 * 
 * 此布局器将子组件放置在同一水平行中；<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素宽度 </li>
 * <li> 数学表达式，如 '50% - 20' 表示容器宽度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素高度 </li>
 * <li> 数学表达式，如 '50% - 20' 表示容器高度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> vAlign 组件在容器的垂直方向的对齐方式，可选值为：'top'|'middle'|'bottom' </li>
 * </ul>
 * 样式属性(不含从父类继承)：align, vAlign, equalMode, gap
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，布局器中放了两个按钮，第一个按钮的宽度根据自身内容决定，第二个按钮的宽度填满容器剩余的宽度
 * var btn1 = new ht.ui.Button();
 * btn1.setText('button1');
 * var btn2 = new ht.ui.Button();
 * btn2.setText('button2');
 * var hBox = new ht.ui.HBoxLayout();
 * hBox.addView(btn1);
 * // 第二个按钮填满容器的剩余宽度
 * hBox.addView(btn2, {width: 'match_parent'});
 */
ht.ui.HBoxLayout = function(properties) {};

/**
 * 获取子组件相对容器的对齐方式
 * @return {String} 对齐方式：'left'|'center'|'right'
 */
ht.ui.HBoxLayout.prototype.getAlign = function (){};

/**
 * 获取平分间距模式
 * @return {String} 平分间距模式：'space-between'|'space-around'|'space-evenly'
 */
ht.ui.HBoxLayout.prototype.getEqualMode = function (){};

/**
 * 获取子组件之间的间距
 * @return {Number} 距离值
 */
ht.ui.HBoxLayout.prototype.getGap = function (){};

/**
 * 设置子组件相对容器的对齐方式
 * @param  {String} align 对齐方式，可选值有：'left'|'center'|'right'
 */
ht.ui.HBoxLayout.prototype.setAlign = function(align) {};

/**
 * 设置平分间距模式；在这种模式下，子组件之间使用相同的间距
 * @param {String} mode 平分间距模式，可选值有：'space-between'|'space-around'|'space-evenly'
 */
ht.ui.HBoxLayout.prototype.setEqualMode = function(mode) {};


/**
 * 设置子组件之间的间距
 * @param {Number} gap 距离值
 */
ht.ui.HBoxLayout.prototype.setGap = function (gap){};

/**
 * 获取子组件在垂直方向相对于容器的对齐方式
 * @return {String} 对齐方式：'top'|'middle'|'bottom'
 */
ht.ui.HBoxLayout.prototype.getVAlign = function (){};


/**
 * 设置子组件在垂直方向相对于容器的对齐方式
 * @param {String} vAlign 对齐方式：'top'|'middle'|'bottom'
 */
ht.ui.HBoxLayout.prototype.setVAlign = function (vAlign){};

/**
 * 
 * 水平按钮组，内置了一个 ht.ui.Radios 对象(可通过 getRadios() 获取)，加入到此布局器的按钮自动被 radios 管理，高度被设置为填满此布局器<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * </ul>
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.HBoxLayout}
 */
ht.ui.HButtonGroup = function(properties) {};

/**
 * 获取按钮状态管理器
 * @return {ht.ui.Radios} 
 */
ht.ui.HButtonGroup.prototype.getRadios = function (){};

/**
 * 
 * 此布局器将子组件放置在同一垂直列中；<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素宽度 </li>
 * <li> 数学表达式，如 '50% - 20' 表示容器宽度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素高度 </li>
 * <li> 数学表达式，如 '50% - 20' 表示容器高度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> align 组件在容器的水平方向的对齐方式，可选值为：'left'|'center'|'right' </li>
 * </ul>
 * 样式属性(不含从父类继承)：align, vAlign, equalMode, gap
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，布局器中放了两个按钮，第一个按钮的高度根据自身内容决定，第二个按钮的高度填满容器剩余的高度
 * var btn1 = new ht.ui.Button();
 * btn1.setText('button1');
 * var btn2 = new ht.ui.Button();
 * btn2.setText('button2');
 * var vBox = new ht.ui.VBoxLayout();
 * vBox.addView(btn1);
 * // 第二个按钮填满容器的剩余高度
 * vBox.addView(btn2, {height: 'match_parent'});
 */
ht.ui.VBoxLayout = function(properties) {};

/**
 * 获取子组件相对容器的垂直方向方式
 * @return {String} 垂直对齐方式：'top'|'middle'|'bottom'
 */
ht.ui.VBoxLayout.prototype.getVAlign = function (){};

/**
 * 获取平分间距模式
 * @return {String} 平分间距模式：'space-between'|'space-around'|'space-evenly'
 */
ht.ui.VBoxLayout.prototype.getEqualMode = function (){};

/**
 * 获取子组件之间的间距
 * @return {Number} 距离值
 */
ht.ui.VBoxLayout.prototype.getGap = function (){};

/**
 * 设置子组件相对容器的垂直对齐方式
 * @param  {String} vAlign 垂直对齐方式，可选值有：'top'|'middle'|'bottom'
 */
ht.ui.VBoxLayout.prototype.setVAlign = function(vAlign) {};

/**
 * 设置平分间距模式；在这种模式下，子组件之间使用相同的间距
 * @param {String} mode 平分间距模式，可选值有：'space-between'|'space-around'|'space-evenly'
 */
ht.ui.VBoxLayout.prototype.setEqualMode = function(mode) {};


/**
 * 设置子组件之间的间距
 * @param {Number} gap 距离值
 */
ht.ui.VBoxLayout.prototype.setGap = function (gap){};


/**
 * 获取子组件在水平方向相对于容器的对齐方式
 * @return {String} 对齐方式：'left'|'center'|'right'
 */
ht.ui.VBoxLayout.prototype.getAlign = function (){};


/**
 * 设置子组件在水平方向相对于容器的对齐方式
 * @param {String} vAlign 对齐方式：'left'|'center'|'right'
 */
ht.ui.VBoxLayout.prototype.setAlign = function (vAlign){};
/**
 * 
 * 垂直按钮组，内置了一个 ht.ui.Radios 对象(可通过 getRadios() 获取)，加入到此布局器的按钮自动被 radios 管理，宽度被设置为填满此布局器<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * </ul>
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.VBoxLayout}
 */
ht.ui.VButtonGroup = function(properties) {};

/**
 * 获取按钮状态管理器
 * @return {ht.ui.Radios} 
 */
ht.ui.VButtonGroup.prototype.getRadios = function (){};

/**
 * 
 * 此布局器将自身空间按照行列数划分为 row * column 个单元格，子组件可以放到一个或多个单元格(跨行、跨列)中；
 * 子组件通过布局参数可以控制是否填满单元格以及不填满单元格时在单元格中的对齐方式；<br>
 * 布局器会通过遍历列的多个组件，根据每个组件的 preferredSize 计算列宽度；
 * 但是一旦出现组件跨列的情况就会无法计算，此时可能需要调用 setColumnPreferredWidth(columnIndex, width) 手动指定<br>
 * 增加 TableRow 时无需任何布局参数，下面列出了 TableRow#addView 时可以指定的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满单元格 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满单元格 </li>
 * <li> 固定像素高度 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> rowspan 跨行数，默认为 1 </li>
 * <li> colspan 跨列数，默认为 1 </li>
 * <li> align 如果组件在水平方向没有填满单元格，此属性指定组件在单元格的水平方向的对齐方式，可选值为：'left'|'center'|'right'，默认为 'left' </li>
 * <li> vAlign 如果组件在垂直方向没有填满单元格，此属性指定组件在单元格的垂直方向的对齐方式，可选值为：'top'|'middle'|'bottom'，默认为 'top' </li>
 * </ul>
 * 样式属性(不含从父类继承)：columnGap, rowGap
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * var btn1, btn2, btn3, btn4, btn5, btn6, btn7;
 * // ... 初始化七个按钮
 * var tableLayout = new ht.ui.TableLayout();
 * // 设置四列的默认宽度(非必须，HT 会尝试自动计算，但是如果有组件跨列的情况就就可能无法计算)
 * tableLayout.setColumnPreferredWidth(0, 100);
 * tableLayout.setColumnPreferredWidth(1, 100);
 * tableLayout.setColumnPreferredWidth(2, 100);
 * tableLayout.setColumnPreferredWidth(3, 100);
 * // 设置四列的权重值(非必须)
 * tableLayout.setColumnWeight(0, 0.1);
 * tableLayout.setColumnWeight(1, 0.1);
 * tableLayout.setColumnWeight(2, 0.1);
 * tableLayout.setColumnWeight(3, 0.1);
 * // 第一行分成四列，包含四个按钮，每个按钮占用一个单元格
 * var tableRow0 = new ht.ui.TableRow();
 * tableRow0.addView(btn1);
 * tableRow0.addView(btn2);
 * tableRow0.addView(btn3);
 * tableRow0.addView(btn4);
 * // 第二行分成四列，包含三个按钮，第一个按钮跨两列占两个单元格
 * var tableRow1 = new ht.ui.TableRow();
 * tableRow1.addView(btn5, {colspan: 2});
 * tableRow1.addView(btn6);
 * tableRow1.addView(btn7);
 *
 * tableLayout.addView(tableRow0);
 * tableLayout.addView(tableRow1);
 */
ht.ui.TableLayout = function(properties) {};

/**
 * 获取列间距
 * @return {Number} 列间距
 */
ht.ui.TableLayout.prototype.getColumnGap = function (){};


/**
 * 获取行间距
 * @return {Number} 行间距
 */
ht.ui.TableLayout.prototype.getRowGap = function (){};

/**
 * 获取列首选宽度
 * @param {Number} index 列索引
 * @return {Number} 首选宽度
 */
ht.ui.TableLayout.prototype.getColumnPreferredWidth = function (index){};

/**
 * 获取列宽度权重值，默认为 0.1
 * @param {Number} index 列索引
 * @return {Number} 权重值
 */
ht.ui.TableLayout.prototype.getColumnWeight = function (index){};

/**
 * 获取列数
 * @return {Number} 列数
 */
ht.ui.TableLayout.prototype.getColumnSize = function() {};

/**
 * 设置列间距
 * @param {Number} gap 列间距
 */
ht.ui.TableLayout.prototype.setColumnGap = function (gap){};

/**
 * 设置行间距
 * @param {Number} gap 行间距
 */
ht.ui.TableLayout.prototype.setRowGap = function (gap){};

/**
 * 设置列首选宽度
 * @param {Number} index 列索引
 * @param {Number} width 宽度值
 */
ht.ui.TableLayout.prototype.setColumnPreferredWidth = function (index, width){};


/**
 * 设置列宽度权重；如果布局器的总宽度大于所有列的首选宽度之和，那么剩余的宽度就根据权重分配，如多余出 100px 的宽度，
 * 第一列的权重值为 0.1，第二列的权重值为 0.4，那么第一列获得 100 × 0.1 / (0.1 + 0.4) = 20px，第二列获得 100 × 0.4 / (0.1 + 0.4) = 80px；
 * @param {Number} index 列索引
 * @param {Number} weight 权重值
 */
ht.ui.TableLayout.prototype.setColumnWeight = function (index, weight){};





/**
 * 此组件管理着 TableLayout 中的一行子组件；<br>
 * 需要注意的是，这并不是一个真正的可视化组件(没有从 ht.ui.View 继承)，只是 TableLayout 中一行子组件的逻辑管理单位；<br>
 * 此组件会遍历行中的多个子组件，根据每个子组件的 preferredSize 计算行高度
 * 但是一旦出现子组件跨行的情况就会无法计算，此时可能需要调用 setPreferredHeight(height) 手动指定；<br>
 * 子组件可用的布局参数(layoutParams) 请参考 {@link ht.ui.TableLayout TableLayout}<br><br>
 * 样式属性：preferredHeight, weight, visible
 * @param {Object} [properties] 属性配置对象
 * @constructor
 */
ht.ui.TableRow = function(properties) {};

/**
 * 派发属性变化事件
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.TableRow.prototype.firePropertyChange = function(property, oldValue, newValue, compareFunc) {}

/**
 * 派发属性变化事件，{@link ht.ui.TableRow#firePropertyChange firePropertyChange} 的缩写
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.TableRow.prototype.fp = function(property, oldValue, newValue, compareFunc) {}

/**
 * 增加属性事件变化监听函数
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.TableRow.prototype.addPropertyChangeListener = function(listener, scope, ahead) {}

/**
 * 增加属性事件变化监听函数，{@link ht.ui.TableRow#addPropertyChangeListener addPropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.TableRow.prototype.mp = function(listener, scope, ahead) {}

/**
 * 删除属性事件变化监听器
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.TableRow.prototype.removePropertyChangeListener = function(listener, scope) {}

/**
 * 删除属性事件变化监听器，{@link ht.ui.TableRow#removePropertyChangeListener removePropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.TableRow.prototype.ump = function(listener, scope) {}

/**
 * 获取样式属性映射表，格式为：{'preferredHeight': true ...}
 * @return {Object} 样式属性映射表
 */
ht.ui.TableRow.prototype.getStyleProperties = function() {}

/**
 * 获取组件的样式名；如果有多个样式名，以空格分开，如：'header title'；注意此样式是指 HT 的样式，而非 CSS 样式
 * @return {String} 样式名
 */
ht.ui.TableRow.prototype.getStyle = function() {}

/**
 * 获取样式属性对应的样式值
 * @param {String} property 属性名
 * @return {Object} 样式值
 */
ht.ui.TableRow.prototype.getStyleValue = function(property) {}

/**
 * 获取组件匹配到的样式
 * @return {Object} 
 */
ht.ui.TableRow.prototype.getMatchedStyles = function() {}

/**
 * 判断属性是否是样式属性
 * @param  {String}  property 属性名
 * @return {Boolean} 是否是样式属性
 */
ht.ui.TableRow.prototype.isStyleProperty = function(property) {}

/**
 * 判断行是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.TableRow.prototype.isVisible = function() {}

/**
 * 获取唯一标识
 * @return {Object} 唯一标识
 */
ht.ui.TableRow.prototype.getId = function() {}

/**
 * 取属性的值
 * @param {String} name 属性名
 */
ht.ui.TableRow.prototype.getPropertyValue = function(name) {}


/**
 * 获取父容器，即所属的 TableLayout
 * @return {ht.ui.TableLayout} 父容器
 */
ht.ui.TableRow.prototype.getParent = function() {}

/**
 * 获取子组件列表
 * @return {ht.List} 子组件列表
 */
ht.ui.TableRow.prototype.getChildren = function (){};

/**
 * 获取子组件的 layoutParams
 * @param {ht.ui.View} 子组件
 * @return {Object} layoutParams
 */
ht.ui.TableRow.prototype.getChildLayoutParams = function (child){};

/**
 * 获取行首选高度
 * @return {Number} 首选宽度
 */
ht.ui.TableRow.prototype.getPreferredHeight = function (){};

/**
 * 获取行权重值，默认为 0.1
 * @return {Number} 权重值
 */
ht.ui.TableRow.prototype.getWeight = function (){};

/**
 * 设置属性值并派发事件，自定义 set 函数内部应该调用此函数设值
 * @param {String} name 属性名
 * @param {Object} value 属性值
 */
ht.ui.TableRow.prototype.setPropertyValue = function(name, value) {}

/**
 * 设置唯一标识
 * @param {Object} id 唯一标识
 */
ht.ui.TableRow.prototype.setId = function(id) {}

/**
 * 设置行首选高度
 * @param {Number} height 高度值
 */
ht.ui.TableRow.prototype.setPreferredHeight = function(height) {}

/**
 * 设置行高度权重；如果布局器的总高度大于所有行的首选高度之和，那么剩余的高度就根据权重分配，如多余出 100px 的高度，
 * 第一行的权重值为 0.1，第二行的权重值为 0.4，那么第一行获得 100 × 0.1 / (0.1 + 0.4) = 20px，第二行获得 100 × 0.4 / (0.1 + 0.4) = 80px；
 * @param {Number} weight 权重值
 */
ht.ui.TableRow.prototype.setWeight = function(weight) {}

/**
 * 设置组件的样式名；如果有多个样式名，以空格分开，如：'header title'；注意此样式是指 HT 的样式，而非 CSS 样式
 * @param {String} styleName 样式名
 */
ht.ui.TableRow.prototype.setStyle = function(styleName) {}

/**
 * 设置行是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TableRow.prototype.setVisible = function(visible) {}

/**
 * 添加子组件
 * @param {ht.ui.View} view 子组件
 * @param {Object} [params] 布局参数
 * @param {Number} [index] 在子组件列表中的插入位置
 */
ht.ui.TableRow.prototype.addView = function (view, params, index){};

/**
 * 删除子组件
 * @param {ht.ui.View} view 要删除的子组件
 */
ht.ui.TableRow.prototype.removeView = function (view){};

/**
 * 删除子组件列表中对应下标为 index 的子组件
 * @param {Number} index 子组件下标
 */
ht.ui.TableRow.prototype.removeViewAt = function (index){};

/**
 * 遍历子组件列表根据 id 查找匹配的子组件
 * @param {Object} id 子组件 id
 * @param {Boolean} recursive 是否递归查找
 * @return {ht.ui.View} 匹配到的子组件
 */
ht.ui.TableRow.prototype.findViewById = function (id, recursive){};

/**
 * 删除所有子组件
 */
ht.ui.TableRow.prototype.clear = function (){};





/**
 * 此布局器将自身空间划分为上、下、左、右、中间五个区域，每个区域可以放置一个子组件<br>
 * 区域之间的分隔条样式(宽度、颜色等)由 splitterXXX 控制；比如分隔条尺寸由 splitterSize 决定，而分隔条的交互尺寸由 splitterHitSize 属性决定<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器的区域 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器的区域 </li>
 * <li> 固定像素高度</li>
 * </ul>
 * </li>
 * <li> region 指定组件所在的区域，可选值为：'top'|'right'|'bottom'|'left'|'center' </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> align 组件在容器的区域中水平方向的对齐方式，可选值为：'left'|'center'|'right'，默认为 'left' </li>
 * <li> vAlign 组件在容器的区域中垂直方向的对齐方式，可选值为：'top'|'middle'|'bottom'，默认为 'top' </li>
 * </ul>
 * 样式属性(不含从父类继承)：splitter, splitterDrawable, hoverSplitter, hoverSplitterDrawable, activeSplitter, activeSplitterDrawable, 
 *       splitterVisible, splitterSize, splitterHitSize, resizable,
 *       toggle, toggleDrawable, hoverToggle, hoverToggleDrawable, activeToggle, activeToggleDrawable, toggleVisible, toggleSize, togglePosition, 
 *       leftWidth, rightWidth, topHeight, bottomHeight, resizeHintBackground, useSplitterStateForToggle,
 *       leftExpanded, rightExpanded, topExpanded, bottomExpanded, continuous
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，在布局的顶部、左侧、中间各放了一个按钮
 * var btnLeft = new ht.ui.Button({ text: 'Left' });
 * 
 * var btnTop = new ht.ui.Button({ text: 'Top' });
 * 
 * var btnCenter = new ht.ui.Button({ text: 'center' });
 * 
 * var borderLayout = new ht.ui.BorerLayout();
 * borderLayout.addView(btnLeft, {region: 'left'});
 * borderLayout.addView(btnTop, {region: 'top'});
 * borderLayout.addView(btnBottom, {region: 'bottom'});
 */
ht.ui.BorderLayout = function(properties) {};

/**
 * 获取分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.BorderLayout#getSplitterDrawable getSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.getSplitter = function (){};

/**
 * 获取分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.BorderLayout.prototype.getSplitterDrawable = function (){};

/**
 * 获取 hover 状态的分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.BorderLayout#getHoverSplitterDrawable getHoverSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.getHoverSplitter = function (){};

/**
 * 获取 hover 状态的分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.BorderLayout.prototype.getHoverSplitterDrawable = function (){};


/**
 * 获取 active 状态的分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.BorderLayout#getActiveSplitterDrawable getActiveSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.getActiveSplitter = function (){};

/**
 * 获取 active 状态的分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.BorderLayout.prototype.getActiveSplitterDrawable = function (){};

/**
 * 获取拖拽分割条时的提示线的颜色
 * @return {color} 颜色值
 */
ht.ui.BorderLayout.prototype.getResizeHintBackground = function() {};

/**
 * 判断分隔条是否可见；如果是数组，则表示：[上分隔条是否可见, 右分隔条是否可见, 下分隔条是否可见, 左分隔条是否可见]
 * @return {Boolean|Array} 分隔条是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isSplitterVisible = function() {};

/**
 * 拖拽分割条时是否立即调整子组件尺寸，默认为 false，即松手后调整
 * @return {Boolean} 是否立即调整子组件尺寸
 */
ht.ui.BorderLayout.prototype.isContinuous = function() {};


/**
 * 展开合并图标是否使用分割条的状态(比如鼠标移动到分割条上时展开合并图标也根据状态切换)
 * @return {Boolean}
 */
ht.ui.BorderLayout.prototype.isUseSplitterStateForToggle = function() {};


/**
 * 判断上分隔条是否可见
 * @return {Boolean} 上分隔条是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isTopSplitterVisible = function() {};

/**
 * 判断右分隔条是否可见
 * @return {Boolean} 右分隔条是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isRightSplitterVisible = function() {};

/**
 * 判断下分隔条是否可见
 * @return {Boolean} 下分隔条是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isBottomSplitterVisible = function() {};

/**
 * 判断左分隔条是否可见
 * @return {Boolean} 左分隔条是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isLeftSplitterVisible = function() {};


/**
 * 获取分隔条显示尺寸；如果是数组，则表示：[上分隔条的显示高度, 右分隔条的显示宽度, 下分隔条的显示高度, 左分隔条的显示宽度]
 * @return {Number|Array} 分隔条显示尺寸，默认为 6
 */
ht.ui.BorderLayout.prototype.getSplitterSize = function() {};

/**
 * 获取上分隔条显示高度
 * @return {Number} 上分隔条显示高度，默认为 6
 */
ht.ui.BorderLayout.prototype.getTopSplitterSize = function() {};

/**
 * 获取右分隔条显示宽度
 * @return {Number} 右分隔条显示宽度，默认为 6
 */
ht.ui.BorderLayout.prototype.getRightSplitterSize = function() {};

/**
 * 获取下分隔条显示高度
 * @return {Number} 下分隔条显示高度，默认为 6
 */
ht.ui.BorderLayout.prototype.getBottomSplitterSize = function() {};

/**
 * 获取左分隔条显示宽度
 * @return {Number} 左分隔条显示宽度，默认为 6
 */
ht.ui.BorderLayout.prototype.getLeftSplitterSize = function() {};

/**
 * 获取分隔条的交互尺寸；如果是数组，则表示：[上分隔条的交互高度, 右分隔条的交互宽度, 下分隔条的交互高度, 左分隔条的交互宽度]<br>
 * 如果分隔条显示尺寸很小，可能会很难操作，将此属性调整变大可扩大分隔条的响应区域
 * @return {Number|Array} 分隔条尺寸
 */
ht.ui.BorderLayout.prototype.getSplitterHitSize = function() {};

/**
 * 获取上分隔条交互高度
 * @return {Number} 上分隔条交互高度
 */
ht.ui.BorderLayout.prototype.getTopSplitterHitSize = function() {};

/**
 * 获取右分隔条交互宽度
 * @return {Number} 右分隔条交互宽度
 */
ht.ui.BorderLayout.prototype.getRightSplitterHitSize = function() {};

/**
 * 获取下分隔条交互高度
 * @return {Number} 下分隔条交互高度
 */
ht.ui.BorderLayout.prototype.getBottomSplitterHitSize = function() {};

/**
 * 获取左分隔条交互宽度
 * @return {Number} 左分隔条交互宽度
 */
ht.ui.BorderLayout.prototype.getLeftSplitterHitSize = function() {};


/**
 * 判断分隔条是否可以拖拽调整位置；如果是数组，则表示：[上分隔条是否可拖拽, 右分隔条是否可拖拽, 下分隔条是否可拖拽, 左分隔条是否可拖拽]
 * @return {Boolean|Array} 分隔条是否可拖拽，默认为 true
 */
ht.ui.BorderLayout.prototype.isResizable = function() {};

/**
 * 判断上分隔条是否可以拖拽调整位置
 * @return {Boolean} 上分隔条是否可拖拽，默认为 true
 */
ht.ui.BorderLayout.prototype.isTopResizable = function() {};

/**
 * 判断右分隔条是否可以拖拽调整位置
 * @return {Boolean} 右分隔条是否可拖拽，默认为 true
 */
ht.ui.BorderLayout.prototype.isRightResizable = function() {};

/**
 * 判断下分隔条是否可以拖拽调整位置
 * @return {Boolean} 下分隔条是否可拖拽，默认为 true
 */
ht.ui.BorderLayout.prototype.isBottomResizable = function() {};

/**
 * 判断左分隔条是否可以拖拽调整位置
 * @return {Boolean} 左分隔条是否可拖拽，默认为 true
 */
ht.ui.BorderLayout.prototype.isLeftResizable = function() {};

/**
 * 获取展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.BorderLayout#getToggleDrawable getToggleDrawable}
 */
ht.ui.BorderLayout.prototype.getToggle = function (){};

/**
 * 获取展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.BorderLayout.prototype.getToggleDrawable = function (){};


/**
 * 获取 hover 状态的展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.BorderLayout#getHoverToggleDrawable getHoverToggleDrawable}
 */
ht.ui.BorderLayout.prototype.getHoverToggle = function (){};

/**
 * 获取 hover 状态的展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.BorderLayout.prototype.getHoverToggleDrawable = function (){};


/**
 * 获取 active 状态的展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.BorderLayout#getActiveToggleDrawable getActiveToggleDrawable}
 */
ht.ui.BorderLayout.prototype.getActiveToggle = function (){};

/**
 * 获取 active 状态的展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.BorderLayout.prototype.getActiveToggleDrawable = function (){};

/**
 * 判断展开合并图标是否可见；如果是数组，则表示：[上展开合并图标是否可见, 右展开合并图标是否可见, 下展开合并图标是否可见, 左展开合并图标是否可见]
 * @return {Boolean|Array} 展开合并图标是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isToggleVisible = function() {};

/**
 * 判断上展开合并图标是否可见
 * @return {Boolean} 上展开合并图标是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isTopToggleVisible = function() {};

/**
 * 判断右展开合并图标是否可见
 * @return {Boolean} 右展开合并图标是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isRightToggleVisible = function() {};

/**
 * 判断下展开合并图标是否可见
 * @return {Boolean} 下展开合并图标是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isBottomToggleVisible = function() {};

/**
 * 判断左展开合并图标是否可见
 * @return {Boolean} 左展开合并图标是否可见，默认为 true
 */
ht.ui.BorderLayout.prototype.isLeftToggleVisible = function() {};

/**
 * 获取展开合并图标的尺寸；如果是数组，则表示：[上展开合并图标宽度, 右展开合并图标高度, 下展开合并图标宽度, 左展开合并图标高度]
 * @return {Number|Array} 展开合并图标的尺寸，默认为 70
 */
ht.ui.BorderLayout.prototype.getToggleSize = function() {};

/**
 * 获取展开合并图标的位置；如果是数组，则表示：[上展开合并图标位置, 右展开合并图标位置, 下展开合并图标位置, 左展开合并图标位置]
 * @return {Number|Array} 展开合并图标的位置，默认为 0.5
 */
ht.ui.BorderLayout.prototype.getTogglePosition = function() {};

/**
 * 获取上展开合并图标的位置
 * @return {Number} 上展开合并图标的位置
 */
ht.ui.BorderLayout.prototype.getTopTogglePosition = function() {};

/**
 * 获取右展开合并图标的位置
 * @return {Number} 右展开合并图标的位置
 */
ht.ui.BorderLayout.prototype.getRightTogglePosition = function() {};

/**
 * 获取下展开合并图标的位置
 * @return {Number} 下展开合并图标的位置
 */
ht.ui.BorderLayout.prototype.getBottomTogglePosition = function() {};

/**
 * 获取左展开合并图标的位置
 * @return {Number} 左展开合并图标的位置
 */
ht.ui.BorderLayout.prototype.getLeftTogglePosition = function() {};


/**
 * 获取上展开合并图标的宽度
 * @return {Number} 上展开合并图标的宽度，默认为 40
 */
ht.ui.BorderLayout.prototype.getTopToggleSize = function() {};

/**
 * 获取右展开合并图标的高度
 * @return {Number} 右展开合并图标的高度，默认为 40
 */
ht.ui.BorderLayout.prototype.getRightToggleSize = function() {};

/**
 * 获取下展开合并图标的宽度
 * @return {Number} 下展开合并图标的宽度，默认为 40
 */
ht.ui.BorderLayout.prototype.getBottomToggleSize = function() {};

/**
 * 获取左展开合并图标的高度
 * @return {Number} 左展开合并图标的高度，默认为 40
 */
ht.ui.BorderLayout.prototype.getLeftToggleSize = function() {};

/**
 * 获取左侧区域宽度
 * @return {Number} 左侧区域宽度；如果为空，取左侧子组件的首选宽度
 */
ht.ui.BorderLayout.prototype.getLeftWidth = function() {};

/**
 * 获取右侧区域宽度
 * @return {Number} 右侧区域宽度；如果为空，取右侧子组件的首选宽度
 */
ht.ui.BorderLayout.prototype.getRightWidth = function() {};

/**
 * 获取顶部区域高度
 * @return {Number} 顶部区域高度；如果为空，取顶部子组件的首选高度
 */
ht.ui.BorderLayout.prototype.getTopHeight = function() {};

/**
 * 获取底部区域高度
 * @return {Number} 底部区域高度；如果为空，取底部子组件的首选高度
 */
ht.ui.BorderLayout.prototype.getBottomHeight = function() {};

/**
 * 判断左侧区域是否展开
 * @return {Boolean} 左侧区域是否展开，默认为 true
 */
ht.ui.BorderLayout.prototype.isLeftExpanded = function() {};

/**
 * 判断右侧区域是否展开
 * @return {Boolean} 右侧区域是否展开，默认为 true
 */
ht.ui.BorderLayout.prototype.isRightExpanded = function() {};

/**
 * 判断顶部区域是否展开
 * @return {Boolean} 顶部区域是否展开，默认为 true
 */
ht.ui.BorderLayout.prototype.isTopExpanded = function() {};

/**
 * 判断底部区域是否展开
 * @return {Boolean} 底部区域是否展开，默认为 true
 */
ht.ui.BorderLayout.prototype.isBottomExpanded = function() {};

/**
 * 获取左侧区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getLeftView = function() {};


/**
 * 设置左侧区域内的子组件
 * @param {ht.ui.View} child 子组件
 * @param {Object} layoutParams 布局参数
 */
ht.ui.BorderLayout.prototype.setLeftView = function(child, layoutParams) {};

/**
 * 获取右侧区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getRightView = function() {};


/**
 * 设置右侧区域内的子组件
 * @param {ht.ui.View} child 子组件
 * @param {Object} layoutParams 布局参数
 */
ht.ui.BorderLayout.prototype.setRightView = function(child, layoutParams) {};

/**
 * 获取顶部区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getTopView = function() {};


/**
 * 设置顶部区域内的子组件
 * @param {ht.ui.View} child 子组件
 * @param {Object} layoutParams 布局参数
 */
ht.ui.BorderLayout.prototype.setTopView = function(child, layoutParams) {};

/**
 * 获取底部区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getBottomView = function() {};


/**
 * 设置底部区域内的子组件
 * @param {ht.ui.View} child 子组件
 * @param {Object} layoutParams 布局参数
 */
ht.ui.BorderLayout.prototype.setBottomView = function(child, layoutParams) {};

/**
 * 获取中间区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getCenterView = function() {};


/**
 * 设置中间区域内的子组件
 * @param {ht.ui.View} child 子组件
 * @param {Object} layoutParams 布局参数
 */
ht.ui.BorderLayout.prototype.setCenterView = function(child, layoutParams) {};

/**
 * 获取指定区域内的子组件
 * @param {String} region 区域，可选值为：'top'|'right'|'bottom'|'left'|'center'
 * @return {ht.ui.View} 子组件
 */
ht.ui.BorderLayout.prototype.getChildByRegion = function(region) {};

/**
 * 获取事件对象下展开合并图标所在的区域
 * @param {Event} event 事件对象
 * @return {String} 展开合并图标所在的区域，值可能为：'top'|'right'|'bottom'|'left'
 */
ht.ui.BorderLayout.prototype.getToggleAt = function(event) {};

/**
 * 获取事件对象下分隔条所在的区域
 * @param {Event} event 事件对象
 * @return {String} 分隔条所在的区域，值可能为：'top'|'right'|'bottom'|'left'
 */
ht.ui.BorderLayout.prototype.getSplitterAt = function(event) {};

/**
 * 设置分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setSplitterDrawable setSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.setSplitter = function (splitter){};

/**
 * 设置分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setSplitterDrawable = function (drawable){};


/**
 * 设置 hover 状态的分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setHoverSplitterDrawable setHoverSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.setHoverSplitter = function (splitter){};

/**
 * 设置 hover 状态的分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setHoverSplitterDrawable = function (drawable){};


/**
 * 设置 active 状态的分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setActiveSplitterDrawable setActiveSplitterDrawable}
 */
ht.ui.BorderLayout.prototype.setActiveSplitter = function (splitter){};

/**
 * 设置 active 状态的分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setActiveSplitterDrawable = function (drawable){};

/**
 * 设置分隔条是否可见，默认为 true
 * @param {Boolean|Array} visible 分隔条是否可见；如果是数组，则表示：[上分隔条是否可见, 右分隔条是否可见, 下分隔条是否可见, 左分隔条是否可见]
 */
ht.ui.BorderLayout.prototype.setSplitterVisible = function(visible) {};

/**
 * 设置拖拽分割条时是否立即调整子组件尺寸，如果设为 false，则松手后调整
 * @param {Boolean} continuous 是否立即调整子组件尺寸
 */
ht.ui.BorderLayout.prototype.setContinuous = function(continuous) {};


/**
 * 设置展开合并图标是否使用分割条的状态(比如鼠标移动到分割条上时展开合并图标也根据状态切换)
 * @param {Boolean} useSplitterStateForToggle
 */
ht.ui.BorderLayout.prototype.setUseSplitterStateForToggle = function(useSplitterStateForToggle) {};

/**
 * 设置拖拽分割条时的提示线的颜色
 * @param {color} background 颜色值
 */
ht.ui.BorderLayout.prototype.setResizeHintBackground = function(background) {};

/**
 * 设置分隔条显示尺寸，默认为 6
 * @param {Number|Array} size 分隔条显示尺寸；如果是数组，则表示：[上分隔条的显示高度, 右分隔条的显示宽度, 下分隔条的显示高度, 左分隔条的显示宽度]
 */
ht.ui.BorderLayout.prototype.setSplitterSize = function(size) {};

/**
 * 设置分隔条交互尺寸<br>
 * 如果分隔条显示尺寸很小，可能会很难操作，将此属性调整变大可扩大分隔条的响应区域
 * @param {Number|Array} size 分隔条交互尺寸；如果是数组，则表示：[上分隔条的交互高度, 右分隔条的交互宽度, 下分隔条的交互高度, 左分隔条的交互宽度]
 */
ht.ui.BorderLayout.prototype.setSplitterHitSize = function(size) {};


/**
 * 设置分隔条是否可以拖拽调整位置，默认为 true
 * @param {Boolean|Array} resizable 分隔条是否可拖拽；如果是数组，则表示：[上分隔条是否可拖拽, 右分隔条是否可拖拽, 下分隔条是否可拖拽, 左分隔条是否可拖拽]
 */
ht.ui.BorderLayout.prototype.setResizable = function(resizable) {};

/**
 * 设置展开合并图标，可以是颜色或者图片等；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setToggleDrawable setToggleDrawable}
 */
ht.ui.BorderLayout.prototype.setToggle = function (toggle){};

/**
 * 设置展开合并图标的 Drawable 对象；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setToggleDrawable = function (drawable){};


/**
 * 设置 hover 状态的展开合并图标，可以是颜色或者图片等；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setHoverToggleDrawable setHoverToggleDrawable}
 */
ht.ui.BorderLayout.prototype.setHoverToggle = function (toggle){};

/**
 * 设置 hover 状态的展开合并图标的 Drawable 对象；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setHoverToggleDrawable = function (drawable){};


/**
 * 设置 active 状态的展开合并图标，可以是颜色或者图片等；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.BorderLayout#setActiveToggleDrawable setActiveToggleDrawable}
 */
ht.ui.BorderLayout.prototype.setActiveToggle = function (toggle){};

/**
 * 设置 active 状态的展开合并图标的 Drawable 对象；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.BorderLayout.prototype.setActiveToggleDrawable = function (drawable){};


/**
 * 设置展开合并图标是否可见，默认为 true
 * @param {Boolean|Array} visible 展开合并图标是否可见；如果是数组，则表示：[上展开合并图标是否可见, 右展开合并图标是否可见, 下展开合并图标是否可见, 左展开合并图标是否可见]
 */
ht.ui.BorderLayout.prototype.setToggleVisible = function(visible) {};

/**
 * 设置展开合并图标的尺寸，默认为 70
 * @param {Number|Array} size 展开合并图标的尺寸；如果是数组，则表示：[上展开合并图标宽度, 右展开合并图标高度, 下展开合并图标宽度, 左展开合并图标高度]
 */
ht.ui.BorderLayout.prototype.setToggleSize = function(size) {};


/**
 * 设置展开合并图标的位置
 * @param {Number|Array} position 展开合并图标的位置；如果是数组，则表示：[上展开合并图标位置, 右展开合并图标位置, 下展开合并图标位置, 左展开合并图标位置]
 * <ul>
 * <li>如果位置值小于 0，则表示右侧或下侧的距离</li>
 * <li>如果位置值是 0 到 1 之间的小数，则表示百分比</li>
 * <li>其它值被当作上侧或左侧的距离</li>
 * </ul>
 */
ht.ui.BorderLayout.prototype.setTogglePosition = function(position) {};

/**
 * 设置左侧区域宽度，如果为空，取左侧子组件的首选宽度
 * @param {Number} width 宽度值
 */
ht.ui.BorderLayout.prototype.setLeftWidth = function(width) {};

/**
 * 设置右侧区域宽度，如果为空，取右侧子组件的首选宽度
 * @param {Number} width 宽度值
 */
ht.ui.BorderLayout.prototype.setRightWidth = function(width) {};

/**
 * 设置顶部区域高度，如果为空，取顶部子组件的首选高度
 * @param {Number} height 高度值
 */
ht.ui.BorderLayout.prototype.setTopHeight = function(height) {};

/**
 * 设置底部区域高度，如果为空，取底部子组件的首选高度
 * @param {Number} height 高度值
 */
ht.ui.BorderLayout.prototype.setBottomHeight = function(height) {};

/**
 * 设置左侧区域是否展开，默认为 true
 * @param {Boolean} expanded 是否展开
 */
ht.ui.BorderLayout.prototype.setLeftExpanded = function(expanded) {};

/**
 * 设置右侧区域是否展开，默认为 true
 * @param {Boolean} expanded 是否展开
 */
ht.ui.BorderLayout.prototype.setRightExpanded = function(expanded) {};

/**
 * 设置顶部区域是否展开，默认为 true
 * @param {Boolean} expanded 是否展开
 */
ht.ui.BorderLayout.prototype.setTopExpanded = function(expanded) {};

/**
 * 设置底部区域是否展开，默认为 true
 * @param {Boolean} expanded 是否展开
 */
ht.ui.BorderLayout.prototype.setBottomExpanded = function(expanded) {};


/**
 * 此布局器将自身空间划分为上、下两个区域或左、右两个区域，每个区域可以放置一个子组件<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器的区域 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'match_parent'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器的区域 </li>
 * <li> 固定像素高度</li>
 * </ul>
 * </li>
 * <li> region 指定组件所在的区域，可选值为：'first'|'second' </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> align 组件在容器的区域中水平方向的对齐方式，可选值为：'left'|'center'|'right'，默认为 'left' </li>
 * <li> vAlign 组件在容器的区域中垂直方向的对齐方式，可选值为：'top'|'middle'|'bottom'，默认为 'top' </li>
 * </ul>
 * 样式属性(不含从父类继承)：positionType, position, orientation,
 *       toggle, toggleDrawable, hoverToggle, hoverToggleDrawable, activeToggle, activeToggleDrawable, toggleVisible, toggleSize, toggleGap, togglePosition, 
 *       splitter, splitterDrawable, hoverSplitter, hoverSplitterDrawable, activeSplitter, activeSplitterDrawable, 
 *       splitterSize, splitterHitSize, splitterVisible, resizable, collapseRegion, continuous, resizeHintBackground, useSplitterStateForToggle
 * @param {ht.View|Object} [firstView] 第一个区域的组件或是属性配置对象
 * @param {ht.View} [secondView] 第二个区域的组件
 * @param {String} [orientation] 布局方向
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，在布局的左侧放了一个按钮，固定 200px 宽，右侧放了个按钮，宽高填满父容器
 * var btnLeft = new ht.ui.Button();
 * btnLeft.setText('Left');
 * 
 * var btnRight = new ht.ui.Button();
 * btnRight.setText('Top');
 * 
 * var splitLayout = new ht.ui.SplitLayout();
 * // 左侧固定宽度 200px
 * splitLayout.setPositionType('absoluteFirst');
 * splitLayout.setPosition(200);
 * 
 * splitLayout.addView(btnLeft, {region: 'first'});
 * splitLayout.addView(btnRight, {region: 'second'});
 */
ht.ui.SplitLayout = function(firstView, secondView, orientation) {};

/**
 * 获取分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.SplitLayout#getSplitterDrawable getSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.getSplitter = function (){};

/**
 * 获取分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.SplitLayout.prototype.getSplitterDrawable = function (){};


/**
 * 获取 hover 状态的分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.SplitLayout#getHoverSplitterDrawable getHoverSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.getHoverSplitter = function (){};

/**
 * 获取 hover 状态的分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.SplitLayout.prototype.getHoverSplitterDrawable = function (){};


/**
 * 获取 active 状态的分隔条的背景，可以是颜色或者图片等
 * @return {Object} 组件背景
 * @see {@link ht.ui.SplitLayout#getActiveSplitterDrawable getActiveSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.getActiveSplitter = function (){};

/**
 * 获取 active 状态的分隔条的背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 分隔条背景
 */
ht.ui.SplitLayout.prototype.getActiveSplitterDrawable = function (){};

/**
 * 获取拖拽分割条时的提示线的颜色
 * @return {color} 颜色值
 */
ht.ui.SplitLayout.prototype.getResizeHintBackground = function() {};

/**
 * 判断分隔条是否可见
 * @return {Boolean} 分隔条是否可见，默认为 true
 */
ht.ui.SplitLayout.prototype.isSplitterVisible = function() {};

/**
 * 拖拽分割条时是否立即调整 position，默认为 false，即松手后调整
 * @return {Boolean} 是否立即调整 position
 */
ht.ui.SplitLayout.prototype.isContinuous = function() {};


/**
 * 展开合并图标是否使用分割条的状态(比如鼠标移动到分割条上时展开合并图标也根据状态切换)
 * @return {Boolean}
 */
ht.ui.SplitLayout.prototype.isUseSplitterStateForToggle = function() {};

/**
 * 获取分隔条显示尺寸
 * @return {Number} 分隔条显示尺寸，默认为 6
 */
ht.ui.SplitLayout.prototype.getSplitterSize = function() {};

/**
 * 获取分隔条交互尺寸<br>
 * 如果分隔条显示尺寸很小，可能会很难操作，将此属性调整变大可扩大分隔条的响应区域
 * @return {Number} 分隔条交互尺寸
 */
ht.ui.SplitLayout.prototype.getSplitterHitSize = function() {};

/**
 * 判断分隔条是否可以拖拽调整位置
 * @return {Boolean} 分隔条是否可拖拽，默认为 true
 */
ht.ui.SplitLayout.prototype.isResizable = function() {};

/**
 * 获取展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.SplitLayout#getToggleDrawable getToggleDrawable}
 */
ht.ui.SplitLayout.prototype.getToggle = function (){};

/**
 * 获取展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.SplitLayout.prototype.getToggleDrawable = function (){};

/**
 * 获取 hover 状态的展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.SplitLayout#getHoverToggleDrawable getHoverToggleDrawable}
 */
ht.ui.SplitLayout.prototype.getHoverToggle = function (){};

/**
 * 获取 hover 状态的展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.SplitLayout.prototype.getHoverToggleDrawable = function (){};


/**
 * 获取 active 状态的展开合并图标，可以是颜色或者图片等
 * @return {Object} 展开合并图标
 * @see {@link ht.ui.SplitLayout#getActiveToggleDrawable getActiveToggleDrawable}
 */
ht.ui.SplitLayout.prototype.getActiveToggle = function (){};

/**
 * 获取 active 状态的展开合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开合并图标
 */
ht.ui.SplitLayout.prototype.getActiveToggleDrawable = function (){};

/**
 * 判断展开合并图标是否可见
 * @return {Boolean} 展开合并图标是否可见，默认为 true
 */
ht.ui.SplitLayout.prototype.isToggleVisible = function() {};

/**
 * 获取展开合并图标的尺寸
 * @return {Number} 展开合并图标的尺寸，默认为 40
 */
ht.ui.SplitLayout.prototype.getToggleSize = function() {};

/**
 * 获取展开合并图标的位置
 * @return {Number} 展开合并图标的位置，默认为 0.5
 */
ht.ui.SplitLayout.prototype.getTogglePosition = function() {};

/**
 * 获取展开合并图标之间的的距离
 * @return {Number} 展开合并图标之间的距离，默认为 10
 */
ht.ui.SplitLayout.prototype.getToggleGap = function() {};

/**
 * 获取布局方式，支持以下三种方式：
 * <ul>
 * 	<li> 'percentage' 百分比方式，左右或上下区域按照百分比分配，position 的值必须在 0 - 1 之间 </li>
 * 	<li> 'absolulteFirst' 左侧区域使用固定宽度或顶部区域使用固定高度，position 指定固定的像素数 </li>
 * 	<li> 'absoluteSecond' 右侧区域使用固定宽度或底部区域使用固定高度，position 指定固定的像素数 </li>
 * </ul>
 * @return {String} 布局方式，默认为 'percentage'
 */
ht.ui.SplitLayout.prototype.getPositionType = function() {};

/**
 * 获取布局值；positionType 为 'percentage' 时表示百分比；persitonType 为 'absoluteFirst' 或 'absoluteSecond' 时表示像素数
 * @return {Number} 布局值，默认为 0.5
 */
ht.ui.SplitLayout.prototype.getPosition = function() {};

/**
 * 获取布局方向，支持以下两种方向：
 * <ul>
 * <li> 'h' 或 'horizontal' 水平方向(即左右分割) </li>
 * <li> 'v' 或 'vertical' 垂直方向(即上下分割) </li>
 * </ul>
 * @return {String} 布局方向，默认为 'h'
 */
ht.ui.SplitLayout.prototype.getOrientation = function() {};

/**
 * 获取被折叠的区域
 * @return {String} 被折叠的区域，值可能为 'first' 或 'second' 或 null
 */
ht.ui.SplitLayout.prototype.getCollapseRegion = function() {};

/**
 * 获取第一个区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.SplitLayout.prototype.getFirstView = function() {};

/**
 * 获取第二个区域内的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.SplitLayout.prototype.getSecondView = function() {};

/**
 * 获取指定区域内的子组件
 * @param {String} region 区域，可选值为：'first'|'second'
 * @return {ht.ui.View} 子组件
 */
ht.ui.SplitLayout.prototype.getChildByRegion = function(region) {};

/**
 * 获取事件对象下的展开合并图标
 * @param {Event} event 事件对象
 * @return {String} 展开合并图标，值可能为：'expand'|'collapse'
 */
ht.ui.SplitLayout.prototype.getToggleAt = function(event) {};

/**
 * 判断是否点击中分隔条
 * @param {Event} event 事件对象
 * @return {Boolean} 是否点击中分隔条 
 */
ht.ui.SplitLayout.prototype.splitterHitTest = function(event) {};


/**
 * 设置分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setSplitterDrawable setSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.setSplitter = function (splitter){};

/**
 * 设置分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setSplitterDrawable = function (drawable){};


/**
 * 设置 hover 状态的分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setHoverSplitterDrawable setHoverSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.setHoverSplitter = function (splitter){};

/**
 * 设置 hover 状态的分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setHoverSplitterDrawable = function (drawable){};


/**
 * 设置 active 状态的分隔条的背景，可以是颜色或者图片等
 * @param {Object} splitter 颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setActiveSplitterDrawable setActiveSplitterDrawable}
 */
ht.ui.SplitLayout.prototype.setActiveSplitter = function (splitter){};

/**
 * 设置 active 状态的分隔条背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 splitter 转换
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setActiveSplitterDrawable = function (drawable){};

/**
 * 设置分隔条是否可见，默认为 true
 * @param {Boolean} visible 分隔条是否可见
 */
ht.ui.SplitLayout.prototype.setSplitterVisible = function(visible) {};

/**
 * 设置拖拽分割条时是否立即调整 position，如果设为 false，则松手后调整
 * @param {Boolean} continuous 是否立即调整 position
 */
ht.ui.SplitLayout.prototype.setContinuous = function(continuous) {};


/**
 * 设置展开合并图标是否使用分割条的状态(比如鼠标移动到分割条上时展开合并图标也根据状态切换)
 * @param {Boolean} useSplitterStateForToggle
 */
ht.ui.SplitLayout.prototype.setUseSplitterStateForToggle = function(useSplitterStateForToggle) {};

/**
 * 设置拖拽分割条时的提示线的颜色
 * @param {color} background 颜色值
 */
ht.ui.SplitLayout.prototype.setResizeHintBackground = function(background) {};

/**
 * 设置分隔条显示尺寸，默认为 6
 * @param {Number} size 分隔条显示尺寸
 */
ht.ui.SplitLayout.prototype.setSplitterSize = function(size) {};

/**
 * 设置分隔条交互尺寸<br>
 * 如果分隔条显示尺寸很小，可能会很难操作，将此属性调整变大可扩大分隔条的响应区域
 * @param {Number} size 分隔条交互尺寸
 */
ht.ui.SplitLayout.prototype.setSplitterHitSize = function(size) {};

/**
 * 设置分隔条是否可以拖拽调整位置，默认为 true
 * @param {Boolean} resizable 分隔条是否可拖拽
 */
ht.ui.SplitLayout.prototype.setResizable = function(resizable) {};

/**
 * 设置展开合并图标，可以是颜色或者图片等；这个图标按照垂直分割模式下合并图标的方向设计即可
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setToggleDrawable setToggleDrawable}
 */
ht.ui.SplitLayout.prototype.setToggle = function (toggle){};

/**
 * 设置展开合并图标的 Drawable 对象；这个图标按照垂直分割模式下合并图标的方向设计即可
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setToggleDrawable = function (drawable){};


/**
 * 设置 hover 状态的展开合并图标，可以是颜色或者图片等；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setHoverToggleDrawable setHoverToggleDrawable}
 */
ht.ui.SplitLayout.prototype.setHoverToggle = function (toggle){};

/**
 * 设置 hover 状态的展开合并图标的 Drawable 对象；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setHoverToggleDrawable = function (drawable){};


/**
 * 设置 active 状态的展开合并图标，可以是颜色或者图片等；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {Object} toggle 展开合并图标, 可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.SplitLayout#setActiveToggleDrawable setActiveToggleDrawable}
 */
ht.ui.SplitLayout.prototype.setActiveToggle = function (toggle){};

/**
 * 设置 active 状态的展开合并图标的 Drawable 对象；这个图标按照顶部展开状态设计即可，其它三个方向会自动旋转
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 */
ht.ui.SplitLayout.prototype.setActiveToggleDrawable = function (drawable){};

/**
 * 设置展开合并图标是否可见，默认为 true
 * @param {Boolean} visible 展开合并图标是否可见
 */
ht.ui.SplitLayout.prototype.setToggleVisible = function(visible) {};

/**
 * 设置展开合并图标的尺寸，默认为 40
 * @param {Number} size 展开合并图标的尺寸
 */
ht.ui.SplitLayout.prototype.setToggleSize = function(size) {};

/**
 * 设置展开合并图标的位置
 * @param {Number} position 展开合并图标的位置
 * <ul>
 * <li>如果位置值小于 0，则表示右侧或下侧的距离</li>
 * <li>如果位置值是 0 到 1 之间的小数，则表示百分比</li>
 * <li>其它值被当作上侧或左侧的距离</li>
 * </ul>
 */
ht.ui.SplitLayout.prototype.setTogglePosition = function(position) {};

/**
 * 设置展开合并图标之间的的距离，默认为 10
 * @param {Number} gap 展开合并图标之间的距离
 */
ht.ui.SplitLayout.prototype.setToggleGap = function(gap) {};

/**
 * 设置布局方式，支持以下三种方式：
 * <ul>
 * 	<li> 'percentage' 百分比方式，左右或上下区域按照百分比分配，position 的值必须在 0 - 1 之间，此为默认值 </li>
 * 	<li> 'absolulteFirst' 左侧区域使用固定宽度或顶部区域使用固定高度，position 指定固定的像素数 </li>
 * 	<li> 'absoluteSecond' 右侧区域使用固定宽度或底部区域使用固定高度，position 指定固定的像素数 </li>
 * </ul>
 * @param {String} positionType 布局方式
 */
ht.ui.SplitLayout.prototype.setPositionType = function(positionType) {};

/**
 * 设置布局值；positionType 为 'percentage' 时表示百分比；persitonType 为 'absoluteFirst' 或 'absoluteSecond' 时表示像素数；默认为 0.5
 * @param {Number} position 布局值
 */
ht.ui.SplitLayout.prototype.setPosition = function(position) {};

/**
 * 设置布局方向，支持以下两种方向：
 * <ul>
 * <li> 'h' 或 'horizontal' 水平方向(即左右分割)，此为默认值</li>
 * <li> 'v' 或 'vertical' 垂直方向(即上下分割) </li>
 * </ul>
 * @param {String} orientation 布局方向
 */
ht.ui.SplitLayout.prototype.setOrientation = function(orientation) {};

/**
 * 设置被折叠的区域
 * @param {String} region 被折叠的区域，可选值为 'first'|'second'|null
 */
ht.ui.SplitLayout.prototype.setCollapseRegion = function(region) {};









/**
 * 此布局器名为相对定位布局器，顾名思义，允许子组件相对于容器或其它子组件定位<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素宽度 </li>
 * <li> 数学表达式，如 '50% - 20' 表示容器宽度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 'match_parent' 填满父容器 </li>
 * <li> 固定像素高度</li>
 * <li> 数学表达式，如 '50% - 20' 表示容器高度的一半减去 20 像素 </li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> align 组件在容器中水平方向的对齐方式(只有组件在水平方向相对于容器定位时才有效)，可选值为：'left'|'center'|'right'，默认为 'left' </li>
 * <li> vAlign 组件在容器中垂直方向的对齐方式(只有组件在垂直方向相对于容器定位时才有效)，可选值为：'top'|'middle'|'bottom'，默认为 'top' </li>
 * <li> toTopOf 组件定位到另一个组件的上方，即垂直方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li>
 * <li> toBottomOf 组件定位到另一个组件的下方，即垂直方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> toLeftOf 组件定位到另一个组件的左侧，即水平方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> toRightOf 组件定位到另一个组件的右侧，即水平方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> alignTopOf 组件和另一个组件的顶端对齐，即垂直方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> alignBottomOf 组件和另一个组件的底部对齐，即垂直方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> alignLeftOf 组件和另一个组件的左侧对齐，即水平方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * <li> alignRightOf 组件和另一个组件的右侧对齐，即水平方向相对于其它组件定位，值为其它组件的 id 或实例对象 </li> 
 * </ul>
 * 需要注意，相对定位时虽然可以使用其它组件实例，但是如果容器需要序列化，请使用其它组件的 id
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，将 btnCenter 放在容器的中心，然后将 btnBottom 放置在 btnCenter 下面并通过 marginTop 指定两个组件之间的间距
 * var btnCenter = new ht.ui.Button();
 * btnCenter.setText('Center');
 * 
 * var btnBottom = new ht.ui.Button();
 * btnBottom.setText('Bottom');
 * 
 * var relativeLayout = new ht.ui.RelativeLayout();
 * relativeLayout.addView(btnCenter, {align: 'center', vAlign: 'middle'});
 * relativeLayout.addView(btnBottom, {align: 'center', toBottomOf: btnCenter, marginTop: 20});
 */
ht.ui.RelativeLayout = function(properties) {};

/**
 * 标签页布局器；此布局器将子组件无条件的放在内容区域，不会考虑子组件的 minSize、maxSize、margin 等布局参数<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> title 标签标题 </li>
 * <li> icon 标签图标，可以是颜色或者图片等 </li>
 * <li> iconDrawable 标签图标的 Drawable 对象形式，优先级比 icon 高；如果此参数为空，再用 icon 转为 Drawable </li>
 * <li> tools 工具按钮图标数组，格式为：[{ icon: 'icon1', hoverIcon: 'hoverIcon1', activeIcon: 'activeIcon1', onClick: function(child, toolIndex, tool, nativeEvent) {  } }] </li>
 * <li> disabled 标签是否被禁用 </li>
 * <li> closable 标签是否可被关闭 </li>
 * </ul>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickTool</code></td>
 * <td>
 * <pre>
 * {
 *       kind: 'clickTool', // 事件种类
 *       child: child, // 子组件
 *       tool: tool, // 点击的工具按钮
 *       toolIndex: toolIndex, // 工具按钮显示顺序
 *       natvieEvent: e // 鼠标事件对象
 * }
 * </pre>
 * </td>
 * <td>在工具按钮上点击时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：movable, tabHeight, tabGap, tabGapTop, tabPosition, titleFont, tabPadding,
 *       titleColor, hoverTitleColor, activeTitleColor, moveTitleColor,
 *       iconWidth, iconHeight, iconTitleGap,
 *       closeIcon, closeIconDrawable, hoverCloseIcon, hoverCloseIconDrawable, activeCloseIcon, activeCloseIconDrawable, closeIconSize, closeIconX, closeIconY, 
 *       tabHeaderBackground, tabHeaderBackgroundDrawable, tabHeaderLineColor, tabHeaderLineSize,
 *       tabBackground, tabBackgroundDrawable, hoverTabBackground, hoverTabBackgroundDrawable, activeTabBackground, activeTabBackgroundDrawable, moveTabBackground, moveTabBackgroundDrawable,
 *       insertLine, insertLineDrawable, autoHideCloseIcon, toolWidth, toolHeight, toolGap, toolMarginLeft, closeIconMarginLeft
 * 
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中，在布局器中创建了五个标签，并选中最后一个
 * tabLayout = new ht.ui.TabLayout();
 * for (var i = 0; i < 5; i++) {
 *     var button = new ht.ui.Button();
 *     button.setText('Button' + i);
 *     button.setLayoutParams({
 *         icon: 'node_image',
 *         title: 'Tab ' + i,
 *         closable: i === 0 ? true: false
 *     });
 *     tabLayout.addView(button);
 *   }
 * tabLayout.setActiveViewIndex(0);
 */
ht.ui.TabLayout = function(properties) {};

/**
 * 判断标签是否可拖拽调整位置，默认为 true
 * @return {Boolean} 是否可拖拽调整位置
 */
ht.ui.TabLayout.prototype.isMovable = function() {};

/**
 * 获取指定子组件的标签宽度；可重写自定义标签宽度
 * @param {ht.ui.View} view 子组件
 * @return {Number} 标签宽度
 */
ht.ui.TabLayout.prototype.getTabWidth = function(view) {};

/**
 * 计算文本宽度，结果被用来计算标签页的尺寸
 * @param {String} text 文本内容
 * @param {ht.ui.View} child 子组件
 * @return {Number} 文本宽度
 */
ht.ui.TabLayout.prototype.getTextWidth = function(text, child) {};

/**
 * 获取标签高度
 * @return {Number} 标签高度
 */
ht.ui.TabLayout.prototype.getTabHeight = function() {};


/**
 * 获取指定子组件的标签文本；可重写自定义标签文本
 * @param {ht.ui.View} view 子组件
 * @return {Number} 标签文本
 */
ht.ui.TabLayout.prototype.getTitle = function(view) {};

/**
 * 获取标签之间的距离
 * @return {Number} 标签之间的距离
 */
ht.ui.TabLayout.prototype.getTabGap = function() {};

/**
 * 获取标签顶部到 tabHeader(标签行) 顶部的空白距离
 * @return {Number} 距离
 */
ht.ui.TabLayout.prototype.getTabGapTop = function() {};

/**
 * 获取标签头的位置，默认为 'top'
 * @return {String} 标签头位置，值可能为：'left'|'right'|'top'|'bottom'|'left-vertical'|'right-vertical'
 */
ht.ui.TabLayout.prototype.getTabPosition = function() {};

/**
 * 获取标签文字字体
 * @return {String} 标签文字字体
 */
ht.ui.TabLayout.prototype.getTitleFont = function() {};

/**
 * 获取标签文字左右两侧的间距
 * @return {Number} 间距值
 */
ht.ui.TabLayout.prototype.getTabPadding = function() {};

/**
 * 获取正常状态下标签文字的颜色
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getTitleColor = function() {};

/**
 * 获取 Hover 状态下标签文字的颜色
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getHoverTitleColor = function() {};

/**
 * 获取 Active 状态下标签文字的颜色
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getActiveTitleColor = function() {};


/**
 * 获取 Move 状态下标签文字的颜色
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getMoveTitleColor = function() {};

/**
 * 根据参数子组件的状态(normal、hover、active、move)，获取标签文字颜色；可重写返回自定义的颜色
 * @param {ht.ui.View} view 子组件
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getCurrentTitleColor = function(view) {};


/**
 * 获取标签图标的宽度，默认为 16
 * @return {Number} 图标宽度
 */
ht.ui.TabLayout.prototype.getIconWidth = function() {};

/**
 * 获取标签图标的高度，默认为 16
 * @return {Number} 图标高度
 */
ht.ui.TabLayout.prototype.getIconHeight = function() {};

/**
 * 获取标签图标和文字之间的距离，默认为 4
 * @return {Number} 图标和文字之间的距离
 */
ht.ui.TabLayout.prototype.getIconTitleGap = function() {};

/**
 * 获取标签的关闭图标
 * @return {Object} 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.getCloseIcon = function() {};

/**
 * 获取标签关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.TabLayout.prototype.getCloseIconDrawable = function() {};


/**
 * 获取 hover 状态下的标签的关闭图标
 * @return {Object} 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.getHoverCloseIcon = function() {};

/**
 * 获取 hover 状态下的标签关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.TabLayout.prototype.getHoverCloseIconDrawable = function() {};


/**
 * 获取 active 状态下的标签的关闭图标
 * @return {Object} 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.getActiveCloseIcon = function() {};

/**
 * 获取 active 状态下的标签关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.TabLayout.prototype.getActiveCloseIconDrawable = function() {};

/**
 * 计算关闭图标的范围
 * @param x 标签页绘制范围 x 坐标
 * @param y 标签页绘制范围 y 坐标
 * @param width 标签页绘制范围宽度
 * @param height 标签页绘制范围高度
 * @param iconX 图标中心 x 坐标
 * @param iconY 图标中心 y 坐标
 * @param tabPosition 标签头位置
 * @param {ht.ui.View} child 子组件
 * @return {Object} 关闭图标的范围，格式为：{x: 中心点 x 坐标, y: 中心点 y 坐标, width: 宽度, height: 高度 }
 */
ht.ui.TabLayout.prototype.getCloseRect = function(x, y, width, height, iconX, iconY, tabPosition, child) { };

/**
 * 获取标签关闭图标尺寸
 * @return {Number} 关闭图标的尺寸
 */
ht.ui.TabLayout.prototype.getCloseIconSize = function() {};


/**
 * 获取关闭图标的水平中心坐标
 * @return {Number} 水平中心坐标；如果小于 0，表示在右侧固定像素位置；如果大于 1，表示在左侧固定像素位置；如果在 0 - 1 之间，表示百分比
 */
ht.ui.TabLayout.prototype.getCloseIconX = function() {};

/**
 * 获取关闭图标的垂直中心坐标
 * @return {Number} 垂直中心坐标；如果小于 0，表示在底部固定像素位置；如果大于 1，表示在顶部固定像素位置；如果在 0 - 1 之间，表示百分比
 */
ht.ui.TabLayout.prototype.getCloseIconY = function() {};

/**
 * 获取标签行背景，可以是颜色或者图片等
 * @return {Object} 标签行背景
 */
ht.ui.TabLayout.prototype.getTabHeaderBackground = function() {};

/**
 * 获取标签行背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标签行背景
 */
ht.ui.TabLayout.prototype.getTabHeaderBackgroundDrawable = function() {};

/**
 * 获取标签行分割线颜色
 * @return {color} 颜色值
 */
ht.ui.TabLayout.prototype.getTabHeaderLineColor = function(){};

/**
 * 获取标签行分割线宽度
 * @return {Number} 线宽
 */
ht.ui.TabLayout.prototype.getTabHeaderLineSize = function(){};



/**
 * 获取标签背景，可以是颜色或者图片等
 * @return {Object} 标签背景
 */
ht.ui.TabLayout.prototype.getTabBackground = function() {};

/**
 * 获取标签背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标签背景
 */
ht.ui.TabLayout.prototype.getTabBackgroundDrawable = function() {};

/**
 * 获取 Hover 状态下的标签背景，可以是颜色或者图片等
 * @return {Object} 标签背景
 */
ht.ui.TabLayout.prototype.getHoverTabBackground = function() {};

/**
 * 获取 Hover 状态下标签背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标签背景
 */
ht.ui.TabLayout.prototype.getHoverTabBackgroundDrawable = function() {};

/**
 * 获取 Active 状态下的标签背景，可以是颜色或者图片等
 * @return {Object} 标签背景
 */
ht.ui.TabLayout.prototype.getActiveTabBackground = function() {};

/**
 * 获取 Active 状态下标签背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标签背景
 */
ht.ui.TabLayout.prototype.getActiveTabBackgroundDrawable = function() {};

/**
 * 获取拖拽状态的标签背景，可以是颜色或者图片等
 * @return {Object} 标签背景
 */
ht.ui.TabLayout.prototype.getMoveTabBackground = function() {};

/**
 * 获取拖拽状态下标签背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标签背景
 */
ht.ui.TabLayout.prototype.getMoveTabBackgroundDrawable = function() {};

/**
 * 根据子组件的状态，获取相应的标签背景 Drawable 对象；可重写自定义
 * @param {ht.ui.View} view 子组件
 * @return {ht.ui.drawable.Drawable} 标签背景
 */
ht.ui.TabLayout.prototype.getCurrentTabBackgroundDrawable = function(view) {};


/**
 * 返回子组件对应的标签图标 Drawable 对象；可重写自定义
 * @param {ht.ui.View} view 子组件
 * @return {ht.ui.drawable.Drawable} 标签图标
 */
ht.ui.TabLayout.prototype.getIconDrawable = function(view) {};

/**
 * 调整 translate 以显示参数指定子组件标签
 * @param {ht.ui.View} view 子组件
 */
ht.ui.TabLayout.prototype.makeVisible = function(view) {};

/**
 * 获取拖拽过程中插入提示线的背景，可以是颜色或者图片等
 * @return {Object} 提示线背景
 */
ht.ui.TabLayout.prototype.getInsertLine = function() {};

/**
 * 获取拖拽过程中插入提示线背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 提示线背景
 */
ht.ui.TabLayout.prototype.getInsertLineDrawable = function() {};

/**
 * 获取选中的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.TabLayout.prototype.getActiveView = function() {};

/**
 * 获取选中的子组件的下标
 * @return {Number} 子组件下标
 */
ht.ui.TabLayout.prototype.getActiveViewIndex = function() {};


/**
 * 设置标签是否可拖拽调整位置，默认为 true
 * @param {Boolean} movable 是否可拖拽调整位置
 */
ht.ui.TabLayout.prototype.setMovable = function(movable) {};

/**
 * 设置标签高度
 * @param {Number} height 标签高度
 */
ht.ui.TabLayout.prototype.setTabHeight = function(height) {};


/**
 * 设置标签之间的距离
 * @param {Number} gap 标签之间的距离
 */
ht.ui.TabLayout.prototype.setTabGap = function(gap) {};

/**
 * 设置标签顶部到 tabHeader(标签行) 顶部的空白距离
 * @param {Number} gap 距离值
 */
ht.ui.TabLayout.prototype.setTabGapTop = function(gap) {};

/**
 * 设置标签的位置
 * @param {String} position 标签位置，可选值：'left'|'right'|'top'|'bottom'|'left-vertical'|'right-vertical'，默认为 'top'
 */
ht.ui.TabLayout.prototype.setTabPosition = function(position) {};

/**
 * 设置标签文字字体
 * @param {String} font 标签文字字体，如 '12px Arial'
 */
ht.ui.TabLayout.prototype.setTitleFont = function(font) {};

/**
 * 设置标签文字左右两侧的间距
 * @param {Number} padding 间距值
 */
ht.ui.TabLayout.prototype.setTabPadding = function(padding) {};

/**
 * 设置正常状态下标签文字的颜色
 * @param {color} color 颜色值
 */
ht.ui.TabLayout.prototype.setTitleColor = function(color) {};

/**
 * 设置 Hover 状态下标签文字的颜色
 * @param {color} color 颜色值
 */
ht.ui.TabLayout.prototype.setHoverTitleColor = function(color) {};

/**
 * 设置 Active 状态下标签文字的颜色
 * @param {color} color 颜色值
 */
ht.ui.TabLayout.prototype.setActiveTitleColor = function(color) {};


/**
 * 设置 Move 状态下标签文字的颜色
 * @param {color} color 颜色值
 */
ht.ui.TabLayout.prototype.setMoveTitleColor = function(color) {};

/**
 * 设置标签中图标的宽度，默认为 16
 * @param {Number} width 图标宽度
 */
ht.ui.TabLayout.prototype.setIconWidth = function(width) {};

/**
 * 设置标签中图标的高度，默认为 16
 * @param {Number} height 图标高度
 */
ht.ui.TabLayout.prototype.setIconHeight = function(height) {};

/**
 * 设置标签图标和文字之间的距离，默认为 4
 * @param {Number} gap 图标和文字之间的距离
 */
ht.ui.TabLayout.prototype.setIconTitleGap = function(gap) {};

/**
 * 设置自动调整 translate 以显示选中的子组件标签
 * @param {Boolean} autoMakeVisible 是否自动调整 translate 以显示选中的子组件标签
 */
ht.ui.TabLayout.prototype.setAutoMakeVisible = function(autoMakeVisible){};


/**
 * 设置是否自动隐藏关闭按钮
 * @param {Boolean} autoHide 是否自动隐藏关闭按钮
 */
ht.ui.TabLayout.prototype.setAutoHideCloseIcon = function(autoHide){};

/**
 * 设置标签中的关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.setCloseIcon = function(icon) {};

/**
 * 设置标签中关闭图标的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 closeIcon 转换
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.TabLayout.prototype.setCloseIconDrawable = function(drawable) {};

/**
 * 设置 hover 状态下的标签中的关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.setHoverCloseIcon = function(icon) {};

/**
 * 设置 hover 状态下的标签中关闭图标的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 hoverCloseIcon 转换
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.TabLayout.prototype.setHoverCloseIconDrawable = function(drawable) {};

/**
 * 设置 active 状态下的标签中的关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 */
ht.ui.TabLayout.prototype.setActiveCloseIcon = function(icon) {};

/**
 * 设置 active 状态下的标签中关闭图标的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 activeCloseIcon 转换
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.TabLayout.prototype.setActiveCloseIconDrawable = function(drawable) {};

/**
 * 设置标签中关闭图标尺寸
 * @param {Number} size 关闭图标的尺寸
 */
ht.ui.TabLayout.prototype.setCloseIconSize = function(size) {};


/**
 * 设置关闭图标的水平中心坐标
 * @param {Number} x 水平中心坐标；如果小于 0，表示在右侧固定像素位置；如果大于 1，表示在左侧固定像素位置；如果在 0 - 1 之间，表示百分比
 */
ht.ui.TabLayout.prototype.setCloseIconX = function(x) {};

/**
 * 设置关闭图标的垂直中心坐标
 * @param {Number} y 垂直中心坐标；如果小于 0，表示在底部固定像素位置；如果大于 1，表示在顶部固定像素位置；如果在 0 - 1 之间，表示百分比
 */
ht.ui.TabLayout.prototype.setCloseIconY = function(y) {};

/**
 * 设置标签行背景，可以是颜色或者图片等
 * @param {Object} background 标签行背景
 */
ht.ui.TabLayout.prototype.setTabHeaderBackground = function(background) {};

/**
 * 设置标签行背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 tableHeaderBackground 转换
 * @param {ht.ui.drawable.Drawable} drawable 标签行背景
 */
ht.ui.TabLayout.prototype.setTabHeaderBackgroundDrawable = function(drawable) {};

/**
 * 设置标签行分割线颜色
 * @param {color} color 颜色值
 */
ht.ui.TabLayout.prototype.setTabHeaderLineColor = function(color){};

/**
 * 设置标签行分割线宽度
 * @param {Number} size 线宽
 */
ht.ui.TabLayout.prototype.setTabHeaderLineSize = function(size){};

/**
 * 设置标签背景，可以是颜色或者图片等
 * @param {Object} background 标签背景
 */
ht.ui.TabLayout.prototype.setTabBackground = function(background) {};

/**
 * 设置标签背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 tabBackground 转换
 * @param {ht.ui.drawable.Drawable} drawable 标签背景
 */
ht.ui.TabLayout.prototype.setTabBackgroundDrawable = function(drawable) {};

/**
 * 设置 Hover 状态下的标签背景，可以是颜色或者图片等
 * @param {Object} background 标签背景
 */
ht.ui.TabLayout.prototype.setHoverTabBackground = function(background) {};

/**
 * 设置 Hover 状态下标签背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 hoverTabBackground 转换
 * @param {ht.ui.drawable.Drawable} drawable 标签背景
 */
ht.ui.TabLayout.prototype.setHoverTabBackgroundDrawable = function(drawable) {};

/**
 * 设置 Active 状态下的标签背景，可以是颜色或者图片等
 * @param {Object} background 标签背景
 */
ht.ui.TabLayout.prototype.setActiveTabBackground = function(background) {};

/**
 * 设置 Active 状态下标签背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 activeTabBackground 转换
 * @param {ht.ui.drawable.Drawable} drawable 标签背景
 */
ht.ui.TabLayout.prototype.setActiveTabBackgroundDrawable = function(drawable) {};

/**
 * 设置拖拽状态的标签背景，可以是颜色或者图片等
 * @param {Object} background 标签背景
 */
ht.ui.TabLayout.prototype.setMoveTabBackground = function(background) {};

/**
 * 设置拖拽状态下标签背景的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 moveTabBackground 转换
 * @param {ht.ui.drawable.Drawable} drawable 标签背景
 */
ht.ui.TabLayout.prototype.setMoveTabBackgroundDrawable = function(drawable) {};

/**
 * 设置拖拽过程中插入提示线的背景，可以是颜色或者图片等
 * @param {Object} insertLine 提示线背景
 */
ht.ui.TabLayout.prototype.setInsertLine = function(insertLine) {};

/**
 * 设置拖拽过程中插入提示线的 Drawable 对象；组件渲染时优先使用此 Drawable 对象，如果为空，再用 insertLine 转换
 * @param {ht.ui.drawable.Drawable} drawable 提示线背景
 */
ht.ui.TabLayout.prototype.setInsertLineDrawable = function(drawable) {};

/**
 * 根据下标设置选中的子组件
 * @param {Number} index 子组件下标
 */
ht.ui.TabLayout.prototype.setActiveViewIndex = function(index) {};

/**
 * 设置选中的子组件
 * @param {ht.ui.View} view 子组件实例
 */
ht.ui.TabLayout.prototype.setActiveView = function(view) {};

/**
 * 选中指定子组件的前一个子组件
 * @param {ht.ui.View} view 子组件
 */
ht.ui.TabLayout.prototype.selectPrevious = function(view) {};

/**
 * 选中指定子组件的下一个子组件
 * @param {ht.ui.View} view 子组件
 */
ht.ui.TabLayout.prototype.selectNext = function(view) {};

/**
 * 是否自动调整 translate 以显示选中的子组件标签
 * @return {Boolean} 是否自动调整 translate 以显示选中的子组件标签
 */
ht.ui.TabLayout.prototype.isAutoMakeVisible = function(){};


/**
 * 判断子组件是否可以被关闭
 * @param {ht.ui.View} view 子组件
 * @return {Boolean} 是否可被关闭
 */
ht.ui.TabLayout.prototype.isClosable = function(view){};

/**
 * 是否自动隐藏关闭按钮；如果为 true，只有鼠标移动到标签页上时才显示关闭按钮
 * @return {Boolean} 是否自动隐藏关闭按钮
 */
ht.ui.TabLayout.prototype.isAutoHideCloseIcon = function(){};

/**
 * 关闭标签页；将子组件从容器中删除并选中前一个子组件
 * @param {ht.ui.View} view 子组件
 */
ht.ui.TabLayout.prototype.closeTab = function(view){};

/**
 * 获取鼠标事件下的标签信息
 * @param {Event} event 事件对象 
 * @return {Object} 标签信息，格式为：{closeRect: closeRect, view: view, rect: rect};
 */
ht.ui.TabLayout.prototype.getTabInfoAt = function(event){};

/**
 * 绘制标签行背景
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 */
ht.ui.TabLayout.prototype.drawTabHeaderBackground = function(drawable, x, y, w, h){};

/**
 * 绘制标签背景
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawTabBackground = function(drawable, x, y, w, h, child){};

/**
 * 绘制标签图标
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawTabIcon = function(drawable, x, y, w, h, child){};

/**
 * 绘制垂直标签(left-vertical|right-vertical)图标
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.ui.drawable.Drawable} iconDrawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {Number} iconWidth 图标宽度
 * @param {Number} iconHeight 图标高度
 * @param {Number} startY 图标起点 y 坐标
 * @param {String} tabPosition 标签头位置
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawVerticalTabIcon = function(g, iconDrawable, x, y, w, h, iconWidth, iconHeight, startY, tabPosition, child){};

/**
 * 绘制标签文本
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} text 文本内容
 * @param {String} font 文字字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawTabTitle = function(g, text, font, color, x, y, w, h, child){};

/**
 * 绘制垂直标签(left-vertical|right-vertical)文本
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} text 文本内容
 * @param {String} font 文字字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {Number} textWidth 文本宽度
 * @param {Number} startY 文字起点 y 坐标
 * @param {String} tabPosition 标签头位置
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawVerticalTabTitle = function(g, text, font, color, x, y, w, h, textWidth, startY, tabPosition, child){};

/**
 * 绘制插入提示线
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 */
ht.ui.TabLayout.prototype.drawInsertLine = function(drawable, x, y, w, h){};

/**
 * 绘制关闭图标
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制区域的 x 坐标
 * @param {Number} y 绘制区域的 y 坐标
 * @param {Number} w 绘制区域的宽度
 * @param {Number} h 绘制区域的高度
 * @param {ht.ui.View} child 子组件
 */
ht.ui.TabLayout.prototype.drawCloseIcon = function(drawable, x, y, w, h, child){};



/**
 * 设置工具按钮图标的宽度
 * @param {Number} width
 */
ht.ui.TabLayout.prototype.setToolWidth = function(width){};


/**
 * 获取工具按钮图标的宽度
 * @return {Number}
 */
ht.ui.TabLayout.prototype.getToolWidth = function(){};



/**
 * 设置工具按钮图标的高度
 * @param {Number} height
 */
ht.ui.TabLayout.prototype.setToolHeight = function(height){};


/**
 * 获取工具按钮图标的高度
 * @return {Number}
 */
ht.ui.TabLayout.prototype.getToolHeight = function(){};

/**
 * 设置工具按钮图标之间的距离
 * @param {Number} gap
 */
ht.ui.TabLayout.prototype.setToolGap = function(gap){};


/**
 * 获取工具按钮图标之间的距离
 * @return {Number}
 */
ht.ui.TabLayout.prototype.getToolGap = function(){};


/**
 * 设置工具按钮图标左侧的空白距离(到标题文字的距离)
 * @param {Number} gap
 */
ht.ui.TabLayout.prototype.setToolMarginLeft = function(gap){};


/**
 * 获取工具按钮图标左侧的空白距离(到标题文字的距离)
 * @return {Number}
 */
ht.ui.TabLayout.prototype.getToolMarginLeft = function(){};



/**
 * 设置关闭按钮图标左侧的空白距离(到标题文字的距离)
 * @param {Number} gap
 */
ht.ui.TabLayout.prototype.setCloseIconMarginLeft = function(gap){};


/**
 * 获取关闭按钮图标左侧的空白距离(到标题文字的距离)
 * @return {Number}
 */
ht.ui.TabLayout.prototype.getCloseIconMarginLeft = function(){};

/**
 * 
 * 面板容器；允许在内容区域放置一个子组件并在顶部提供一个标题栏<br>
 * 使用此容器需要注意，不要再用 addView 增加子组件，而是使用 setContentView<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * </ul>
 * 可以看到 layoutParams 中不支持设置 width 和 height 的参数，因为面板布局时会把 contentView 填满自身(周围根据 margin 留空白空间)，
 * 因此也不支持设置滚动条<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickTool</code></td>
 * <td>
 * <pre>
 * {
 *       kind: 'clickTool', // 事件种类
 *       tool: tool, // 点击的工具按钮
 *       toolIndex: toolIndex, // 工具按钮显示顺序
 *       natvieEvent: e // 鼠标事件对象
 * }
 * </pre>
 * </td>
 * <td>在工具按钮上点击时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：title, titleFont, titleColor, hoverTitleColor, activeTitleColor,
 *       icon, iconDrawable, iconWidth, iconHeight, iconTitleGap,
 *       tools, toolsPosition, toolWidth, toolHeight, toolGap,
 *       expanded, collapsable, collapseToolIndex, contentPadding,
 *       expandIcon, expandIconDrawable, hoverExpandIcon, hoverExpandIconDrawable, activeExpandIcon, activeExpandIconDrawable,
 *       collapseIcon, collapseIconDrawable, hoverCollapseIcon, hoverCollapseIconDrawable, activeCollapseIcon, activeCollapseIconDrawable,
 *       headerVisible, headerHeight, headerPaddingLeft, headerPaddingRight,
 *       headerBackground, headerBackgroundDrawable, hoverHeaderBackground, hoverHeaderBackgroundDrawable, activeHeaderBackground, activeHeaderBackgroundDrawable
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中演示了将按钮放置在面板中
 * var btn1 = new ht.ui.Button();
 * btn1.setText('button1');
 * var panel = new ht.ui.Panel();
 * panel.setContentView(btn1, { marginTop: 10 });
 */
ht.ui.Panel = function(properties) {};

/**
 * 获取标题文本
 * @return {String} 标题文本
 */
ht.ui.Panel.prototype.getTitle = function (){};

/**
 * 获取标题文本字体
 * @return {String} 标题文本字体
 */
ht.ui.Panel.prototype.getTitleFont = function (){};

/**
 * 获取正常状态下标题文本颜色
 * @return {color} 颜色值
 */
ht.ui.Panel.prototype.getTitleColor = function (){};

/**
 * 获取 Hover 状态下标题文本颜色
 * @return {color} 颜色值
 */
ht.ui.Panel.prototype.getHoverTitleColor = function (){};

/**
 * 获取 Active 状态下标题文本颜色
 * @return {color} 颜色值
 */
ht.ui.Panel.prototype.getActiveTitleColor = function (){};

/**
 * 根据标题栏状态，返回相应的颜色(normalTitleColor 或 hoverTitleColor 或 activeTitleColor)；可重写自定义
 * @param {String} [state] 状态，如果未指定，使用 panel.getHeaderState()
 * @return {color} 颜色值
 */
ht.ui.Panel.prototype.getCurrentTitleColor = function (state){};

/**
 * 获取标题栏图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.Panel#getIconDrawable getIconDrawable}
 */
ht.ui.Panel.prototype.getIcon = function (){};

/**
 * 获取标题栏图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Panel.prototype.getIconDrawable = function (){};

/**
 * 获取标题栏图标宽度
 * @return {Number} 图标宽度
 */
ht.ui.Panel.prototype.getIconWidth = function (){};

/**
 * 获取标题栏图标高度
 * @return {Number} 图标高度
 */
ht.ui.Panel.prototype.getIconHeight = function (){};

/**
 * 获取标题栏图文字和图标之间的距离
 * @return {Number} 间距值
 */
ht.ui.Panel.prototype.getIconTitleGap = function (){};

/**
 * 获取标题栏的工具按钮
 * @return {Array} 工具按钮数组，格式为：[{icon: 'icon', onClick: function(e) {} }, {icon: 'icon1', onClick: function(e) {} }]
 */
ht.ui.Panel.prototype.getTools = function (){};

/**
 * 获取标题栏工具按钮的位置
 * @return {String} 工具按钮位置，值为 left|right
 */
ht.ui.Panel.prototype.getToolsPosition = function (){};

/**
 * 获取标题栏工具按钮宽度
 * @return {Number} 宽度值
 */
ht.ui.Panel.prototype.getToolWidth = function (){};

/**
 * 获取标题栏工具按钮高度
 * @return {Number} 高度值
 */
ht.ui.Panel.prototype.getToolHeight = function (){};

/**
 * 获取标题栏工具按钮之间的距离
 * @return {Number} 间距值
 */
ht.ui.Panel.prototype.getToolGap = function (){};

/**
 * 判断面板是否处于展开状态
 * @return {Boolean} 面板是否展开
 */
ht.ui.Panel.prototype.isExpanded = function (){};

/**
 * 获取面板中的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.Panel.prototype.getContentView = function (){};

/**
 * 判断面板是否可合并；如果为 true，在工具按钮中显示展开合并按钮
 * @return {Boolean} 是否可展开合并
 */
ht.ui.Panel.prototype.isCollapsable = function (){};

/**
 * 获取展开合并按钮在工具按钮组中的显示顺序
 * @return {Number} 显示顺序
 */
ht.ui.Panel.prototype.getCollapseToolIndex = function (){};

/**
 * 获取正常状态下展开图标，可以是颜色或者图片等
 * @return {Object} 展开图标
 * @see {@link ht.ui.Panel#getExpandIconDrawable getExpandIconDrawable}
 */
ht.ui.Panel.prototype.getExpandIcon = function (){};

/**
 * 获取正常状态下展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开图标
 */
ht.ui.Panel.prototype.getExpandIconDrawable = function (){};

/**
 * 获取 Hover 状态下展开图标，可以是颜色或者图片等
 * @return {Object} 展开图标
 * @see {@link ht.ui.Panel#getHoverExpandIconDrawable getHoverExpandIconDrawable}
 */
ht.ui.Panel.prototype.getHoverExpandIcon = function (){};

/**
 * 获取 Hover 状态下展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开图标
 */
ht.ui.Panel.prototype.getHoverExpandIconDrawable = function (){};

/**
 * 获取 Active 状态下展开图标，可以是颜色或者图片等
 * @return {Object} 展开图标
 * @see {@link ht.ui.Panel#getActiveExpandIconDrawable getActiveExpandIconDrawable}
 */
ht.ui.Panel.prototype.getActiveExpandIcon = function (){};

/**
 * 获取 Active 状态下展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 展开图标
 */
ht.ui.Panel.prototype.getActiveExpandIconDrawable = function (){};


/**
 * 获取正常状态下合并图标，可以是颜色或者图片等
 * @return {Object} 合并图标
 * @see {@link ht.ui.Panel#getCollapseIconDrawable getCollapseIconDrawable}
 */
ht.ui.Panel.prototype.getCollapseIcon = function (){};

/**
 * 获取正常状态下合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 合并图标
 */
ht.ui.Panel.prototype.getCollapseIconDrawable = function (){};

/**
 * 获取 Hover 状态下合并图标，可以是颜色或者图片等
 * @return {Object} 合并图标
 * @see {@link ht.ui.Panel#getHoverCollapseIconDrawable getHoverCollapseIconDrawable}
 */
ht.ui.Panel.prototype.getHoverCollapseIcon = function (){};

/**
 * 获取 Hover 状态下合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 合并图标
 */
ht.ui.Panel.prototype.getHoverCollapseIconDrawable = function (){};

/**
 * 获取 Active 状态下合并图标，可以是颜色或者图片等
 * @return {Object} 合并图标
 * @see {@link ht.ui.Panel#getActiveCollapseIconDrawable getActiveCollapseIconDrawable}
 */
ht.ui.Panel.prototype.getActiveCollapseIcon = function (){};

/**
 * 获取 Active 状态下合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 合并图标
 */
ht.ui.Panel.prototype.getActiveCollapseIconDrawable = function (){};

/**
 * 判断标题栏是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.Panel.prototype.isHeaderVisible = function (){};

/**
 * 获取标题栏高度
 * @return {Number} 标题栏高度
 */
ht.ui.Panel.prototype.getHeaderHeight = function (){};

/**
 * 获取标题栏左侧内边距
 * @return {Number} 左侧内边距
 */
ht.ui.Panel.prototype.getHeaderPaddingLeft = function (){};

/**
 * 获取标题栏右侧内边距
 * @return {Number} 右侧内边距
 */
ht.ui.Panel.prototype.getHeaderPaddingRight = function (){};

/**
 * 获取标题栏状态
 * @return {String} 标题栏状态，值可能为：'normal'|'hover'|'active'
 */
ht.ui.Panel.prototype.getHeaderState = function (){};

/**
 * 获取正常状态下标题栏背景，可以是颜色或者图片等
 * @return {Object} 标题栏背景
 * @see {@link ht.ui.Panel#getHeaderBackgroundDrawable getHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.getHeaderBackground = function (){};

/**
 * 获取正常状态下标题栏背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标题栏背景
 */
ht.ui.Panel.prototype.getHeaderBackgroundDrawable = function (){};

/**
 * 获取 Hover 状态下标题栏背景，可以是颜色或者图片等
 * @return {Object} 标题栏背景
 * @see {@link ht.ui.Panel#getHoverHeaderBackgroundDrawable getHoverHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.getHoverHeaderBackground = function (){};

/**
 * 获取 Hover 状态下标题栏背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标题栏背景
 */
ht.ui.Panel.prototype.getHoverHeaderBackgroundDrawable = function (){};

/**
 * 获取 Active 状态下标题栏背景，可以是颜色或者图片等
 * @return {Object} 标题栏背景
 * @see {@link ht.ui.Panel#getActiveHeaderBackgroundDrawable getActiveHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.getActiveHeaderBackground = function (){};

/**
 * 获取 Active 状态下标题栏背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 标题栏背景
 */
ht.ui.Panel.prototype.getActiveHeaderBackgroundDrawable = function (){};

/**
 * 绘制工具按钮
 * @param {Object} tool 按钮配置 json
 * @param {Number} toolIndex 按钮顺序
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Panel.prototype.drawTool = function (tool, toolIndex, x, y, width, height){};

/**
 * 绘制标题栏图标
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Panel.prototype.drawIcon = function (drawable, x, y, width, height){};


/**
 * 绘制标题栏背景
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Panel.prototype.drawHeaderBackground = function (drawable, x, y, width, height){};


/**
 * 绘制标题栏文字
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} text 文字内容
 * @param {String} font 文字字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Panel.prototype.drawTitle = function (g, text, font, color, x, y, width, height){};

/**
 * 判断是否点击中标题栏
 * @param {Event} event 事件对象
 * @return {Boolean} 是否点击中分隔条 
 */
ht.ui.Panel.prototype.headerHitTest = function (event){};

/**
 * 获取工具按钮的顺序
 * @param {Object} tool 工具按钮配置 json
 * @return {Number} 显示顺序
 */
ht.ui.Panel.prototype.getToolIndex = function (tool){};

/**
 * 获取事件对象下的工具按钮
 * @param {Event} event 事件对象
 * @return {Object} 工具按钮配置 json
 */
ht.ui.Panel.prototype.getToolAt = function (event){};

/**
 * 增加工具按钮
 * @param {Object} tool 工具按钮配置 json
 * @param {Number} [index] 显示顺序
 */
ht.ui.Panel.prototype.addTool = function (tool, index){};

/**
 * 删除指定下标的工具按钮
 * @param {Number} index 工具按钮的下标
 */
ht.ui.Panel.prototype.removeToolAt = function (index){};


/**
 * 设置标题文本
 * @param {String} title 标题文本
 */
ht.ui.Panel.prototype.setTitle = function (title){};

/**
 * 设置标题文本字体
 * @param {String} font 标题文本字体，如 '12px Arial'
 */
ht.ui.Panel.prototype.setTitleFont = function (font){};

/**
 * 设置正常状态下标题文本颜色
 * @param {color} color 颜色值
 */
ht.ui.Panel.prototype.setTitleColor = function (color){};

/**
 * 设置 Hover 状态下标题文本颜色
 * @param {color} color 颜色值
 */
ht.ui.Panel.prototype.setHoverTitleColor = function (color){};

/**
 * 设置 Active 状态下标题文本颜色
 * @param {color} color 颜色值
 */
ht.ui.Panel.prototype.setActiveTitleColor = function (color){};

/**
 * 设置标题栏图标
 * @param {Object} icon 图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setIconDrawable setIconDrawable}
 */
ht.ui.Panel.prototype.setIcon = function (icon){};

/**
 * 设置标题栏图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.Panel.prototype.setIconDrawable = function (drawable){};

/**
 * 设置标题栏图标宽度
 * @param {Number} width 图标宽度
 */
ht.ui.Panel.prototype.setIconWidth = function (width){};

/**
 * 设置标题栏图标高度
 * @param {Number} height 图标高度
 */
ht.ui.Panel.prototype.setIconHeight = function (height){};

/**
 * 设置标题栏图文字和图标之间的距离
 * @param {Number} gap 间距值
 */
ht.ui.Panel.prototype.setIconTitleGap = function (gap){};


/**
 * 设置标题栏的工具按钮
 * @param {Array} 工具按钮数组
 * @example
 *  panel.setTools([{
 *       icon: 'roundNormal',
 *       hoverIcon: 'roundHover',
 *       activeIcon: 'roundActive',
 *       onClick: function(event) {
 *           console.log('click tool', event);
 *       }
 *   }]);
 */
ht.ui.Panel.prototype.setTools = function (tools){};

/**
 * 设置标题栏工具按钮的位置
 * @param {String} position 工具按钮位置，值为：left|right
 */
ht.ui.Panel.prototype.setToolsPosition = function (position){};
/**
 * 设置标题栏工具按钮宽度
 * @param {Number} width 宽度值
 */
ht.ui.Panel.prototype.setToolWidth = function (width){};

/**
 * 设置标题栏工具按钮高度
 * @param {Number} height 高度值
 */
ht.ui.Panel.prototype.setToolHeight = function (height){};

/**
 * 设置标题栏工具按钮之间的距离
 * @param {Number} gap 间距值
 */
ht.ui.Panel.prototype.setToolGap = function (gap){};

/**
 * 设置面板展开合并状态
 * @param {Boolean} expanded 面板是否展开
 */
ht.ui.Panel.prototype.setExpanded = function (expanded){};

/**
 * 设置面板中的子组件
 * @param {ht.ui.View} view 子组件
 * @param {Object} [layoutParams] 布局参数；可通过 childView.setLayoutPrams({...}) 提前设置并省略此参数
 */
ht.ui.Panel.prototype.setContentView = function (view, layoutParams){};

/**
 * 设置面板是否可合并
 * @param {Boolean} collapsable 是否可展开合并；如果为 true，在工具按钮组中显示展开合并按钮
 */
ht.ui.Panel.prototype.setCollapsable = function (collapsable ){};

/**
 * 设置展开合并按钮在工具按钮组中的显示顺序
 * @param {Number} index 显示顺序
 */
ht.ui.Panel.prototype.setCollapseToolIndex = function (index){};

/**
 * 设置正常状态下展开图标
 * @param {Object} icon 展开图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setExpandIconDrawable setExpandIconDrawable}
 */
ht.ui.Panel.prototype.setExpandIcon = function (icon){};

/**
 * 设置正常状态下展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 展开图标
 */
ht.ui.Panel.prototype.setExpandIconDrawable = function (drawable){};

/**
 * 设置 Hover 状态下展开图标
 * @param {Object} icon 展开图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setHoverExpandIconDrawable setHoverExpandIconDrawable}
 */
ht.ui.Panel.prototype.setHoverExpandIcon = function (icon){};

/**
 * 设置 Hover 状态下展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 展开图标
 */
ht.ui.Panel.prototype.setHoverExpandIconDrawable = function (drawable){};

/**
 * 设置 Active 状态下展开图标
 * @param {Object} icon 展开图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setActiveExpandIconDrawable setActiveExpandIconDrawable}
 */
ht.ui.Panel.prototype.setActiveExpandIcon = function (icon){};

/**
 * 设置 Active 状态下展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 展开图标
 */
ht.ui.Panel.prototype.setActiveExpandIconDrawable = function (drawable){};

/**
 * 设置正常状态下合并图标
 * @param {Object} icon 合并图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setCollapseIconDrawable setCollapseIconDrawable}
 */
ht.ui.Panel.prototype.setCollapseIcon = function (icon){};

/**
 * 设置正常状态下合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 合并图标
 */
ht.ui.Panel.prototype.setCollapseIconDrawable = function (drawable){};

/**
 * 设置 Hover 状态下合并图标
 * @param {Object} icon 合并图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setHoverCollapseIconDrawable setHoverCollapseIconDrawable}
 */
ht.ui.Panel.prototype.setHoverCollapseIcon = function (icon){};

/**
 * 设置 Hover 状态下合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 合并图标
 */
ht.ui.Panel.prototype.setHoverCollapseIconDrawable = function (drawable){};

/**
 * 设置 Active 状态下合并图标
 * @param {Object} icon 合并图标，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setActiveCollapseIconDrawable setActiveCollapseIconDrawable}
 */
ht.ui.Panel.prototype.setActiveCollapseIcon = function (icon){};

/**
 * 设置 Active 状态下合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 合并图标
 */
ht.ui.Panel.prototype.setActiveCollapseIconDrawable = function (drawable){};

/**
 * 设置标题栏是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.Panel.prototype.setHeaderVisible = function (visible){};

/**
 * 设置标题栏高度
 * @param {Number} height 标题栏高度
 */
ht.ui.Panel.prototype.setHeaderHeight = function (height){};

/**
 * 设置标题栏左侧内边距
 * @param {Number} paddingLeft 左侧内边距
 */
ht.ui.Panel.prototype.setHeaderPaddingLeft = function (paddingLeft){};

/**
 * 设置标题栏右侧内边距
 * @param {Number} paddingRight 右侧内边距
 */
ht.ui.Panel.prototype.setHeaderPaddingRight = function (paddingRight){};

/**
 * 设置标题栏状态
 * @param {String} state 标题栏状态，可选值为：'normal'|'hover'|'active'
 */
ht.ui.Panel.prototype.setHeaderState = function (state){};


/**
 * 设置正常状态下标题栏背景
 * @param {Object} background 标题栏背景，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setHeaderBackgroundDrawable setHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.setHeaderBackground = function (background){};

/**
 * 设置正常状态下标题栏背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 标题栏背景
 */
ht.ui.Panel.prototype.setHeaderBackgroundDrawable = function (drawable){};

/**
 * 设置 Hover 状态下标题栏背景
 * @param {Object} background 标题栏背景，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setHoverHeaderBackgroundDrawable setHoverHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.setHoverHeaderBackground = function (background){};

/**
 * 设置 Hover 状态下标题栏背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 标题栏背景
 */
ht.ui.Panel.prototype.setHoverHeaderBackgroundDrawable = function (drawable){};

/**
 * 设置 Active 状态下标题栏背景
 * @param {Object} background 标题栏背景，可以是颜色或者图片等
 * @see {@link ht.ui.Panel#setActiveHeaderBackgroundDrawable setActiveHeaderBackgroundDrawable}
 */
ht.ui.Panel.prototype.setActiveHeaderBackground = function (background){};

/**
 * 设置 Active 状态下标题栏背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 标题栏背景
 */
ht.ui.Panel.prototype.setActiveHeaderBackgroundDrawable = function (drawable){};

/**
 * 获取内容组件到面板边缘的距离；如果是数字，说明四边使用相同的距离；如果是数组，则格式为：[上边距离, 右边距离, 下边距离, 左边距离]
 * @return {Number|Array}
 */
ht.ui.Panel.prototype.getContentPadding = function (){};

/**
 * 设置内容组件到面板边缘的距离；如果是数字，说明四边使用相同的距离；如果是数组，则格式为：[上边距离, 右边距离, 下边距离, 左边距离]
 * @param {Number|Array} contentPadding
 */
ht.ui.Panel.prototype.setContentPadding = function (contentPadding){};









/**
 * 
 * 对话框组件<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * </ul>
 * 可以看到 layoutParams 中不支持设置 width 和 height 的参数，因为对话框布局时会把 contentView 填满自身(周围根据 margin 留空白空间)，
 * 因此也不支持设置滚动条<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickButton</code></td>
 * <td>
 * <pre>
 * {
 *       kind: 'clickButton', // 事件种类
 *       button: button, // 点击的按钮
 *       source: dialog, // 事件源
 *       buttonEvent: e // button 派发出来的点击事件对象
 * }
 * </pre>
 * </td>
 * <td>点击对话框底部按钮时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：modal, resizable, maskBackground, resizeBorderColor,
 *       closeIcon, closeIconDrawable, hoverCloseIcon, hoverCloseIconDrawable, activeCloseIcon, activeCloseIconDrawable, closable, closeToolIndex,
 *       maximizable, maximized, maximizeToolIndex,
 *       maximizeIcon, maximizeIconDrawable, hoverMaximizeIcon, hoverMaximizeIconDrawable, activeMaximizeIcon, activeMaximizeIconDrawable,
 *       restoreIcon, restoreIconDrawable, hoverRestoreIcon, hoverRestoreIconDrawable, activeRestoreIcon, activeRestoreIconDrawable,
 *       footerHeight, footerBackground, footerBackgroundDrawable, buttonGap, buttonAlign, buttonVAlign, buttonPrefWidth, buttonPrefHeight,
 *       footerPaddingLeft, footerPaddingRight, fixToCenter
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.Panel}
 * @example
 * var btn1 = new ht.ui.Button();
 * btn1.setText('button1');
 * var dialog = new ht.ui.Dialog();
 * dialog.setContentView(btn1, { marginTop: 10 });
 * dialog.setWidth(600);
 * dialog.setHeight(300);
 * var center = dialog.getCenterPosition();
 * dialog.show(center.x, center.y);
 */
ht.ui.Dialog = function(properties) {};

/**
 * 判断是否是模态对话框
 * @return {Boolean} 是否为模态对话框
 */
ht.ui.Dialog.prototype.isModal = function (){};

/**
 * 判断是否可拖拽边缘调整对话框尺寸
 * @return {Boolean} 是否为模态对话框
 */
ht.ui.Dialog.prototype.isResizable = function (){};

/**
 * 判断对话框是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.Dialog.prototype.isVisible = function (){};


/**
 * 获取遮罩背景；这个值被设置到遮罩 div 的 background 样式上，因此可以使用所有 CSS 支持的 background 类型
 * @return {String} 遮罩背景
 */
ht.ui.Dialog.prototype.getMaskBackground = function (){};


/**
 * 获取 resize 时提示边框颜色
 * @return {color} 颜色值
 */
ht.ui.Dialog.prototype.getResizeBorderColor = function (){};

/**
 * 判断面板是否可关闭；如果为 true，在工具按钮中显示关闭按钮
 * @return {Boolean} 是否可关闭
 */
ht.ui.Dialog.prototype.isClosable = function (){};

/**
 * 获取关闭按钮在工具按钮组中的显示顺序
 * @return {Number} 显示顺序
 */
ht.ui.Dialog.prototype.getCloseToolIndex = function (){};

/**
 * 获取正常状态下关闭图标，可以是颜色或者图片等
 * @return {Object} 关闭图标
 * @see {@link ht.ui.Dialog#getCloseIconDrawable getCloseIconDrawable}
 */
ht.ui.Dialog.prototype.getCloseIcon = function (){};

/**
 * 获取正常状态下关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.Dialog.prototype.getCloseIconDrawable = function (){};

/**
 * 获取 Hover 状态下关闭图标，可以是颜色或者图片等
 * @return {Object} 关闭图标
 * @see {@link ht.ui.Dialog#getHoverCloseIconDrawable getHoverCloseIconDrawable}
 */
ht.ui.Dialog.prototype.getHoverCloseIcon = function (){};

/**
 * 获取 Hover 状态下关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.Dialog.prototype.getHoverCloseIconDrawable = function (){};

/**
 * 获取 Active 状态下关闭图标，可以是颜色或者图片等
 * @return {Object} 关闭图标
 * @see {@link ht.ui.Dialog#getActiveCloseIconDrawable getActiveCloseIconDrawable}
 */
ht.ui.Dialog.prototype.getActiveCloseIcon = function (){};

/**
 * 获取 Active 状态下关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.Dialog.prototype.getActiveCloseIconDrawable = function (){};

/**
 * 判断面板是否处于最大化状态
 * @return {Boolean} 面板是否最大化
 */
ht.ui.Dialog.prototype.isMaximized = function (){};

/**
 * 判断面板是否可最大化；如果为 true，在工具按钮中显示最大化按钮
 * @return {Boolean} 是否可最大化
 */
ht.ui.Dialog.prototype.isMaximizable = function (){};

/**
 * 获取最大化按钮在工具按钮组中的显示顺序
 * @return {Number} 显示顺序
 */
ht.ui.Dialog.prototype.getMaximizeToolIndex = function (){};

/**
 * 获取正常状态下最大化图标，可以是颜色或者图片等
 * @return {Object} 最大化图标
 * @see {@link ht.ui.Dialog#getMaximizeIconDrawable getMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.getMaximizeIcon = function (){};

/**
 * 获取正常状态下最大化图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 最大化图标
 */
ht.ui.Dialog.prototype.getMaximizeIconDrawable = function (){};

/**
 * 获取 Hover 状态下最大化图标，可以是颜色或者图片等
 * @return {Object} 最大化图标
 * @see {@link ht.ui.Dialog#getHoverMaximizeIconDrawable getHoverMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.getHoverMaximizeIcon = function (){};

/**
 * 获取 Hover 状态下最大化图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 最大化图标
 */
ht.ui.Dialog.prototype.getHoverMaximizeIconDrawable = function (){};

/**
 * 获取 Active 状态下最大化图标，可以是颜色或者图片等
 * @return {Object} 最大化图标
 * @see {@link ht.ui.Dialog#getActiveMaximizeIconDrawable getActiveMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.getActiveMaximizeIcon = function (){};

/**
 * 获取 Active 状态下最大化图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 最大化图标
 */
ht.ui.Dialog.prototype.getActiveMaximizeIconDrawable = function (){};

/**
 * 获取正常状态下恢复图标，可以是颜色或者图片等
 * @return {Object} 恢复图标
 * @see {@link ht.ui.Dialog#getRestoreIconDrawable getRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.getRestoreIcon = function (){};

/**
 * 获取正常状态下恢复图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 恢复图标
 */
ht.ui.Dialog.prototype.getRestoreIconDrawable = function (){};

/**
 * 获取 Hover 状态下恢复图标，可以是颜色或者图片等
 * @return {Object} 恢复图标
 * @see {@link ht.ui.Dialog#getHoverRestoreIconDrawable getHoverRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.getHoverRestoreIcon = function (){};

/**
 * 获取 Hover 状态下恢复图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 恢复图标
 */
ht.ui.Dialog.prototype.getHoverRestoreIconDrawable = function (){};

/**
 * 获取 Active 状态下恢复图标，可以是颜色或者图片等
 * @return {Object} 恢复图标
 * @see {@link ht.ui.Dialog#getActiveRestoreIconDrawable getActiveRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.getActiveRestoreIcon = function (){};

/**
 * 获取 Active 状态下恢复图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 恢复图标
 */
ht.ui.Dialog.prototype.getActiveRestoreIconDrawable = function (){};

/**
 * 获取底栏高度
 * @return {Number} 高度值
 */
ht.ui.Dialog.prototype.getFooterHeight = function (){};

/**
 * 获取底栏背景，可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Dialog#getFooterBackgroundDrawable getFooterBackgroundDrawable}
 */
ht.ui.Dialog.prototype.getFooterBackground = function (){};

/**
 * 获取底栏背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Dialog.prototype.getFooterBackgroundDrawable = function (){};

/**
 * 获取底栏中的按钮数组
 * @return {Array} 按钮数组，格式为：[{icon: 'icon', onClick: function(e) {} }, {icon: 'icon1', onClick: function(e) {} }]
 */
ht.ui.Dialog.prototype.getButtons = function (){};

/**
 * 获取底栏按钮之间的距离
 * @return {Number} 间距值
 */
ht.ui.Dialog.prototype.getButtonGap = function (){};

/**
 * 获取底栏按钮的水平对齐方式
 * @return {String} 对齐方式，值可能为：'left'|'center'|'right'
 */
ht.ui.Dialog.prototype.getButtonAlign = function (){};


/**
 * 获取底栏按钮的垂直对齐方式
 * @return {String} 对齐方式，值可能为：'top'|'middle'|'bottom'
 */
ht.ui.Dialog.prototype.getButtonVAlign = function (){};

/**
 * 获取底栏左侧内边距
 * @return {String} 底栏左侧内边距
 */
ht.ui.Dialog.prototype.getFooterPaddingLeft = function (){};


/**
 * 获取底栏右侧内边距
 * @return {String} 底栏右侧内边距
 */
ht.ui.Dialog.prototype.getFooterPaddingRight = function (){};

/**
 * 获取事件对象下的 resize 区域
 * @param {Event} e 事件对象
 * @return {String} resize 区域名称，值可能为：'east'|'west'|'south'|'southwest'|'southeast'
 */
ht.ui.Dialog.prototype.getResizeDivAt = function (e){};

/**
 * 获取底栏按钮的宽度，默认返回 preferredSize.width，可重写自定义
 * @param {ht.ui.Button} button 按钮对象
 * @return {Number} 宽度值
 */
ht.ui.Dialog.prototype.getButtonWidth = function (button){};

/**
 * 获取底栏按钮的高度，默认返回 preferredSize.height，可重写自定义
 * @param {ht.ui.Button} button 按钮对象
 * @return {Number} 高度值
 */
ht.ui.Dialog.prototype.getButtonHeight = function (button){};

/**
 * 增加底栏按钮
 * @param {Object} button 按钮配置 json
 * @param {Number} [index] 显示顺序
 */
ht.ui.Dialog.prototype.addButton = function (button, index){};

/**
 * 删除指定下标的底栏按钮
 * @param {Number} index 底栏按钮的下标
 */
ht.ui.Dialog.prototype.removeButtonAt = function (index){};

/**
 * 绘制底栏背景
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围的 x 坐标
 * @param {Number} y 绘制范围的 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Dialog.prototype.drawFooterBackground = function (drawable, x, y, width, height){};

/**
 * 显示对话框
 * @param {Number} [x] x 坐标
 * @param {Number} [y] y 坐标
 * @example
 * // 对话框显示在屏幕中心
 * dialog.setWidth(600);
 * dialog.setHeight(300);
 * var center = dialog.getCenterPosition();
 * dialog.show(center.x, center.y);
 */
ht.ui.Dialog.prototype.show = function (x, y){};

/**
 * 隐藏对话框
 */
ht.ui.Dialog.prototype.hide = function (){};

/**
 * 根据屏幕大小和对话框本身宽高计算出显示在中心时的坐标并返回
 * @return {Object} 坐标值
 */
ht.ui.Dialog.prototype.getCenterPosition = function (){};


/**
 * 设置是否是模态对话框
 * @param {Boolean} modal 是否为模态对话框
 */
ht.ui.Dialog.prototype.setModal = function (modal){};

/**
 * 设置是否可拖拽边缘调整对话框尺寸
 * @param {Boolean} resizable 是否为模态对话框
 */
ht.ui.Dialog.prototype.setResizable = function (resizable){};

/**
 * 设置遮罩背景
 * @param {String} background 遮罩背景；这个值被设置到遮罩 div 的 background 样式上，因此可以使用所有 CSS 支持的 background 类型
 */
ht.ui.Dialog.prototype.setMaskBackground = function (background){};

/**
 * 设置 resize 时提示边框颜色
 * @param {color} color 颜色值
 */
ht.ui.Dialog.prototype.setResizeBorderColor = function (color){};


/**
 * 设置面板是否可关闭
 * @param {Boolean} closable 是否可关闭；如果为 true，在工具按钮中显示关闭按钮
 */
ht.ui.Dialog.prototype.setClosable = function (closable){};

/**
 * 设置关闭按钮在工具按钮组中的显示顺序
 * @param {Number} index 显示顺序
 */
ht.ui.Dialog.prototype.setCloseToolIndex = function (index){};

/**
 * 设置正常状态下关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setCloseIconDrawable setCloseIconDrawable}
 */
ht.ui.Dialog.prototype.setCloseIcon = function (icon){};

/**
 * 设置正常状态下关闭图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.Dialog.prototype.setCloseIconDrawable = function (drawable){};

/**
 * 设置 Hover 状态下关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setHoverCloseIconDrawable setHoverCloseIconDrawable}
 */
ht.ui.Dialog.prototype.setHoverCloseIcon = function (icon){};

/**
 * 设置 Hover 状态下关闭图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.Dialog.prototype.setHoverCloseIconDrawable = function (drawable){};

/**
 * 设置 Active 状态下关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setActiveCloseIconDrawable setActiveCloseIconDrawable}
 */
ht.ui.Dialog.prototype.setActiveCloseIcon = function (icon){};

/**
 * 设置 Active 状态下关闭图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.Dialog.prototype.setActiveCloseIconDrawable = function (drawable){};


/**
 * 设置面板是否处于最大化状态
 * @param {Boolean} maximized 面板是否最大化
 */
ht.ui.Dialog.prototype.setMaximized = function (maximized){};

/**
 * 设置面板是否可最大化
 * @param {Boolean} maximizable 是否可最大化；如果为 true，在工具按钮中显示最大化按钮
 */
ht.ui.Dialog.prototype.setMaximizable = function (maximizable){};

/**
 * 设置最大化按钮在工具按钮组中的显示顺序
 * @param {Number} index 显示顺序
 */
ht.ui.Dialog.prototype.setMaximizeToolIndex = function (index){};

/**
 * 设置正常状态下最大化图标
 * @param {Object} icon 最大化图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setMaximizeIconDrawable setMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.setMaximizeIcon = function (icon){};

/**
 * 设置正常状态下最大化图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 最大化图标
 */
ht.ui.Dialog.prototype.setMaximizeIconDrawable = function (drawable){};

/**
 * 设置 Hover 状态下最大化图标
 * @param {Object} icon 最大化图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setHoverMaximizeIconDrawable setHoverMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.setHoverMaximizeIcon = function (icon){};

/**
 * 设置 Hover 状态下最大化图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 最大化图标
 */
ht.ui.Dialog.prototype.setHoverMaximizeIconDrawable = function (drawable){};

/**
 * 设置 Active 状态下最大化图标
 * @param {Object} icon 最大化图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setActiveMaximizeIconDrawable setActiveMaximizeIconDrawable}
 */
ht.ui.Dialog.prototype.setActiveMaximizeIcon = function (icon){};

/**
 * 设置 Active 状态下最大化图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 最大化图标
 */
ht.ui.Dialog.prototype.setActiveMaximizeIconDrawable = function (drawable){};

/**
 * 设置正常状态下恢复图标
 * @param {Object} icon 恢复图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setRestoreIconDrawable setRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.setRestoreIcon = function (icon){};

/**
 * 设置正常状态下恢复图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 恢复图标
 */
ht.ui.Dialog.prototype.setRestoreIconDrawable = function (drawable){};

/**
 * 设置 Hover 状态下恢复图标
 * @param {Object} icon 恢复图标，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setHoverRestoreIconDrawable setHoverRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.setHoverRestoreIcon = function (icon){};

/**
 * 设置 Hover 状态下恢复图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 恢复图标
 */
ht.ui.Dialog.prototype.setHoverRestoreIconDrawable = function (drawable){};

/**
 * 设置 Active 状态下恢复图标，可以是颜色或者图片等
 * @param {Object} icon 恢复图标
 * @see {@link ht.ui.Dialog#setActiveRestoreIconDrawable setActiveRestoreIconDrawable}
 */
ht.ui.Dialog.prototype.setActiveRestoreIcon = function (icon){};

/**
 * 设置 Active 状态下恢复图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 恢复图标
 */
ht.ui.Dialog.prototype.setActiveRestoreIconDrawable = function (drawable){};


/**
 * 设置底栏高度
 * @param {Number} height 高度值
 */
ht.ui.Dialog.prototype.setFooterHeight = function (height){};

/**
 * 设置底栏背景
 * @param {Object} 底栏背景，可以是颜色或者图片等
 * @see {@link ht.ui.Dialog#setFooterBackgroundDrawable setFooterBackgroundDrawable}
 */
ht.ui.Dialog.prototype.setFooterBackground = function (background){};

/**
 * 设置底栏背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 底栏背景
 */
ht.ui.Dialog.prototype.setFooterBackgroundDrawable = function (drawable){};

/**
 * 设置底栏中的按钮数组
 * @param {Array} buttons 按钮数组
 * @example
 * dialog.setButtons([{
 *       // 这里可配置所有按钮属性，如 text、textColor 等
 *       icon: 'roundNormal',
 *       hoverIcon: 'roundHover',
 *       activeIcon: 'roundActive',
 *       onClick: function(event) {
 *           console.log('click tool', event);
 *       }
 *   }]);
 */
ht.ui.Dialog.prototype.setButtons = function (buttons){};

/**
 * 设置底栏按钮之间的距离
 * @param {Number} gap 间距值
 */
ht.ui.Dialog.prototype.setButtonGap = function (gap){};

/**
 * 设置底栏按钮的水平对齐方式
 * @param {String} align 对齐方式，可选值为：'left'|'center'|'right'
 */
ht.ui.Dialog.prototype.setButtonAlign = function (align){};


/**
 * 设置底栏按钮的垂直对齐方式
 * @param {String} vAlign 对齐方式，可选值为：'top'|'middle'|'bottom'
 */
ht.ui.Dialog.prototype.setButtonVAlign = function (vAlign){};

/**
 * 设置底栏左侧内边距
 * @param {Number} paddingLeft 底栏左侧内边距
 */
ht.ui.Dialog.prototype.setFooterPaddingLeft = function (paddingLeft){};

/**
 * 设置底栏右侧内边距
 * @param {Number} paddingRight 底栏右侧内边距
 */
ht.ui.Dialog.prototype.setFooterPaddingRight = function (paddingRight){};

/**
 * 设置对话框是否可见；不要调用此函数，如果要显示对话框用 show 函数(但是可以通过监听 visible 属性变化来处理对话框显示和隐藏事件)
 * @param {Boolean} visible
 */
ht.ui.Dialog.prototype.setVisible = function (visible){};


/**
 * 获取对话框是否固定在页面中心
 * @return {Boolean}
 */
ht.ui.Dialog.prototype.isFixToCenter = function (){};

/**
 * 设置对话框是否固定在页面中心
 * @param {Boolean} fixToCenter
 */
ht.ui.Dialog.prototype.setFixToCenter = function (fixToCenter){};

/**
 * 获取对话框底部按钮的首选宽度
 * @return {Number}
 */
ht.ui.Dialog.prototype.getButtonPrefWidth = function (){};

/**
 * 设置对话框底部按钮的首选宽度
 * @param {Number} width
 */
ht.ui.Dialog.prototype.setButtonPrefWidth = function (width){};


/**
 * 获取对话框底部按钮的首选高度
 * @return {Number}
 */
ht.ui.Dialog.prototype.getButtonPrefHeight = function (){};

/**
 * 设置对话框底部按钮的首选高度
 * @param {Number} height
 */
ht.ui.Dialog.prototype.setButtonPrefHeight = function (height){};

/**
 * 判断对话框是否会自动按照首选大小调整自身尺寸
 * @return {Boolean}
 */
ht.ui.Dialog.prototype.isAutoResize = function (){};

/**
 * 设置对话框是否自动按照首选大小调整自身尺寸
 * @param {Boolean} autoResize
 */
ht.ui.Dialog.prototype.setAutoResize = function (autoResize){};


/**
 * 此布局器将子组件沿着水平或垂直方向排布并提供自动换行列的功能<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> 
 * width 指定组件布局宽度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选宽度 </li>
 * <li> 固定像素宽度 </li>
 * </ul>
 * </li>
 * <li> 
 * height 指定组件布局高度取值方式，默认为 'wrap_content'
 * <ul>
 * <li> 'wrap_content' 组件自身首选高度 </li>
 * <li> 固定像素高度</li>
 * </ul>
 * </li>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * <li> flowBreak 是否终止当前行列的排布并换行(或换列) </li>
 * </ul>
 * 样式属性(不含从父类继承)：direction
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 */
ht.ui.FlowLayout = function(properties) {};

/**
 * 获取子组件布局的方向
 * @return {String} 方向
 */
ht.ui.FlowLayout.prototype.getDirection = function (){};

/**
 * 设置子组件布局的方向
 * @param {String} direction 方向，值为：
 * <ul>
 * <li>leftToRight: 从左到右</li>
 * <li>rightToLeft: 从右到左</li>
 * <li>topDown: 从上到下</li>
 * <li>bottomUp: 从下到上</li>
 * </ul>
 */
ht.ui.FlowLayout.prototype.setDirection = function (direction){};
/**
 * 按钮、标签等组件的的基类，从 ht.ui.View 继承，提供了图标和文字的显示功能<br><br>
 * 样式属性(不含从父类继承)：icon, iconStretch, iconDrawable, iconWidth, iconHeight, iconTextGap, text, textColor, textFont, hTextPosition, vTextPosition, align, multilineTextAlign, vAlign, toolTip, badge
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.ButtonBase = function() {};

/**
 * 获取图标拉伸方式
 * @return {String} 图标拉伸方式
 */
ht.ui.ButtonBase.prototype.getIconStretch = function (){};

/**
 * 获取图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ButtonBase#getIconDrawable getIconDrawable}
 */
ht.ui.ButtonBase.prototype.getIcon = function (){};

/**
 * 获取图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ButtonBase.prototype.getIconDrawable = function (){};

/**
 * 获取图标的宽度
 * @return {Number} 图标宽度
 */
ht.ui.ButtonBase.prototype.getIconWidth = function (){};

/**
 * 获取图标的高度
 * @return {Number} 图标高度
 */
ht.ui.ButtonBase.prototype.getIconHeight = function (){};

/**
 * 获取图标和文字之间的间距
 * @return {Number} 间距值
 */
ht.ui.ButtonBase.prototype.getIconTextGap = function (){};

/**
 * 获取文字内容
 * @return {String} 文字内容
 */
ht.ui.ButtonBase.prototype.getText = function (){};

/**
 * 获取文字颜色
 * @return {color} 文字颜色
 */
ht.ui.ButtonBase.prototype.getTextColor = function (){};

/**
 * 获取文字字体
 * @return {String} 文字字体
 */
ht.ui.ButtonBase.prototype.getTextFont = function (){};

/**
 * 获取文字在水平方向相对于图标的位置，默认值为 'right'
 * @return {String} 位置，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.getHTextPosition = function (){};

/**
 * 获取文字在垂直方向相对于图标的位置，默认值为 'middle'
 * @return {String} 位置，可选值为 'top'|'bottom'|'middle'
 */
ht.ui.ButtonBase.prototype.getVTextPosition = function (){};

/**
 * 获取文字和图标在按钮水平方向的整体对齐方式，默认为 'center'
 * @return {String} 对齐方式，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.getAlign = function (){};

/**
 * 获取多行文本中每行文字的对齐方式
 * @return {String} 对齐方式，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.getMultilineTextAlign = function (){};


/**
 * 获取文字和图标在按钮垂直方向的整体对齐方式，默认为 'middle'
 * @return {String} 对齐方式，可选值为 'top'|'bottom'|'middle'
 */
ht.ui.ButtonBase.prototype.getVAlign = function () {};

/**
 * 返回计算出来的文本尺寸，可重写返回自定义的尺寸
 * @return {Object} 尺寸对象，格式为 { width: width, height: height }
 */
ht.ui.ButtonBase.prototype.getTextSize = function () {};

/**
 * 绘制文本
 * @param {String} text 文本内容
 * @param {String} font 字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ButtonBase.prototype.drawText = function (text, font, color, x, y, width, height) {};

/**
 * 绘制图标
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ButtonBase.prototype.drawIcon = function (drawable, x, y, width, height) {};

/**
 * 计算文本尺寸
 * @return {Object} 文本尺寸
 */
ht.ui.ButtonBase.prototype.figureTextSize = function () {};


/**
 * 判断是否点击中按钮，可重写此函数实现特殊形状按钮的交互
 * @param {Event} event 事件对象
 */
ht.ui.ButtonBase.prototype.hitTest = function (event) {};

/**
 * 设置图标拉伸方式
 * @param {String} icon 图标拉伸方式，可选值为：'fill'|'uniform'|'centerUniform'|'center'|null(等同于 centerUniform)
 */
ht.ui.ButtonBase.prototype.setIconStretch = function (stretch){};

/**
 * 设置图标，可以是颜色或者图片等
 * @param {Object} icon 图标，可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.ButtonBase#setIconDrawable setIconDrawable}
 */
ht.ui.ButtonBase.prototype.setIcon = function (icon){};

/**
 * 设置图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ButtonBase.prototype.setIconDrawable = function (drawable){};

/**
 * 设置图标的宽度
 * @param {Number} width 图标宽度
 */
ht.ui.ButtonBase.prototype.setIconWidth = function (width){};

/**
 * 设置图标的高度
 * @return {Number} height 图标高度
 */
ht.ui.ButtonBase.prototype.setIconHeight = function (height){};

/**
 * 设置图标和文字之间的间距
 * @param {Number} gap 间距值
 */
ht.ui.ButtonBase.prototype.setIconTextGap = function (gap){};

/**
 * 设置文字内容
 * @param {String} text 文字内容
 */
ht.ui.ButtonBase.prototype.setText = function (text){};

/**
 * 设置文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.ButtonBase.prototype.setTextColor = function (color){};

/**
 * 设置文字字体
 * @param {String} font 文字字体
 */
ht.ui.ButtonBase.prototype.setTextFont = function (font){};

/**
 * 设置文字在水平方向相对于图标的位置，默认值为 'right'
 * @param {String} position 位置，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.setHTextPosition = function (position){};

/**
 * 设置文字在垂直方向相对于图标的位置，默认值为 'middle'
 * @param {String} position 位置，可选值为 'top'|'bottom'|'middle'
 */
ht.ui.ButtonBase.prototype.setVTextPosition = function (position){};

/**
 * 设置文字和图标在按钮水平方向的整体对齐方式，默认为 'center'
 * @param {String} align 对齐方式，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.setAlign = function (align){};

/**
 * 设置多行文本中每行文字的对齐方式
 * @param {String} align 对齐方式，可选值为 'left'|'right'|'center'
 */
ht.ui.ButtonBase.prototype.setMultilineTextAlign = function (align){};

/**
 * 设置文字和图标在按钮垂直方向的整体对齐方式，默认为 'middle'
 * @param {String} vAlign 对齐方式，可选值为 'top'|'bottom'|'middle'
 */
ht.ui.ButtonBase.prototype.setVAlign = function (vAlign) {};

/**
 * 设置工具提示文本内容
 * @param {String} toolTip 工具提示文本内容
 */
ht.ui.ButtonBase.prototype.setToolTip = function (toolTip) {};


/**
 * 获取 badge 信息
 * @return {String|Object} badge 信息
 */
ht.ui.ButtonBase.prototype.getBadge = function () {};


/**
 * 设置 badge 信息
 * @param {String|Object} badge badge 信息，值为字符串时被作为 badge 文字；也可以指定一个对象：{ text: '1', css: { borderRadius: '10px' } }，其中 text 属性为 badge 文字提示，css 属性为 CSS 样式(背景、边框、位置等)
 */
ht.ui.ButtonBase.prototype.setBadge = function (badge) {};

/**
 * 按钮类，从 ht.ui.ButtonBase 继承；<br>
 * 此组件对 background、textColor、icon 提供了额外的 hover、active 状态支持<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>click</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'click', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: button // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击组件时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：hoverTextColor, activeTextColor, disabledTextColor, 
 * hoverIcon, hoverIconDrawable, activeIcon, activeIconDrawable, disabledIcon, disabledIconDrawable, 
 * hoverBackground, hoverBackgroundDrawable, activeBackground, activeBackgroundDrawable, disabledBackground, disabledBackgroundDrawable, 
 * pixelPerfect, hoverBorder, activeBorder, disabledBorder
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ButtonBase}
 */
ht.ui.Button = function(properties) {};

/**
 * 获取 hover 状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.Button#getHoverIconDrawable getHoverIconDrawable}
 */
ht.ui.Button.prototype.getHoverIcon = function (){};

/**
 * 获取 active 状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.Button#getActiveIconDrawable getActiveIconDrawable}
 */
ht.ui.Button.prototype.getActiveIcon = function (){};

/**
 * 获取 disabled 状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.Button#getDisabledIconDrawable getDisabledIconDrawable}
 */
ht.ui.Button.prototype.getDisabledIcon = function (){};


/**
 * 获取 hover 状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Button.prototype.getHoverIconDrawable = function (){};

/**
 * 获取 active 状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Button.prototype.getActiveIconDrawable = function (){};

/**
 * 获取 disabled 状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Button.prototype.getDisabledIconDrawable = function (){};


/**
 * 获取图标的 Drawable 对象；此函数根据当前按钮的状态(normal、hover、active、disabled) 返回相应的 Drawable，如：hover 状态下返回 getHoverIconDrawable()
 * @param {String} [state] 状态，如果未指定，使用 button.getState()
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Button.prototype.getCurrentIconDrawable = function (state){};

/**
 * 获取 hover 状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Button.prototype.getHoverTextColor = function (){};

/**
 * 获取 active 状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Button.prototype.getActiveTextColor = function (){};


/**
 * 获取 disabled 状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Button.prototype.getDisabledTextColor = function (){};

/**
 * 获取文字颜色；此函数根据当前按钮的状态(normal、hover、active、disabled) 返回相应的文本颜色，如：hover 状态下返回 getHoverTextColor()
 * @param {String} [state] 状态，如果未指定，使用 button.getState()
 * @return {color} 文字颜色
 */
ht.ui.Button.prototype.getCurrentTextColor = function (state){};

/**
 * 获取 hover 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Button#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.Button.prototype.getHoverBackground = function (){};


/**
 * 获取 active 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Button#getActiveBackgroundDrawable getActiveBackgroundDrawable}
 */
ht.ui.Button.prototype.getActiveBackground = function (){};


/**
 * 获取 disabled 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Button#getDisabledBackgroundDrawable getDisabledBackgroundDrawable}
 */
ht.ui.Button.prototype.getDisabledBackground = function (){};


/**
 * 获取 hover 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Button.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 获取 active 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Button.prototype.getActiveBackgroundDrawable = function (){};


/**
 * 获取 disabled 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Button.prototype.getDisabledBackgroundDrawable = function (){};

/**
 * 获取背景的 Drawable 对象；此函数根据当前按钮的状态(normal、hover、active、disabled) 返回相应的背景，如：hover 状态下返回 getHoverBackgroundDrawable()
 * @param {String} [state] 状态，如果未指定，使用 button.getState()
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Button.prototype.getCurrentBackgroundDrawable = function (state){};

/**
 * 获取按钮状态
 * @return {String} 按钮状态，值可能为：'normal'|'hover'|'active'
 */
ht.ui.Button.prototype.getState = function (){};

/**
 * 设置按钮状态
 * @param {String} state 按钮状态，可选值为：'normal'|'hover'|'active'
 */
ht.ui.Button.prototype.setState = function (state){};

/**
 * 设置 hover 状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setHoverIconDrawable setHoverIconDrawable}
 */
ht.ui.Button.prototype.setHoverIcon = function (icon){};

/**
 * 设置 active 状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setActiveIconDrawable setActiveIconDrawable}
 */
ht.ui.Button.prototype.setActiveIcon = function (icon){};


/**
 * 设置 disabled 状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setDisabledIconDrawable setDisabledIconDrawable}
 */
ht.ui.Button.prototype.setDisabledIcon = function (icon){};

/**
 * 设置 hover 状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.Button.prototype.setHoverIconDrawable = function (drawable){};

/**
 * 设置 active 状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.Button.prototype.setActiveIconDrawable = function (drawable){};


/**
 * 设置 disabled 状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.Button.prototype.setDisabledIconDrawable = function (drawable){};


/**
 * 设置 hover 状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Button.prototype.setHoverTextColor = function (color){};

/**
 * 设置 active 状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Button.prototype.setActiveTextColor = function (color){};


/**
 * 设置 disabled 状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Button.prototype.setDisabledTextColor = function (color){};

/**
 * 设置 hover 状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.Button.prototype.setHoverBackground = function (background){};


/**
 * 设置 active 状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setActiveBackgroundDrawable setActiveBackgroundDrawable}
 */
ht.ui.Button.prototype.setActiveBackground = function (background){};


/**
 * 设置 disabled 状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.Button#setDisabledBackgroundDrawable setDisabledBackgroundDrawable}
 */
ht.ui.Button.prototype.setDisabledBackground = function (background){};

/**
 * 设置 hover 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Button.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置 active 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Button.prototype.setActiveBackgroundDrawable = function (drawable){};


/**
 * 设置 disabled 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Button.prototype.setDisabledBackgroundDrawable = function (drawable){};

/**
 * 点击时是否根据像素点判断
 * @return {Boolean}
 */
ht.ui.Button.prototype.isPixelPerfect = function (){};


/**
 * 设置点击时是否根据像素点判断
 * @param {Boolean} pixelPerfect 如果为 true，只有点击的位置有像素点时才被认为点击中
 */
ht.ui.Button.prototype.setPixelPerfect = function (pixelPerfect){};


/**
 * 获取 hover 状态下的边框
 * @return {ht.border.Border} 组件边框
 */
ht.ui.Button.prototype.getHoverBorder = function() {}

/**
 * 设置 hover 状态下的边框
 * @param {ht.border.Border} border 组件边框
 */
ht.ui.Button.prototype.setHoverBorder = function(border) {}


/**
 * 获取 active 状态下的边框
 * @return {ht.border.Border} 组件边框
 */
ht.ui.Button.prototype.getActiveBorder = function() {}


/**
 * 设置 active 状态下的边框
 * @param {ht.border.Border} border 组件边框
 */
ht.ui.Button.prototype.setActiveBorder = function(border) {}

/**
 * 获取 disabled 状态下的边框
 * @return {ht.border.Border} 组件边框
 */
ht.ui.Button.prototype.getDisabledBorder = function() {}


/**
 * 设置 disabled 状态下的边框
 * @param {ht.border.Border} border 组件边框
 */
ht.ui.Button.prototype.setDisabledBorder = function(border) {}














/**
 * 链接按钮类，从 ht.ui.Button 继承；修改了按钮默认样式属性以便看起来更像超链接，并且为文本增加了下划线
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.Button}
 */
ht.ui.LinkButton = function(properties) {};


/**
 * 下拉菜单按钮组件，点击时可显示下拉菜单<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>action</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'action', // 事件类型
 *      item: item, // 点击的菜单项
 *      nativeEvent: e, // 鼠标事件
 *      source: menuButton // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击菜单项时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：dropDownIcon, hoverDropDownIcon, activeDropDownIcon, disabledDropDownIcon,
 *                      dropDownIconDrawable, hoverDropDownIconDrawable,  activeDropDownIconDrawable, disabledDropDownIconDrawable, dropDownIconTextGap, dropDownIconWidth, dropDownIconHeight, items
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.Button}
 */
ht.ui.MenuButton = function(properties) {};

/**
 * 获取下拉图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.MenuButton#getDropDownIconDrawable getDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.getDropDownIcon = function (){};

/**
 * 获取下拉图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.MenuButton.prototype.getDropDownIconDrawable = function (){};


/**
 * 设置下拉图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.MenuButton#setDropDownIconDrawable setDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.setDropDownIcon = function (icon){};

/**
 * 设置下拉图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.MenuButton.prototype.setDropDownIconDrawable = function (drawable){};


/**
 * 获取 hover 状态的下拉图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.MenuButton#getHoverDropDownIconDrawable getHoverDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.getHoverDropDownIcon = function (){};

/**
 * 获取 hover 状态的下拉图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.MenuButton.prototype.getHoverDropDownIconDrawable = function (){};


/**
 * 设置 hover 状态的下拉图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.MenuButton#setHoverDropDownIconDrawable setHoverDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.setHoverDropDownIcon = function (icon){};

/**
 * 设置 hover 状态的下拉图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.MenuButton.prototype.setHoverDropDownIconDrawable = function (drawable){};


/**
 * 获取 active 状态的下拉图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.MenuButton#getActiveDropDownIconDrawable getActiveDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.getActiveDropDownIcon = function (){};

/**
 * 获取 active 状态的下拉图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.MenuButton.prototype.getActiveDropDownIconDrawable = function (){};


/**
 * 设置 active 状态的下拉图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.MenuButton#setActiveDropDownIconDrawable setActiveDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.setActiveDropDownIcon = function (icon){};

/**
 * 设置 active 状态的下拉图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.MenuButton.prototype.setActiveDropDownIconDrawable = function (drawable){};


/**
 * 获取 disabled 状态的下拉图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.MenuButton#getDisabledDropDownIconDrawable getDisabledDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.getDisabledDropDownIcon = function (){};

/**
 * 获取 disabled 状态的下拉图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.MenuButton.prototype.getDisabledDropDownIconDrawable = function (){};


/**
 * 设置 disabled 状态的下拉图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.MenuButton#setDisabledDropDownIconDrawable setDisabledDropDownIconDrawable}s
 */
ht.ui.MenuButton.prototype.setDisabledDropDownIcon = function (icon){};

/**
 * 设置 disabled 状态的下拉图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.MenuButton.prototype.setDisabledDropDownIconDrawable = function (drawable){};


/**
 * 获取下拉图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.MenuButton.prototype.getDropDownIconWidth = function (){};

/**
 * 设置下拉图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.MenuButton.prototype.setDropDownIconWidth = function (width){};


/**
 * 获取下拉图标的高度
 * @return {Number} 高度值
 */
ht.ui.MenuButton.prototype.getDropDownIconHeight = function (){};

/**
 * 设置下拉图标的高度
 * @param {Number} height 高度值
 */
ht.ui.MenuButton.prototype.setDropDownIconHeight = function (height){};

/**
 * 获取菜单内容
 * @return {Array} 菜单内容
 */
ht.ui.MenuButton.prototype.getItems = function (){};

/**
 * 设置菜单内容
 * @param {Array} items 菜单内容，与 ht.ui.ContextMenu 的 items 格式保持一致
 */
ht.ui.MenuButton.prototype.setItems = function (items){};

/**
 * 获取下拉菜单
 * @return {ht.ui.ContextMenu} 下拉菜单
 */
ht.ui.MenuButton.prototype.getDropDownMenu = function (){};

/**
 * 判断下拉菜单是否处于打开状态
 * @return {Boolean} 是否处于打开状态
 */
ht.ui.MenuButton.prototype.isOpened = function() {};

/**
 * 打开下拉菜单
 */
ht.ui.MenuButton.prototype.open = function() {};

/**
 * 关闭下拉菜单
 */
ht.ui.MenuButton.prototype.close = function() {};

/**
 * 切换下拉菜单状态(如果处于关闭状态将其打开；如果处于打开状态则将其关闭)
 */
ht.ui.MenuButton.prototype.toggle = function() {};

/**
 * 开关按钮类，从 ht.ui.Button 继承；<br>
 * 此组件对 background、textColor、icon 的选中、非选中状态都提供了 normal、hover、active 三态支持<br><br>
 * 样式属性(不含从父类继承)：selected,
 *       selectIcon, selectIconDrawable, selectHoverIcon, selectHoverIconDrawable, selectActiveIcon, selectActiveIconDrawable,selectDisabledIcon, selectDisabledIconDrawable,
 *       selectBackground, selectBackgroundDrawable, selectHoverBackground, selectHoverBackgroundDrawable, selectActiveBackground, selectActiveBackgroundDrawable,selectDisabledBackground, selectDisabledBackgroundDrawable,
 *       selectTextColor, selectHoverTextColor, selectActiveTextColor, selectDisabledTextColor,
 *       selectBorder, selectHoverBorder, selectActiveBorder, selectDisabledBorder
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.Button}
 */
ht.ui.ToggleButton = function(properties) {};

/**
 * 获取正常选中状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ToggleButton#getSelectIconDrawable getSelectIconDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectIcon = function (){};

/**
 * 获取 hover 选中状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ToggleButton#getSelectHoverIconDrawable getSelectHoverIconDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectHoverIcon = function (){};

/**
 * 获取 active 选中状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ToggleButton#getSelectActiveIconDrawable getSelectActiveIconDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectActiveIcon = function (){};


/**
 * 获取 disabled 选中状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ToggleButton#getSelectDisabledIconDrawable getSelectDisabledIconDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectDisabledIcon = function (){};


/**
 * 获取正常选中状态下图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ToggleButton.prototype.getSelectIconDrawable = function (){};

/**
 * 获取 hover 选中状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ToggleButton.prototype.getSelectHoverIconDrawable = function (){};

/**
 * 获取 active 选中状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ToggleButton.prototype.getSelectActiveIconDrawable = function (){};


/**
 * 获取 disabled 选中状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ToggleButton.prototype.getSelectDisabledIconDrawable = function (){};

/**
 * 获取正常选中状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.ToggleButton.prototype.getSelectTextColor = function (){};

/**
 * 获取 hover 选中状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.ToggleButton.prototype.getSelectHoverTextColor = function (){};

/**
 * 获取 active 选中状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.ToggleButton.prototype.getSelectActiveTextColor = function (){};

/**
 * 获取 active 选中状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.ToggleButton.prototype.getSelectDisabledTextColor = function (){};


/**
 * 获取正常选中状态下边框
 * @return {ht.ui.border.Border}
 */
ht.ui.ToggleButton.prototype.getSelectBorder = function (){};

/**
 * 获取 hover 选中状态下边框
 * @return {ht.ui.border.Border} 
 */
ht.ui.ToggleButton.prototype.getSelectHoverBorder = function (){};

/**
 * 获取 active 选中状态下边框
 * @return {ht.ui.border.Border} 
 */
ht.ui.ToggleButton.prototype.getSelectActiveBorder = function (){};

/**
 * 获取 active 选中状态下边框
 * @return {ht.ui.border.Border}
 */
ht.ui.ToggleButton.prototype.getSelectDisabledBorder = function (){};


/**
 * 获取正常选中状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ToggleButton#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectBackground = function (){};

/**
 * 获取 hover 选中状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ToggleButton#getSelectHoverBackgroundDrawable getSelectHoverBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectHoverBackground = function (){};

/**
 * 获取 active 选中状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ToggleButton#getSelectActiveBackgroundDrawable getSelectActiveBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectActiveBackground = function (){};


/**
 * 获取 disabled 选中状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ToggleButton#getSelectDisabledBackgroundDrawable getSelectDisabledBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.getSelectDisabledBackground = function (){};

/**
 * 获取正常选中状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ToggleButton.prototype.getSelectBackgroundDrawable = function (){};


/**
 * 获取 hover 选中状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ToggleButton.prototype.getSelectHoverBackgroundDrawable = function (){};

/**
 * 获取 active 选中状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ToggleButton.prototype.getSelectActiveBackgroundDrawable = function (){};


/**
 * 获取 disabled 选中状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ToggleButton.prototype.getSelectDisabledBackgroundDrawable = function (){};

/**
 * 获取单选控制器
 * @return {ht.ui.Radios} 单选控制器
 */
ht.ui.ToggleButton.prototype.getRadios = function (){};

/**
 * 获取组件在表单中的名称
 * @return {String} 名称
 */
ht.ui.ToggleButton.prototype.getFormDataName = function (){};

/**
 * 获取组件在表单中的值
 * @return {Object} 值
 */
ht.ui.ToggleButton.prototype.getFormDataValue = function (){};

/**
 * 获取影响表单值的属性映射表；这些属性发生变化会使表单工具重新从此组件取值
 * @return {Object} 属性映射表
 */
ht.ui.ToggleButton.prototype.getFormDataProperties = function (){};

/**
 * 判断组件是否处于选中状态
 * @return {Boolean} 是否选中
 */
ht.ui.ToggleButton.prototype.isSelected = function (){};


/**
 * 设置组件选中状态
 * @param {Boolean} selected 是否选中
 */
ht.ui.ToggleButton.prototype.setSelected = function (selected){};

/**
 * 设置正常选中状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectIconDrawable setSelectIconDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectIcon = function (icon){};

/**
 * 设置 hover 选中状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectHoverIconDrawable setSelectHoverIconDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectHoverIcon = function (icon){};

/**
 * 设置 active 选中状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectActiveIconDrawable setSelectActiveIconDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectActiveIcon = function (icon){};


/**
 * 设置 disabled 选中状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectDisabledIconDrawable setSelectDisabledIconDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectDisabledIcon = function (icon){};

/**
 * 设置正常选中状态下图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ToggleButton.prototype.setSelectIconDrawable = function (drawable){};

/**
 * 设置 hover 选中状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ToggleButton.prototype.setSelectHoverIconDrawable = function (drawable){};

/**
 * 设置 active 选中状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ToggleButton.prototype.setSelectActiveIconDrawable = function (drawable){};


/**
 * 设置 disabled 选中状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ToggleButton.prototype.setSelectDisabledIconDrawable = function (drawable){};

/**
 * 设置正常选中状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.ToggleButton.prototype.setSelectTextColor = function (color){};

/**
 * 设置 hover 选中状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.ToggleButton.prototype.setSelectHoverTextColor = function (color){};

/**
 * 设置 active 选中状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.ToggleButton.prototype.setSelectActiveTextColor = function (color){};


/**
 * 设置 disabled 选中状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.ToggleButton.prototype.setSelectDisabledTextColor = function (color){};


/**
 * 设置正常选中状态下边框
 * @param {ht.ui.border.Border} border
 */
ht.ui.ToggleButton.prototype.setSelectBorder = function (border){};

/**
 * 设置 hover 选中状态下边框
 * @param {ht.ui.border.Border} border
 */
ht.ui.ToggleButton.prototype.setSelectHoverBorder = function (border){};

/**
 * 设置 active 选中状态下边框
 * @param {ht.ui.border.Border} border
 */
ht.ui.ToggleButton.prototype.setSelectActiveBorder = function (border){};


/**
 * 设置 disabled 选中状态下边框
 * @param {ht.ui.border.Border} border
 */
ht.ui.ToggleButton.prototype.setSelectDisabledBorder = function (border){};

/**
 * 设置正常选中状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectBackground = function (background){};

/**
 * 设置 hover 选中状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectHoverBackgroundDrawable setSelectHoverBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectHoverBackground = function (background){};


/**
 * 设置 active 选中状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectActiveBackgroundDrawable setSelectActiveBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectActiveBackground = function (background){};


/**
 * 设置 disabled 选中状态下的背景
 * @param {Object} background 背景；可以是颜色或者图片等
 * @see {@link ht.ui.ToggleButton#setSelectDisabledBackgroundDrawable setSelectDisabledBackgroundDrawable}
 */
ht.ui.ToggleButton.prototype.setSelectDisabledBackground = function (background){};


/**
 * 设置正常选中状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ToggleButton.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 选中状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ToggleButton.prototype.setSelectHoverBackgroundDrawable = function (drawable){};

/**
 * 设置 active 选中状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ToggleButton.prototype.setSelectActiveBackgroundDrawable = function (drawable){};


/**
 * 设置 disabled 选中状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ToggleButton.prototype.setSelectDisabledBackgroundDrawable = function (drawable){};


/**
 * 设置单选控制器
 * @param {ht.ui.Radios} radios 单选控制器
 */
ht.ui.ToggleButton.prototype.setRadios = function (radios){};

/**
 * 设置组件在表单中的名称
 * @param {String} name 名称
 */
ht.ui.ToggleButton.prototype.setFormDataName = function (name){};




















/**
 * 此类用于配合单选按钮实现选中互斥功能
 * @constructor
 * @example
 * var radioButton1, radioButton2, radioButton3;
 * 
 * // init radioButton1, radioButton2, radioButton3
 * 
 * var radios = new ht.ui.Radios();
 * radios.add(radioButton1);
 * radios.add(radioButton2);
 * radios.add(radioButton3);
 * radios.addPropertyChangeListener(function(e) {
 * 		if (e.property === 'selectedButton') {
 *   		console.log(radios.getSelectedButton());
 * 		}
 * });
 */
ht.ui.Radios = function() {};

/**
 * 派发属性变化事件
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.Radios.prototype.firePropertyChange = function(property, oldValue, newValue, compareFunc) {}

/**
 * 派发属性变化事件，{@link ht.ui.Radios#firePropertyChange firePropertyChange} 的缩写
 * @param  {String} property    属性名
 * @param  {Object} oldValue    属性变化之前的值
 * @param  {Object} newValue    属性变化之后的值
 * @param  {function} [compareFunc] 比较函数，用于比较新值和旧值是否一致，如果一致则不会派发事件
 * @return {Boolean}             事件是否派发成功
 */
ht.ui.Radios.prototype.fp = function(property, oldValue, newValue, compareFunc) {}

/**
 * 增加属性事件变化监听函数
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.Radios.prototype.addPropertyChangeListener = function(listener, scope, ahead) {}

/**
 * 增加属性事件变化监听函数，{@link ht.ui.Radios#addPropertyChangeListener addPropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.ui.Radios.prototype.mp = function(listener, scope, ahead) {}

/**
 * 删除属性事件变化监听器
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.Radios.prototype.removePropertyChangeListener = function(listener, scope) {}

/**
 * 删除属性事件变化监听器，{@link ht.ui.Radios#removePropertyChangeListener removePropertyChangeListener} 的缩写
 * @param {function} listener 监听器函数
 * @param {Object} [scope]    函数域
 */
ht.ui.Radios.prototype.ump = function(listener, scope) {}


/**
 * 增加按钮
 * @param {ht.ui.ToggleButton} button 按钮
 */
ht.ui.Radios.prototype.add = function(button) {}


/**
 * 移除按钮
 * @param {ht.ui.ToggleButton} button 按钮
 */
ht.ui.Radios.prototype.remove = function(button) {}

/**
 * 清除内部所有的按钮
 */
ht.ui.Radios.prototype.clear = function() {}

/**
 * 获取选中的按钮
 * @return {ht.ui.ToggleButton} 选中的按钮
 */
ht.ui.Radios.prototype.getSelectedButton = function() {}


/**
 * 获取所有被管理的按钮
 * @return {Array} 按钮数组
 */
ht.ui.Radios.prototype.getButtons = function() {}

/**
 * 单选框是否可置空；如果为 false，表示必须选中一个单选框
 * @return {Boolean} 
 */
ht.ui.Radios.prototype.isEmptiable = function() { }

/**
 * 设置单选框是否可置空；如果为 false，表示必须选中一个单选框
 * @param {Boolean} emptiable 是否可置空
 */
ht.ui.Radios.prototype.setEmptiable = function(emptiable) { }











/**
 * 复选框组件<br><br>
 * 样式属性(不含从父类继承)：value
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ToggleButton}
 */
ht.ui.CheckBox = function(properties) {};

/**
 * 获取组件值；此值可以放置业务属性
 * @return {Object} 组件值
 */
ht.ui.CheckBox.prototype.getValue = function (){};

/**
 * 设置组件值
 * @param {Object} value 组件值；此值可以放置业务属性
 */
ht.ui.CheckBox.prototype.setValue = function (value){};
/**
 * 单选框组件；如果要实现一组单选按钮选中状态互斥的功能，请配合 {@link ht.ui.Radios Radios} 一起使用 <br><br>
 * 样式属性(不含从父类继承)：value
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ToggleButton}
 */
ht.ui.RadioButton = function(properties) {};

/**
 * 获取组件值；此值可以放置业务属性
 * @return {Object} 组件值
 */
ht.ui.RadioButton.prototype.getValue = function (){};

/**
 * 设置组件值
 * @param {Object} value 组件值；此值可以放置业务属性
 */
ht.ui.RadioButton.prototype.setValue = function (value){};
/**
 * 标签组件
 * @param {String|Object} [text] 标签文本内容或者属性配置对象
 * @constructor
 * @extends {ht.ui.ButtonBase}
 */
ht.ui.Label = function(text) {};
/**
 * 右键菜单组件<br><br>
 * 
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>beforeShow</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'beforeShow', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: contextMenu // 事件源
 * }
 * </pre>
 * </td>
 * <td>菜单显示之前派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>afterShow</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'afterShow', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: contextMenu // 事件源
 * }
 * </pre>
 * </td>
 * <td>菜单显示之后派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beforeHide</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'beforeHide', // 事件类型
 *      item: item, // 隐藏时点击的菜单项
 *      source: contextMenu // 事件源
 * }
 * </pre>
 * </td>
 * <td>菜单隐藏之前派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>afterHide</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'afterHide', // 事件类型
 *      item: item, // 隐藏时点击的菜单项
 *      source: contextMenu // 事件源
 * }
 * </pre>
 * </td>
 * <td>菜单隐藏之后派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>action</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'action', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      item: item, // 点击的菜单项
 *      source: contextMenu // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击菜单项时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(全部)：
 *   padding, border, background, backgroundDrawable, zIndex,
 *   rowHeight, gapLeft, gapRight, hoverRowBackground, hoverRowBackgroundDrawable,
 *   bottomMargin, separatorColor, separatorSize, prefixWidth, prefixGapRight, iconWidth,
 *   iconGapRight, labelFont, labelColor, disabledLabelColor, hoverLabelColor, labelGapRight, labelLeftAligned,
 *   suffixGapRight,
 *   indicatorIcon, indicatorWidth, indicatorColor, hoverIndicatorColor,
 *   radioOnIcon, radioOffIcon, checkIcon, uncheckIcon,
 *   radioOnIconDrawable, radioOffIconDrawable, checkIconDrawable, uncheckIconDrawable, 
 *   scrollUpIndicator, scrollUpIndicatorDrawable, scrollDownIndicator, scrollDownIndicatorDrawable, 
 *   disabledScrollUpIndicator, disabledScrollUpIndicatorDrawable, disabledScrollDownIndicator, disabledScrollDownIndicatorDrawable, scrollIndicatorHeight
 *   boxShadow, borderRadius
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 * @example
 * contextMenu = new ht.ui.ContextMenu();
 * contextMenu.setItems([
 *     {
 *         label: 'Edit',
 *         suffix: 'Custom Suffix', // 在 Label 右侧显示一段文字
 *         items: [
 *             {
 *                 label: 'Edit in this window'
 *             },
 *             {
 *                label: 'Edit in new window'
 *             }
 *         ]
 *     },
 *     {
 *         label: 'Cut',
 *         disabled: true
 *     },
 *     {
 *         label: 'Copy',
 *         icon: 'res/copy.png',
 *         disabled: function(item) { // disabled 属性可以绑定函数
 *         		return false;
 *         }
 *     },
 *     {
 *         label: 'Paste'
 *     },
 *     {
 *         label: 'Delete'
 *     },
 *     {
 *         type: '-', // 分割线
 *     },
 *     {
 *         label: 'Quit',
 *         items: [
 *             {
 *                 label: 'Normal',
 *                 type: 'radio',
 *                 groupId: 1
 *             },
 *             {
 *                label: 'Force',
 *                 type: 'radio',
 *                 groupId: 1
 *             }
 *         ]
 *     }
 * ]);
 * contextMenu.addToDOM(document.body);
 */
ht.ui.ContextMenu = function(properties) {};

/**
 * 获取菜单配置 json
 * @return {Array} json
 */
ht.ui.ContextMenu.prototype.getItems = function() {};

/**
 * 获取菜单项行高
 * @param {Object} item 菜单项
 * @return {Number} 高度
 */
ht.ui.ContextMenu.prototype.getRowHeight = function(item) {};

/**
 * 判断菜单是否可见
 * @return {Boolean} 是否可见
 */
ht.ui.ContextMenu.prototype.isVisible = function() {};

/**
 * 获取可见过滤器函数；此函数用于过滤菜单项是否可见
 * @return {Function} 过滤器函数
 */
ht.ui.ContextMenu.prototype.getVisibleFunc = function() {};

/**
 * 获取菜单内容到左侧边缘的间距；注意与 padding 的区别：padding 会影响 hover 背景宽度，而 gapLeft 不会
 * @return {Number} 间距值
 */
ht.ui.ContextMenu.prototype.getGapLeft = function() {};

/**
 * 获取菜单内容到右侧边缘的间距；注意与 padding 的区别：padding 会影响 hover 背景宽度，而 gapRight 不会
 * @return {Number} 间距值
 */
ht.ui.ContextMenu.prototype.getGapRight = function() {};

/**
 * 获取 hover 状态下的菜单项背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Button#getHoverRowBackgroundDrawable getHoverRowBackgroundDrawable}
 */
ht.ui.ContextMenu.prototype.getHoverRowBackground = function() {};

/**
 * 获取 hover 状态下的菜单项背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ContextMenu.prototype.getHoverRowBackgroundDrawable = function() {};

/**
 * 获取处于 hover 状态的菜单项
 * @return {Object} 菜单项
 */
ht.ui.ContextMenu.prototype.getHoverMenuItem = function() {};

/**
 * 获取菜单调用者
 * @return {ht.ui.View} 菜单调用者
 */
ht.ui.ContextMenu.prototype.getInvoker = function() {};

/**
 * 获取菜单底部到页面底部的最小距离
 * @return {Number} 距离值
 */
ht.ui.ContextMenu.prototype.getBottomMargin = function() {};

/**
 * 判断是否启用快捷键
 * @return {Boolean} 是否启用快捷键
 */
ht.ui.ContextMenu.prototype.isShortcutEnabled = function() {};

/**
 * 获取分割线颜色
 * @return {color} 颜色值
 */
ht.ui.ContextMenu.prototype.getSeparatorColor = function() {};

/**
 * 获取分割线高度
 * @return {Number} 高度值
 */
ht.ui.ContextMenu.prototype.getSeparatorSize = function() {};

/**
 * 获取菜单项前缀的宽度；前缀用来显示复选框、单选框
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getPrefixWidth = function() {};

/**
 * 获取菜单项前缀右侧的预留空白区域宽度
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getPrefixGapRight = function() {};

/**
 * 获取菜单项中图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getIconWidth = function() {};

/**
 * 获取菜单项中图标右侧的预留空白区域的宽度
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getIconGapRight = function() {};

/**
 * 获取菜单项中文字字体
 * @return {String} 字体
 */
ht.ui.ContextMenu.prototype.getLabelFont = function() {};

/**
 * 获取菜单项中文字颜色
 * @return {color} 颜色
 */
ht.ui.ContextMenu.prototype.getLabelColor = function() {};

/**
 * 获取被禁用菜单项的文字颜色
 * @return {color} 颜色
 */
ht.ui.ContextMenu.prototype.getDisabledColor = function() {};

/**
 * 获取 hover 状态菜单项的文字颜色
 * @return {color} 颜色
 */
ht.ui.ContextMenu.prototype.getHoverLabelColor = function() {};

/**
 * 获取菜单项中文字右侧的预留空白区域的宽度
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getLabelGapRight = function() {};

/**
 * 菜单项中文字是否左侧对齐；如果为 true，即使菜单项没有图标，文字也会跳过图标区域，与其它菜单项的文字左对齐
 * @return {Boolean} 文字左侧是否对齐
 */
ht.ui.ContextMenu.prototype.isLabelLeftAligned = function() {};

/**
 * 获取菜单项后缀右侧预留空白区域的宽度；后缀用来在 Label 右侧显示一段文字，如快捷键提示
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getSuffixGapRight = function() {};

/**
 * 获取子菜单指示符图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getIndicatorIconDrawable getIndicatorIconDrawable}
 */
ht.ui.ContextMenu.prototype.getIndicatorIcon = function() {};

/**
 * 获取子菜单指示符图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ContextMenu.prototype.getIndicatorIconDrawable = function() {};

/**
 * 获取子菜单指示符图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.ContextMenu.prototype.getIndicatorWidth = function() {};

/**
 * 获取子菜单指示符图标的高度
 * @return {Number} 高度值
 */
ht.ui.ContextMenu.prototype.getIndicatorHeight = function() {};

/**
 * 获取子菜单指示符图标的颜色
 * @return {color} 颜色值
 */
ht.ui.ContextMenu.prototype.getIndicatorColor = function() {};

/**
 * 获取 hover 状态下子菜单指示符图标的颜色
 * @return {color} 颜色值
 */
ht.ui.ContextMenu.prototype.getHoverIndicatorColor = function() {};

/**
 * 获取选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getRadioOnIconDrawable getRadioOnIconDrawable}
 */
ht.ui.ContextMenu.prototype.getRadioOnIcon = function() {};

/**
 * 获取选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ContextMenu.prototype.getRadioOnIconDrawable = function() {};

/**
 * 获取非选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getRadioOffIconDrawable getRadioOffIconDrawable}
 */
ht.ui.ContextMenu.prototype.getRadioOffIcon = function() {};

/**
 * 获取非选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ContextMenu.prototype.getRadioOffIconDrawable = function() {};


/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.ContextMenu.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ContextMenu.prototype.getCheckIconDrawable = function() {};


/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.ContextMenu.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ContextMenu.prototype.getUncheckIconDrawable = function() {};

/**
 * 根据文本内容查找菜单项
 * @param {String} label 文本内容
 * @return {Object} 菜单项
 */
ht.ui.ContextMenu.prototype.findItemByLabel = function(label) {};

/**
 * 选中一个菜单项(针对单选或多选菜单项)
 * @param {Object} item 菜单项
 */
ht.ui.ContextMenu.prototype.selectItem = function(item) {};

/**
 * 绘制菜单项的背景
 * @param {ht.ui.drawable.Drawable} drawable 绘制对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 * @param {HTMLCanvasElement} canvas 画布
 */
ht.ui.ContextMenu.prototype.drawRowBackground = function(drawable, x, y, width, height, item, canvas) {};

/**
 * 绘制分隔条
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {color} color 颜色值
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 */
ht.ui.ContextMenu.prototype.drawSeparator = function(g, color, x, y, width, height, item) {};

/**
 * 绘制菜单项的前缀
 * @param {ht.ui.drawable.Drawable} drawable 绘制对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 * @param {HTMLCanvasElement} canvas 画布
 */
ht.ui.ContextMenu.prototype.drawPrefix = function(drawable, x, y, width, height, item, canvas) {};

/**
 * 绘制菜单项的后缀文字
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} text 后缀文本
 * @param {String} font 字体
 * @param {color} color 颜色
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {String} align 文本的水平对齐方式
 * @param {String} vAlign 文本的垂直对齐方式
 * @param {Object} item 菜单项
 */
ht.ui.ContextMenu.prototype.drawSuffix = function(g, text, font, color, x, y, width, height, align, vAlign, item) {};

/**
 * 绘制菜单项的图标
 * @param {ht.ui.drawable.Drawable} drawable 绘制对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 * @param {HTMLCanvasElement} canvas 画布
 */
ht.ui.ContextMenu.prototype.drawIcon = function(drawable, x, y, width, height, item, canvas) {};

/**
 * 绘制菜单项的文本
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} label 文本
 * @param {String} font 字体
 * @param {color} color 颜色
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {String} align 文本的水平对齐方式
 * @param {String} vAlign 文本的垂直对齐方式
 * @param {Object} item 菜单项
 */
ht.ui.ContextMenu.prototype.drawLabel = function(g, label, font, color, x, y, width, height, align, vAlign, item) {};

/**
 * 绘制子菜单指示符图标
 * @param {ht.ui.drawable.Drawable} drawable 绘制对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 * @param {HTMLCanvasElement} canvas 画布
 */
ht.ui.ContextMenu.prototype.drawIndicatorIcon = function(drawable, x, y, width, height, item, canvas) {};

/**
 * 显示菜单
 * @param {Number} x 菜单 x 坐标
 * @param {Number} y 菜单 y 坐标
 */
ht.ui.ContextMenu.prototype.show = function(x, y) {};

/**
 * 隐藏菜单
 */
ht.ui.ContextMenu.prototype.hide = function() {};


/**
 * 彻底销毁菜单，包括删除 DOM 对象、注销全局键盘事件监听、全局鼠标事件监听等
 */
ht.ui.ContextMenu.prototype.dispose = function() {};


/**
 * 设置菜单配置 json
 * @param {Array} items 配置json
 */
ht.ui.ContextMenu.prototype.setItems = function(items) {};

/**
 * 设置菜单项行高
 * @param {Number} height 行高
 */
ht.ui.ContextMenu.prototype.setRowHeight = function(height) {};

/**
 * 设置可见过滤器函数；此函数用于过滤菜单项是否可见
 * @param {Function} visibleFunc 过滤器函数
 */
ht.ui.ContextMenu.prototype.setVisibleFunc = function(visibleFunc) {};

/**
 * 设置菜单内容到左侧边缘的间距；注意与 padding 的区别：padding 会影响 hover 背景宽度，而 gapLeft 不会
 * @param {Number} gap 间距值
 */
ht.ui.ContextMenu.prototype.setGapLeft = function(gap) {};

/**
 * 设置菜单内容到右侧边缘的间距；注意与 padding 的区别：padding 会影响 hover 背景宽度，而 gapRight 不会
 * @param {Number} gap 间距值
 */
ht.ui.ContextMenu.prototype.setGapRight = function(gap) {};

/**
 * 设置 hover 状态下的菜单项背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.Button#setHoverRowBackgroundDrawable setHoverRowBackgroundDrawable}
 */
ht.ui.ContextMenu.prototype.setHoverRowBackground = function(background) {};

/**
 * 设置 hover 状态下的菜单项背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ContextMenu.prototype.setHoverRowBackgroundDrawable = function(drawable) {};

/**
 * 设置菜单底部到页面底部的最小距离
 * @param {Number} margin 距离值
 */
ht.ui.ContextMenu.prototype.setBottomMargin = function(margin) {};

/**
 * 设置是否启用快捷键
 * @param {Boolean} enabled 是否启用快捷键
 */
ht.ui.ContextMenu.prototype.setShortcutEnabled = function(enabled) {};

/**
 * 设置分割线颜色
 * @param {color} color 颜色值
 */
ht.ui.ContextMenu.prototype.setSeparatorColor = function(color) {};

/**
 * 设置分割线高度
 * @param {Number} size 高度值
 */
ht.ui.ContextMenu.prototype.setSeparatorSize = function(size) {};

/**
 * 设置菜单项前缀的宽度；前缀用来显示复选框、单选框
 * @param {Number} width 宽度值
 */
ht.ui.ContextMenu.prototype.setPrefixWidth = function(width) {};

/**
 * 设置菜单项前缀右侧的预留空白区域宽度
 * @param {Number} gap 宽度值
 */
ht.ui.ContextMenu.prototype.setPrefixGapRight = function(gap) {};

/**
 * 设置菜单项中图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.ContextMenu.prototype.setIconWidth = function(width) {};

/**
 * 设置菜单项中图标右侧的预留空白区域的宽度
 * @param {Number} gap 宽度值
 */
ht.ui.ContextMenu.prototype.setIconGapRight = function(gap) {};

/**
 * 设置菜单项中文字字体
 * @param {String} font 字体
 */
ht.ui.ContextMenu.prototype.setLabelFont = function(font) {};

/**
 * 设置菜单项中文字颜色
 * @param {color} color 颜色
 */
ht.ui.ContextMenu.prototype.setLabelColor = function(color) {};

/**
 * 设置被禁用菜单项的文字颜色
 * @param {color} color 颜色
 */
ht.ui.ContextMenu.prototype.setDisabledColor = function(color) {};

/**
 * 设置 hover 状态菜单项的文字颜色
 * @param {color} color 颜色
 */
ht.ui.ContextMenu.prototype.setHoverLabelColor = function(color) {};

/**
 * 设置菜单项中文字右侧的预留空白区域的宽度
 * @param {Number} gap 宽度值
 */
ht.ui.ContextMenu.prototype.setLabelGapRight = function(gap) {};

/**
 * 设置菜单项中文字是否左侧对齐；如果为 true，即使菜单项没有图标，文字也会跳过图标区域，与其它菜单项的文字左对齐
 * @param {Boolean} leftAligned 文字左侧是否对齐
 */
ht.ui.ContextMenu.prototype.setLabelLeftAligned = function(leftAligned) {};

/**
 * 设置菜单项后缀右侧预留空白区域的宽度；后缀用来在 Label 右侧显示一段文字，如快捷键提示
 * @param {Number} gap 宽度值
 */
ht.ui.ContextMenu.prototype.setSuffixGapRight = function(gap) {};

/**
 * 设置子菜单指示符图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setIndicatorIconDrawable setIndicatorIconDrawable}
 */
ht.ui.ContextMenu.prototype.setIndicatorIcon = function(icon) {};

/**
 * 设置子菜单指示符图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setIndicatorIconDrawable = function(drawable) {};

/**
 * 设置子菜单指示符图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.ContextMenu.prototype.setIndicatorWidth = function(width) {};

/**
 * 设置子菜单指示符图标的高度
 * @param {Number} height 高度值
 */
ht.ui.ContextMenu.prototype.setIndicatorHeight = function(height) {};

/**
 * 设置子菜单指示符图标的颜色
 * @param {color} color 颜色值
 */
ht.ui.ContextMenu.prototype.setIndicatorColor = function(color) {};

/**
 * 设置 hover 状态下子菜单指示符图标的颜色
 * @param {color} color 颜色值
 */
ht.ui.ContextMenu.prototype.setHoverIndicatorColor = function(color) {};

/**
 * 设置选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setRadioOnIconDrawable setRadioOnIconDrawable}
 */
ht.ui.ContextMenu.prototype.setRadioOnIcon = function(icon) {};

/**
 * 设置选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setRadioOnIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setRadioOffIconDrawable setRadioOffIconDrawable}
 */
ht.ui.ContextMenu.prototype.setRadioOffIcon = function(icon) {};

/**
 * 设置非选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setRadioOffIconDrawable = function(drawable) {};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.ContextMenu.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.ContextMenu.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setUncheckIconDrawable = function(drawable) {};

/**
 * 设置向上滚动指示图标
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setScrollUpIndicatorDrawable setScrollUpIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.setScrollUpIndicator = function() {icon};

/**
 * 获取向上滚动指示图标
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getScrollUpIndicatorDrawable getScrollUpIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.getScrollUpIndicator = function() {};


/**
 * 设置向上滚动指示图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setScrollUpIndicatorDrawable = function(drawable) {};

/**
 * 获取向上滚动指示图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.getScrollUpIndicatorDrawable = function() {};


/**
 * 设置向下滚动指示图标
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setScrollDownIndicatorDrawable setScrollDownIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.setScrollDownIndicator = function() {icon};

/**
 * 获取向下滚动指示图标
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getScrollDownIndicatorDrawable getScrollDownIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.getScrollDownIndicator = function() {};


/**
 * 设置向下滚动指示图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setScrollDownIndicatorDrawable = function(drawable) {};

/**
 * 获取向下滚动指示图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.getScrollDownIndicatorDrawable = function() {};





/**
 * 设置不可用状态的向上滚动指示图标
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setDisabledScrollUpIndicatorDrawable setDisabledScrollUpIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.setDisabledScrollUpIndicator = function() {icon};

/**
 * 获取不可用状态的向上滚动指示图标
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getDisabledScrollUpIndicatorDrawable getDisabledScrollUpIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.getDisabledScrollUpIndicator = function() {};


/**
 * 设置不可用状态的向上滚动指示图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setDisabledScrollUpIndicatorDrawable = function(drawable) {};

/**
 * 获取不可用状态的向上滚动指示图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.getDisabledScrollUpIndicatorDrawable = function() {};


/**
 * 设置不可用状态的向下滚动指示图标
 * @param {Object} icon 图标
 * @see {@link ht.ui.ContextMenu#setDisabledScrollDownIndicatorDrawable setDisabledScrollDownIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.setDisabledScrollDownIndicator = function() {icon};

/**
 * 获取不可用状态的向下滚动指示图标
 * @return {Object} 图标
 * @see {@link ht.ui.ContextMenu#getDisabledScrollDownIndicatorDrawable getDisabledScrollDownIndicatorDrawable}
 */
ht.ui.ContextMenu.prototype.getDisabledScrollDownIndicator = function() {};


/**
 * 设置不可用状态的向下滚动指示图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.setDisabledScrollDownIndicatorDrawable = function(drawable) {};

/**
 * 获取不可用状态的向下滚动指示图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ContextMenu.prototype.getDisabledScrollDownIndicatorDrawable = function() {};


/**
 * 设置滚动指示条的高度
 * @param {Number} height 高度值
 */
ht.ui.ContextMenu.prototype.setScrollIndicatorHeight = function(height) {};

/**
 * 获取滚动指示条的高度
 * @return {Number} 高度值
 */
ht.ui.ContextMenu.prototype.getScrollIndicatorHeight = function() {};

/**
 * 菜单组件<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>action</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'action', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      item: item, // 点击的菜单项
 * }
 * </pre>
 * </td>
 * <td>点击菜单项时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：gap, labelFont, iconWidth, iconHeight, iconGapRight,
 *       labelColor, hoverLabelColor, activeLabelColor,
 *       hoverItemBackground, hoverItemBackgroundDrawable, activeItemBackground, activeItemBackgroundDrawable
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.Menu = function() {properties};

/**
 * 获取菜单配置 json
 * @return {Array} json
 */
ht.ui.Menu.prototype.getItems = function() {};


/**
 * 获取菜单项左右两侧预留空白区域的宽度
 * @return {Number} 宽度值
 */
ht.ui.Menu.prototype.getGap = function() {};

/**
 * 获取菜单项中图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.Menu.prototype.getIconWidth = function() {};

/**
 * 获取菜单项中图标的高度
 * @return {Number} 高度值
 */
ht.ui.Menu.prototype.getIconHeight = function() {};

/**
 * 获取菜单项中图标右侧的预留空白区域的宽度
 * @return {Number} 宽度值
 */
ht.ui.Menu.prototype.getIconGapRight = function() {};

/**
 * 获取菜单项文字字体
 * @return {String} 字体
 */
ht.ui.Menu.prototype.getLabelFont = function() {};

/**
 * 获取菜单项文字颜色
 * @return {color} 颜色
 */
ht.ui.Menu.prototype.getLabelColor = function() {};

/**
 * 获取 hover 状态菜单项的文字颜色
 * @return {color} 颜色
 */
ht.ui.Menu.prototype.getHoverLabelColor = function() {};

/**
 * 获取 active 状态菜单项的文字颜色
 * @return {color} 颜色
 */
ht.ui.Menu.prototype.getActiveLabelColor = function() {};


/**
 * 获取 hover 状态下的菜单项背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Menu#getHoverItemBackgroundDrawable getHoverItemBackgroundDrawable}
 */
ht.ui.Menu.prototype.getHoverItemBackground = function() {};

/**
 * 获取 hover 状态下的菜单项背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Menu.prototype.getHoverItemBackgroundDrawable = function() {};


/**
 * 获取 active 状态下的菜单项背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Menu#getActiveItemBackgroundDrawable getActiveItemBackgroundDrawable}
 */
ht.ui.Menu.prototype.getActiveItemBackground = function() {};

/**
 * 获取 active 状态下的菜单项背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Menu.prototype.getActiveItemBackgroundDrawable = function() {};

/**
 * 获取弹出菜单对象
 * @return {ht.ui.ContextMenu} 弹出菜单
 */
ht.ui.Menu.prototype.getDropDownMenu = function() {};

/**
 * 绘制菜单项的背景
 * @param {ht.ui.drawable.Drawable} drawable 绘制对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 */
ht.ui.Menu.prototype.drawItemBackground = function(drawable, x, y, width, height, item) {};


/**
 * 绘制菜单项的文本
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} label 文本
 * @param {String} font 字体
 * @param {color} color 颜色
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Object} item 菜单项
 */
ht.ui.Menu.prototype.drawLabel = function(g, label, font, color, x, y, width, height, item) {};


/**
 * 点击菜单项时调用，内部调用 action 回调并派发 action 事件
 * @param {Object} item 菜单项
 * @param {Event} e 鼠标事件
 */
ht.ui.Menu.prototype.clickItem = function(item, e) {};

/**
 * 显示指定菜单项的弹出菜单
 * @param {Object} item 菜单项
 */
ht.ui.Menu.prototype.show = function(item) {};

/**
 * 隐藏弹出菜单
 */
ht.ui.Menu.prototype.hide = function() {};

/**
 * 弹出菜单是否在显示
 * @return {Boolean} 是否显示
 */
ht.ui.Menu.prototype.isShowing = function() {};

/**
 * 删除一个菜单项
 * @param {String} path 菜单项的路径
 * @example
 * menu.deleteItem('File/New'); // 删除 File 菜单下的 New 子菜单项
 * menu.deeteItem('File/`/New`') // 如果菜单项文字中有 / 特殊字符，用 ` 将其包围即可
 */
ht.ui.Menu.prototype.deleteItem = function(path) {};

/**
 * 查找菜单项
 * @param {String} path 菜单项的路径
 * @return {Object} 菜单项
 */
ht.ui.Menu.prototype.findItem = function(path) {};

/**
 * 增加菜单项
 * @param {String} path 菜单项的路径
 * @param {Object} [properties] 菜单项属性
 * @example
 * menu.addItem('File/New', { icon: 'test.png' });
 */
ht.ui.Menu.prototype.addItem = function(path, properties) {};


/**
 * 遍历所有的菜单项，并返回第一个与参数 label 匹配的菜单项
 * @param {String} label 菜单项文本
 * @return {Object} 菜单项
 */
ht.ui.Menu.prototype.findItemByLabel = function(label) {};

/**
 * 遍历所有的菜单项，并返回第一个与参数 id 匹配的菜单项
 * @param {Object} id 菜单项 id
 * @return {Object} 菜单项
 */
ht.ui.Menu.prototype.findItemById = function(id) {};

/**
 * 选中一个菜单项(针对单选或多选菜单项)
 * @param {Object} item 菜单项
 */
ht.ui.Menu.prototype.selectItem = function(item) {};

/**
 * 根据 id 选中一个菜单项(针对单选或多选菜单项)
 * @param {Object} id 菜单项 id
 */
ht.ui.Menu.prototype.selectItemById = function(id) {};

/**
 * 在菜单项后面增加一个分隔条
 * @param {String} path 菜单项路径
 */
ht.ui.Menu.prototype.addSeparator = function(path) {};

/**
 * 彻底销毁菜单，包括删除 DOM 对象、注销全局键盘事件监听、全局鼠标事件监听等
 */
ht.ui.Menu.prototype.dispose = function() {};

/**
 * 设置菜单配置 json
 * @param {Array} items 配置json
 */
ht.ui.Menu.prototype.setItems = function(items) {};


/**
 * 设置菜单项左右两侧预留空白区域的宽度
 * @param {Number} gap 宽度值
 */
ht.ui.Menu.prototype.setGap = function(gap) {};


/**
 * 设置菜单项中图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.Menu.prototype.setIconWidth = function(width) {};


/**
 * 设置菜单项中图标的高度
 * @param {Number} height 高度值
 */
ht.ui.Menu.prototype.setIconHeight = function(height) {};

/**
 * 设置菜单项中图标右侧的预留空白区域的宽度
 * @param {Number} gap 宽度值
 */
ht.ui.Menu.prototype.setIconGapRight = function(gap) {};


/**
 * 设置菜单项文字字体
 * @param {String} font 字体
 */
ht.ui.Menu.prototype.setLabelFont = function(font) {};

/**
 * 获取菜单项文字颜色
 * @param {color} color 颜色
 */
ht.ui.Menu.prototype.setLabelColor = function(color) {};

/**
 * 设置 hover 状态菜单项的文字颜色
 * @param {color} color 颜色
 */
ht.ui.Menu.prototype.setHoverLabelColor = function(color) {};

/**
 * 设置 active 状态菜单项的文字颜色
 * @param {color} color 颜色
 */
ht.ui.Menu.prototype.setActiveLabelColor = function(color) {};


/**
 * 设置 hover 状态下的菜单项背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.Menu#setHoverItemBackgroundDrawable setHoverItemBackgroundDrawable}
 */
ht.ui.Menu.prototype.setHoverItemBackground = function(background) {};

/**
 * 设置 hover 状态下的菜单项背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Menu.prototype.setHoverItemBackgroundDrawable = function(drawable) {};


/**
 * 设置 active 状态下的菜单项背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.Menu#setActiveItemBackgroundDrawable setActiveItemBackgroundDrawable}
 */
ht.ui.Menu.prototype.setActiveItemBackground = function(background) {};

/**
 * 设置 active 状态下的菜单项背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Menu.prototype.setActiveItemBackgroundDrawable = function(drawable) {};







/**
 * 文本框组件<br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickIcon</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'clickIcon', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: textField // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击右侧小图标时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：icon, iconDrawable, hoverIcon, hoverIconDrawable, activeIcon, activeIconDrawable, iconWidth, iconHeight, iconTextGap, iconPosition,
 *       color, font, maskRe, placeholder, readOnly, maxLength, instant, type
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TextField = function(properties) {};

/**
 * 获取正常状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TextField#getIconDrawable getIconDrawable}
 */
ht.ui.TextField.prototype.getIcon = function (){};

/**
 * 获取 hover 状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TextField#getHoverIconDrawable getHoverIconDrawable}
 */
ht.ui.TextField.prototype.getHoverIcon = function (){};

/**
 * 获取 active 状态下的图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TextField#getActiveIconDrawable getActiveIconDrawable}
 */
ht.ui.TextField.prototype.getActiveIcon = function (){};

/**
 * 获取正常状态下图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TextField.prototype.getIconDrawable = function (){};

/**
 * 获取 hover 状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TextField.prototype.getHoverIconDrawable = function (){};

/**
 * 获取 active 状态下的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TextField.prototype.getActiveIconDrawable = function (){};

/**
 * 获取图标的 Drawable 对象；此函数根据当前按钮的状态(normal、hover、active) 返回相应的 Drawable，如：hover 状态下返回 getHoverIconDrawable()
 * @param {String} [state] 状态，如果未指定，使用 textField.getIconState()
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TextField.prototype.getCurrentIconDrawable = function (state){};

/**
 * 获取图标宽度
 * @return {Number} 宽度值
 */
ht.ui.TextField.prototype.getIconWidth = function (){};

/**
 * 获取图标高度
 * @return {Number} 高度值
 */
ht.ui.TextField.prototype.getIconHeight = function (){};


/**
 * 获取图标和文字内容之间的距离
 * @return {Number} 距离值
 */
ht.ui.TextField.prototype.getIconTextGap = function (){};

/**
 * 获取图标的位置
 * @return {String} 图标位置，值可能为 'left'|'right'
 */
ht.ui.TextField.prototype.getIconPosition = function (){};

/**
 * 获取文字颜色
 * @return {color} 文字颜色
 */
ht.ui.TextField.prototype.getColor = function (){};


/**
 * 获取文字字体
 * @return {String} 文字字体
 */
ht.ui.TextField.prototype.getFont = function (){};

/**
 * 获取输入验证正则表达式
 * @return {RegExp} 正则表达式
 */
ht.ui.TextField.prototype.getMaskRe = function (){};


/**
 * 获取输入提示
 * @return {String} 输入提示
 */
ht.ui.TextField.prototype.getPlaceholder = function (){};


/**
 * 是否只读
 * @return {Boolean|String} 是否只读，值为：true|false|'entire'
 */
ht.ui.TextField.prototype.isReadOnly = function (){};


/**
 * 获取输入文本的最大长度
 * @return {Number} 最大长度
 */
ht.ui.TextField.prototype.getMaxLength = function (){};


/**
 * 是否是即时模式；在这种模式下，每输入一个字符 value 属性变化事件就会立即被派发，否则只有失去焦点或敲回车时才被派发
 * @return {Boolean} 是否是即时模式
 */
ht.ui.TextField.prototype.isInstant = function (){};


/**
 * 获取文本框类型；注意：这个属性本质是 input 标签的 type 属性的映射，因此某些特殊 type 类型依赖浏览器是否支持
 * @return {String} 文本框类型
 */
ht.ui.TextField.prototype.getType = function (){};

/**
 * 获取图标状态
 * @return {String} 图标状态，值可能为：'normal'|'hover'|'active'
 */
ht.ui.TextField.prototype.getIconState = function (){};

/**
 * 获取文本框的值
 * @return {Object} 文本框值
 */
ht.ui.TextField.prototype.getValue = function (){};

/**
 * 获取组件内部的 input 框
 * @return {HTMLInputElement} input 框
 */
ht.ui.TextField.prototype.getInput = function (){};

/**
 * 获取组件在表单中的名称
 * @return {String} 名称
 */
ht.ui.TextField.prototype.getFormDataName = function (){};

/**
 * 获取组件在表单中的值
 * @return {Object} 值
 */
ht.ui.TextField.prototype.getFormDataValue = function (){};

/**
 * 获取影响表单值的属性映射表；这些属性发生变化会使表单工具重新从此组件取值
 * @return {Object} 属性映射表
 */
ht.ui.TextField.prototype.getFormDataProperties = function (){};


/**
 * 创建并初始化 input 框
 * @return {HTMLInputElement} input 框
 */
ht.ui.TextField.prototype.initInput = function (){};

/**
 * 判断是否点击中图标
 * @param {Event} event 事件对象
 */
ht.ui.TextField.prototype.iconHitTest = function (event){};

/**
 * 绘制图标
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TextField.prototype.drawIcon = function (drawable, x, y, width, height) {};

/**
 * 设置正常状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.TextField#setIconDrawable setIconDrawable}
 */
ht.ui.TextField.prototype.setIcon = function (icon){};

/**
 * 设置 hover 状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.TextField#setHoverIconDrawable setHoverIconDrawable}
 */
ht.ui.TextField.prototype.setHoverIcon = function (icon){};

/**
 * 设置 active 状态下的图标
 * @param {Object} icon 图标；可以是颜色或者图片等
 * @see {@link ht.ui.TextField#setActiveIconDrawable setActiveIconDrawable}
 */
ht.ui.TextField.prototype.setActiveIcon = function (icon){};

/**
 * 设置正常状态下图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TextField.prototype.setIconDrawable = function (drawable){};

/**
 * 设置 hover 状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TextField.prototype.setHoverIconDrawable = function (drawable){};

/**
 * 设置 active 状态下的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TextField.prototype.setActiveIconDrawable = function (drawable){};

/**
 * 设置图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.TextField.prototype.setIconWidth = function (width){};

/**
 * 设置图标高度
 * @param {Number} height 高度值
 */
ht.ui.TextField.prototype.setIconHeight = function (height){};


/**
 * 设置图标和文字内容之间的距离
 * @param {Number} gap 距离值
 */
ht.ui.TextField.prototype.setIconTextGap = function (gap){};

/**
 * 设置图标的位置
 * @param {String} position 图标位置，值可能为 'left'|'right'
 */
ht.ui.TextField.prototype.setIconPosition = function (position){};

/**
 * 设置文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.TextField.prototype.setColor = function (color){};


/**
 * 设置文字字体
 * @param {String} font 文字字体
 */
ht.ui.TextField.prototype.setFont = function (font){};

/**
 * 设置输入验证正则表达式；用户每输入一个字符，都会通过这个正则表达式进行验证，如果验证失败，这个字符会被忽略
 * @param {RegExp} maskRe 正则表达式
 * @example
 * textField.setMaskRe(/[\d\-]/); // 只允许数字输入
 */
ht.ui.TextField.prototype.setMaskRe = function (maskRe){};


/**
 * 设置输入提示
 * @param {String} placeholder 输入提示
 */
ht.ui.TextField.prototype.setPlaceholder = function (placeholder){};


/**
 * 设置只读
 * @param {Boolean|String} readOnly 是否只读，值为：true|false|'entire'；当值为 true 时，只有文本框被禁用，右侧图标仍然可以点击；值为 'entire' 时，文本框和右侧图标都不响应交互动作
 */
ht.ui.TextField.prototype.setReadOnly = function (readOnly){};


/**
 * 设置输入文本的最大长度
 * @param {Number} maxLength 最大长度
 */
ht.ui.TextField.prototype.setMaxLength = function (maxLength){};


/**
 * 设置即时模式；在这种模式下，每输入一个字符 value 属性变化事件就会立即被派发，否则只有失去焦点或敲回车时才被派发
 * @param {Boolean} instant 是否是即时模式
 */
ht.ui.TextField.prototype.setInstant = function (instant){};


/**
 * 设置文本框类型；注意：这个属性本质是 input 标签的 type 属性的映射，因此某些特殊 type 类型依赖浏览器是否支持
 * @param {String} type 文本框类型
 */
ht.ui.TextField.prototype.setType = function (type){};

/**
 * 设置文本框的值
 * @param {Object} value 文本框值
 */
ht.ui.TextField.prototype.setValue = function (value){};

/**
 * 设置组件在表单中的名称
 * @param {String} name 名称
 */
ht.ui.TextField.prototype.setFormDataName = function (name){};


/**
 * 获取显示值的格式化函数
 * @return {Function} 格式化函数
 */
ht.ui.TextField.prototype.getDisplayFunc = function (value){};


/**
 * 设置显示值的格式化函数
 * @param {Function} func 格式化函数，示例：function(value) { return 'Format:' + value };
 */
ht.ui.TextField.prototype.setDisplayFunc = function (func){};
















/**
 * 数字输入框组件，提供两个按钮快速调整值<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickDecreaseIcon</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'clickDecreaseIcon', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: numberInput // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击减小图标时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>clickIncreaseIcon</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'clickIncreaseIcon', // 事件类型
 *      nativeEvent: e, // 鼠标事件
 *      source: numberInput // 事件源
 * }
 * </pre>
 * </td>
 * <td>点击增大图标时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：iconVisible, increaseIcon, decreaseIcon, increaseIconDrawable, decreaseIconDrawable, 
 *                       hoverIncreaseIcon, hoverDecreaseIcon, hoverIncreaseIconDrawable, hoverDecreaseIconDrawable,
 *                       activeIncreaseIcon, activeDecreaseIcon, activeIncreaseIconDrawable, activeDecreaseIconDrawable, step, min, max
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.TextField}
 */
ht.ui.NumberInput = function(properties) {};

/**
 * 获取增大按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getIncreaseIconDrawable getIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getIncreaseIcon = function (){};

/**
 * 获取增大按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getIncreaseIconDrawable = function (){};


/**
 * 设置增大按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setIncreaseIconDrawable setIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.setIncreaseIcon = function (icon){};

/**
 * 设置增大按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setIncreaseIconDrawable = function (drawable){};


/**
 * 获取 hover 状态的增大按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getHoverIncreaseIconDrawable getHoverIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getHoverIncreaseIcon = function (){};

/**
 * 获取 hover 状态的增大按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getHoverIncreaseIconDrawable = function (){};


/**
 * 设置 hover 状态的增大按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setHoverIncreaseIconDrawable setHoverIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.setHoverIncreaseIcon = function (icon){};

/**
 * 设置 hover 状态的增大按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setHoverIncreaseIconDrawable = function (drawable){};


/**
 * 获取 active 状态的增大按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getActiveIncreaseIconDrawable getActiveIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getActiveIncreaseIcon = function (){};

/**
 * 获取 active 状态的增大按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getActiveIncreaseIconDrawable = function (){};


/**
 * 设置 active 状态的增大按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setActiveIncreaseIconDrawable setActiveIncreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.setActiveIncreaseIcon = function (icon){};

/**
 * 设置 active 状态的增大按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setActiveIncreaseIconDrawable = function (drawable){};


/**
 * 获取减小按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getDecreaseIconDrawable getDecreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getDecreaseIcon = function (){};

/**
 * 获取减小按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getDecreaseIconDrawable = function (){};


/**
 * 设置减小按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setDecreaseIconDrawable setDecreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.setDecreaseIcon = function (icon){};

/**
 * 设置减小按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setDecreaseIconDrawable = function (drawable){};


/**
 * 获取 hover 状态的减小按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getHoverDecreaseIconDrawable getHoverDecreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getHoverDecreaseIcon = function (){};

/**
 * 获取 hover 状态的减小按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getHoverDecreaseIconDrawable = function (){};


/**
 * 设置 hover 状态的减小按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setHoverDecreaseIconDrawable setHoverDecreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.setHoverDecreaseIcon = function (icon){};

/**
 * 设置 hover 状态的减小按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setHoverDecreaseIconDrawable = function (drawable){};


/**
 * 获取 active 状态的减小按钮图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.NumberInput#getActiveDecreaseIconDrawable getActiveDecreaseIconDrawable}s
 */
ht.ui.NumberInput.prototype.getActiveDecreaseIcon = function (){};

/**
 * 获取 active 状态的减小按钮图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.NumberInput.prototype.getActiveDecreaseIconDrawable = function (){};


/**
 * 设置 active 状态的减小按钮图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.NumberInput#setActiveDecreaseIconDrawable setActiveDecreaseIconDrawable}
 */
ht.ui.NumberInput.prototype.setActiveDecreaseIcon = function (icon){};

/**
 * 设置 active 状态的减小按钮图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.NumberInput.prototype.setActiveDecreaseIconDrawable = function (drawable){};

/**
 * 获取增加和减小按钮调整值时的步进
 * @return {Number} 步进
 */
ht.ui.NumberInput.prototype.getStep = function (){};

/**
 * 设置增加和减小按钮调整值时的步进
 * @param {Number} step 步进
 */
ht.ui.NumberInput.prototype.setStep = function (step){};


/**
 * 获取允许输入的最大值
 * @return {Number} 最大值
 */
ht.ui.NumberInput.prototype.getMax = function (){};

/**
 * 设置允许输入的最大值
 * @param {Number} max 最大值
 */
ht.ui.NumberInput.prototype.setMax = function (max){};


/**
 * 获取允许输入的最小值
 * @return {Number} 最小值
 */
ht.ui.NumberInput.prototype.getMin = function (){};

/**
 * 设置允许输入的最小值
 * @param {Number} min 最小值
 */
ht.ui.NumberInput.prototype.setMin = function (min){};


/**
 * 此函数在 NumberInput 中无效，请使用 {@link ht.ui.NumberInput#increaseIconHitTest increaseIconHitTest} 和 {@link ht.ui.NumberInput#decreaseIconHitTest decreaseIconHitTest}
 */
ht.ui.NumberInput.prototype.iconHitTest = function (){};

/**
 * 判断是否点击中增加按钮
 * @param {Event} event 事件对象
 */
ht.ui.NumberInput.prototype.increaseIconHitTest = function (event){};


/**
 * 判断是否点击中减小按钮
 * @param {Event} event 事件对象
 */
ht.ui.NumberInput.prototype.decreaseIconHitTest = function (event){};


/**
 * 获取增加和减小图标是否可见
 * @return {Boolean}
 */
ht.ui.NumberInput.prototype.isIconVisible = function (){};


/**
 * 设置增加和减小图标是否可见
 * @oparam {Boolean} visible
 */
ht.ui.NumberInput.prototype.setIconVisible = function (visible){};

/**
 * 文本域组件，可用来编辑和显示多行文本<br><br>
 * 样式属性(不含从父类继承)：lineHeight, autoRefreshPreferredSize
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.TextField}
 */
ht.ui.TextArea = function(properties) {};

/**
 * 获取行高
 * @return {Number} 高度值
 */
ht.ui.TextArea.prototype.getLineHeight = function (){};

/**
 * 判断是否自动刷新 preferredSize
 * @return {Boolean} 是否自动刷新
 */
ht.ui.TextArea.prototype.isAutoRefreshPreferredSize = function (){};

/**
 * 设置行高
 * @param {Number} lineHeight 高度值
 */
ht.ui.TextArea.prototype.setLineHeight = function (lineHeight){};

/**
 * 设置是否自动刷新 preferredSize
 * @param {Boolean} autoRefresh 是否自动刷新
 */
ht.ui.TextArea.prototype.setAutoRefreshPreferredSize = function (autoRefresh){};












/**
 * 组合框组件<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>dropDownViewCreated</code></td>
 * <td> { kind: 'dropDownViewCreated', dropDownView: dropDownView } </td>
 * <td>下拉组件被创建时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：valueIconWidth, valueIconHeight, valueIconTexgGap ,dropDownConfig, datas, valueField, iconField, displayField
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.TextField}
 * @example
 * // 只有纯文本的组合框
 * comboBox1 = new ht.ui.ComboBox();
 * comboBox1.setDatas(['HT core', 'HT ContextMenu', 'HT Form']);
 * comboBox1.addToDOM(window, {x: 10, y: 10, width: 160, height: 22});
 * comboBox.on('p:value', function(e) { // 监听选择事件
 *        console.log(e.newValue);
 *   });
 *
 * // 带 icon 的组合框
 * var datas = [
 *     {
 *         label: '女',
 *         id: 0,
 *         icon: 'res/male.png'
 *     },
 *     {
 *         label: '男',
 *         id: 1,
 *         icon: 'res/female.png'
 *     }
 * ];
 * comboBox2 = new ht.ui.ComboBox();
 * comboBox2.setDatas(datas);
 * comboBox2.on('p:value', function(e) {
 *      console.log(e.newValue);
 * });
 * comboBox2.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.ComboBox = function(properties) {};

/**
 * 获取组合框选中的值，默认情况下这个函数的返回值是一个数据对象(datas 数组中的元素)<br>
 * 如果指定了 valueField，此函数返回值为数据对象中的属性值
 * @return {Object} 组件值
 */
ht.ui.ComboBox.prototype.getValue = function (){};

/**
 * 获取数据对象中用于显示的属性，默认为 label
 * @return {String} 属性名
 */
ht.ui.ComboBox.prototype.getDisplayField = function (){};

/**
 * 设置数据对象中用于显示的属性
 * @param {String} displayField 属性名，默认为 label
 */
ht.ui.ComboBox.prototype.setDisplayField = function (displayField){};

/**
 * 获取数据对象中的图标属性名，默认为 icon
 * @return {String} 属性名 
 */
ht.ui.ComboBox.prototype.getIconField = function (){};

/**
 * 设置数据对象中的图标属性名
 * @param {String} iconField 属性名，默认为 icon
 */
ht.ui.ComboBox.prototype.setIconField = function (iconField){};

/**
 * 获取数据对象中的 id 属性名
 * @return {String} 属性名 
 */
ht.ui.ComboBox.prototype.getValueField = function (){};

/**
 * 设置数据对象中的 id 属性名；需要注意，默认情况下 comboBox.getValue() 返回的是数据对象，如果指定了此参数，
 * getValue() 和 setValue() 的返回值和参数都是数据对象中对应的属性
 * @param {String} valueField 属性名
 */
ht.ui.ComboBox.prototype.setValueField = function (valueField){};

/**
 * 获取当前选中的属性对象
 * @return {Object} 属性对象
 */
ht.ui.ComboBox.prototype.getValueObject = function (valueField){};

/**
 * 获取选中值的图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.ComboBox.prototype.getValueIconWidth = function (){};

/**
 * 获取选中值的图标的和文字之间的距离
 * @return {Number} 间距值
 */
ht.ui.ComboBox.prototype.getValueIconTextGap = function (){};

/**
 * 获取选中值的图标的高度
 * @return {Number} 高度值
 */
ht.ui.ComboBox.prototype.getValueIconHeight = function (){};

/**
 * 获取下拉模板类
 * @return {String|Class} 下拉模板类
 */
ht.ui.ComboBox.prototype.getDropDownTemplate = function (){};

/**
 * 获取下拉模板属性配置表
 * @return {Object} 属性配置表
 */
ht.ui.ComboBox.prototype.getDropDownConfig = function (){};

/**
 * 获取下拉数据数组，格式为：[{ id: id1, label: label1, icon: icon1 }, { id: id2, label: label2, icon: icon2 }] 或 [label1, label2, label3]
 * @return {Array} 数据
 */
ht.ui.ComboBox.prototype.getDatas = function (){};

/**
 * 获取 readOnly 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ComboBox#getReadOnlyBackgroundDrawable getReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.getReadOnlyBackground = function (){};

/**
 * 获取 hover 和 readOnly 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ComboBox#getHoverReadOnlyBackgroundDrawable getHoverReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.getHoverReadOnlyBackground = function (){};


/**
 * 获取 active 和 readOnly 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ComboBox#getActiveReadOnlyBackgroundDrawable getActiveReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.getActiveReadOnlyBackground = function (){};


/**
 * 获取 readOnly 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ComboBox.prototype.getReadOnlyBackgroundDrawble = function (){};


/**
 * 获取 hover 和 readOnly 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ComboBox.prototype.getHoverReadOnlyBackgroundDrawble = function (){};

/**
 * 获取 active 和 readOnly 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ComboBox.prototype.getActiveReadOnlyBackgroundDrawble = function (){};


/**
 * 设置 readOnly 状态下的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ComboBox#setReadOnlyBackgroundDrawable setReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.setReadOnlyBackground = function (background){};

/**
 * 设置 hover 和 readOnly 状态下的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ComboBox#setHoverReadOnlyBackgroundDrawable setHoverReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.setHoverReadOnlyBackground = function (background){};


/**
 * 设置 active 和 readOnly 状态下的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ComboBox#setActiveReadOnlyBackgroundDrawable setActiveReadOnlyBackgroundDrawable}
 */
ht.ui.ComboBox.prototype.setActiveReadOnlyBackground = function (background){};


/**
 * 设置 readOnly 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ComboBox.prototype.setReadOnlyBackgroundDrawble = function (drawable){};


/**
 * 设置 hover 和 readOnly 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ComboBox.prototype.setHoverReadOnlyBackgroundDrawble = function (drawable){};

/**
 * 设置 active 和 readOnly 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ComboBox.prototype.setActiveReadOnlyBackgroundDrawble = function (drawable){};

/**
 * 获取 readOnly 状态下的展开图标；可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ComboBox#getReadOnlyIconDrawable getReadOnlyIconDrawable}
 */
ht.ui.ComboBox.prototype.getReadOnlyIcon = function (){};


/**
 * 获取 readOnly 状态下的展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ComboBox.prototype.getReadOnlyIconDrawable = function (){};


/**
 * 设置 readOnly 状态下的展开图标；可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ComboBox#setReadOnlyIconDrawable setReadOnlyIconDrawable}
 */
ht.ui.ComboBox.prototype.setReadOnlyIcon = function (icon){};


/**
 * 设置 readOnly 状态下的展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ComboBox.prototype.setReadOnlyIconDrawable = function (drawable){};

/**
 * 根据下标选中数据
 * @param {Number} index 下标
 */
ht.ui.ComboBox.prototype.selectAt = function (index){};


/**
 * 判断下拉框是否处于打开状态
 * @return {Boolean} 是否处于打开状态
 */
ht.ui.ComboBox.prototype.isOpened = function() {};

/**
 * 绘制选中值图标
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ComboBox.prototype.drawValueIcon = function (drawable, x, y, width, height) {};

/**
 * 打开下拉框
 */
ht.ui.ComboBox.prototype.open = function() {};

/**
 * 关闭下拉框
 */
ht.ui.ComboBox.prototype.close = function() {};

/**
 * 切换下拉框状态(如果处于关闭状态将其打开；如果处于打开状态则将其关闭)
 */
ht.ui.ComboBox.prototype.toggle = function() {};


/**
 * 设置组合框的值
 * @param {Object} value 组件值
 */
ht.ui.ComboBox.prototype.setValue = function (value){};

/**
 * 设置选中值的图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.ComboBox.prototype.setValueIconWidth = function (width){};

/**
 * 设置选中值的图标的和文字之间的距离
 * @param {Number} gap 间距值
 */
ht.ui.ComboBox.prototype.setValueIconTextGap = function (gap){};

/**
 * 设置选中值的图标的高度
 * @param {Number} height 高度值
 */
ht.ui.ComboBox.prototype.getValueIconHeight = function (height){};

/**
 * 设置下拉模板类；这个模板类必须是 ht.ui.DropDownTemplate 的子类，开发者也可以继承这个类实现自己的下拉组件
 * @param {String|Class} template 下拉模板类，如果是字符串，可以使用 $ 加样式名指定外部样式，如：'ht.ui.ListDropDown$myList'
 */
ht.ui.ComboBox.prototype.setDropDownTemplate = function (template){};

/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * comboBox.setDropDownConfig({
 * 	'width': 100, // 下拉框宽度
 * 	'height': 100, // 下拉框高度
 * 	'dropDownView.background': 'red' // dropDownView.xxx 用来设置下拉组件的属性
 * });
 */
ht.ui.ComboBox.prototype.setDropDownConfig = function (config){};

/**
 * 设置下拉数据数组
 * @param {Array} datas 数据数组，格式为：[{ id: id1, label: label1, icon: icon1 }, { id: id2, label: label2, icon: icon2 }] 或 [label1, label2, label3]
 */
ht.ui.ComboBox.prototype.setDatas = function (datas){};




/**
 * 日期时间选择面板<br><br>
 * 样式属性(不含从父类继承)：type, weekLabels, timeLabels, yearLabel, monthLabel, yearMonthOrder, labelFont, 
 *                      prevYear, prevYearDrawable, nextYear, nextYearDrawable, prevMonth, prevMonthDrawable, nextMonth, nextMonthDrawable,
 *                      hoverPrevYear, hoverPrevYearDrawable, hoverNextYear, hoverNextYearDrawable, hoverPrevMonth, hoverPrevMonthDrawable, hoverNextMonth, hoverNextMonthDrawable,
 *                      activePrevYear, activePrevYearDrawable, activeNextYear, activeNextYearDrawable, activePrevMonth, activePrevMonthDrawable, activeNextMonth, activeNextMonthDrawable, 
 *                      headerTitleColor, hoverHeaderTitleColor, weekTitleColor, gridColor, otherMonthGridColor, hoverGridColor, selectGridColor, timeAlign, timeColor, hoverTimeColor, disabledTimeColor, 
 *                      hoverGridBackground, hoverGridBackgroundDrawable, selectGridBackground, selectGridBackgroundDrawable
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.DateTimePane = function(properties) {};

/**
 * 获取类型
 * @return {String} 类型，值为：year|month|date|datetime|time
 */
ht.ui.DateTimePane.prototype.getType = function (){};

/**
 * 设置类型，如只允许选择日期，不允许选择时间，可将参数设置为 date
 * @param {String} type 类型，值为：year|month|date|datetime|time
 */
ht.ui.DateTimePane.prototype.setType = function (type){};

/**
 * 获取周标题
 * @return {Array} 周标题，默认值为：['日', '一', '二', '三', '四', '五', '六']
 */
ht.ui.DateTimePane.prototype.getWeekLabels = function (){};

/**
 * 设置周标题
 * @param {Array} weekLabels 周标题，默认值为：['日', '一', '二', '三', '四', '五', '六']
 */
ht.ui.DateTimePane.prototype.setWeekLabels = function (weekLabels){};


/**
 * 获取时间标题
 * @return {Array} 时间标题，默认值为：['小时', '分钟', '秒']
 */
ht.ui.DateTimePane.prototype.getTimeLabels = function (){};

/**
 * 设置时间标题
 * @param {Array} timeLabels 时间标题，默认值为：['小时', '分钟', '秒']
 */
ht.ui.DateTimePane.prototype.setTimeLabels = function (timeLabels){};


/**
 * 获取年份格式
 * @return {String} 年份格式，默认值为 'YYYY 年'，其中 'YYYY' 为格式化标记，支持的格式如下：
 * <ul>
 * <li>YYYY: 1970 1971 ...</li>
 * <li>YY: 79 71 ...</li>
 * </ul>
 */
ht.ui.DateTimePane.prototype.getYearLabel = function (){};

/**
 * 设置年份格式
 * @param {String} year 年份格式，默认值为 'YYYY 年'，其中 'YYYY' 为格式化标记，支持的格式如下：
 * <ul>
 * <li>YYYY: 1970 1971 ...</li>
 * <li>YY: 79 71 ...</li>
 * </ul>
 */
ht.ui.DateTimePane.prototype.setYearLabel = function (year){};


/**
 * 获取月份格式
 * @return {String} 月份格式，默认值为 'MM 月'，其中 'MM' 为格式化标记，支持的格式如下：
 * <ul>
 * <li>M: 1 2 ... 12</li>
 * <li>MM: 01 02 ... 12</li>
 * <li>MMM: Jan Feb ... Dec</li>
 * <li>MMMM: January February ... December</li>
 * </ul>
 */
ht.ui.DateTimePane.prototype.getMonthLabel = function (){};

/**
 * 设置月份格式
 * @param {String} month 月份格式，默认值为 'MM 月'，其中 'MM' 为格式化标记，支持的格式如下：
 * <ul>
 * <li>M: 1 2 ... 12</li>
 * <li>MM: 01 02 ... 12</li>
 * <li>MMM: Jan Feb ... Dec</li>
 * <li>MMMM: January February ... December</li>
 * </ul>
 */
ht.ui.DateTimePane.prototype.setMonthLabel = function (month){};


/**
 * 获取年月顺序
 * @return {String} 默认为：yearMonth，英文格式一般为：monthYear
 */
ht.ui.DateTimePane.prototype.getYearMonthOrder = function (){};

/**
 * 设置年月顺序
 * @param {String} order 默认为：yearMonth，英文格式一般为：monthYear
 */
ht.ui.DateTimePane.prototype.setYearMonthOrder = function (order){};

/**
 * 获取文字字体
 * @return {String} 字体
 */
ht.ui.DateTimePane.prototype.getLabelFont = function (){};

/**
 * 设置文字字体
 * @param {String} font 字体
 */
ht.ui.DateTimePane.prototype.setLabelFont = function (font){};

/**
 * 获取上一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getPrevYear = function (){};

/**
 * 设置上一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setPrevYear = function (icon){};

/**
 * 获取上一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getPrevYearDrawable = function (){};

/**
 * 设置上一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setPrevYearDrawable = function (drawable){};

/**
 * 获取下一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getNextYear = function (){};

/**
 * 设置下一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setNextYear = function (icon){};

/**
 * 获取下一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getNextYearDrawable = function (){};

/**
 * 设置下一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setNextYearDrawable = function (drawable){};


/**
 * 获取上个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getPrevMonth = function (){};

/**
 * 设置上个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setPrevMonth = function (icon){};

/**
 * 获取上个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getPrevMonthDrawable = function (){};

/**
 * 设置上个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setPrevMonthDrawable = function (drawable){};


/**
 * 获取下个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getNextMonth = function (){};

/**
 * 设置下个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setNextMonth = function (icon){};

/**
 * 获取下个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getNextMonthDrawable = function (){};

/**
 * 设置下个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setNextMonthDrawable = function (drawable){};


/**
 * 获取 hove 状态的上一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getHoverPrevYear = function (){};

/**
 * 设置 hove 状态的上一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setHoverPrevYear = function (icon){};

/**
 * 获取 hove 状态的上一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getHoverPrevYearDrawable = function (){};

/**
 * 设置 hove 状态的上一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setHoverPrevYearDrawable = function (drawable){};

/**
 * 获取 hove 状态的下一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getHoverNextYear = function (){};

/**
 * 设置 hove 状态的下一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setHoverNextYear = function (icon){};

/**
 * 获取 hove 状态的下一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getHoverNextYearDrawable = function (){};

/**
 * 设置 hove 状态的下一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setHoverNextYearDrawable = function (drawable){};


/**
 * 获取 hove 状态的上个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getHoverPrevMonth = function (){};

/**
 * 设置 hove 状态的上个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setHoverPrevMonth = function (icon){};

/**
 * 获取 hove 状态的上个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getHoverPrevMonthDrawable = function (){};

/**
 * 设置 hove 状态的上个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setHoverPrevMonthDrawable = function (drawable){};


/**
 * 获取 hove 状态的下个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getHoverNextMonth = function (){};

/**
 * 设置 hove 状态的下个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setHoverNextMonth = function (icon){};

/**
 * 获取 hove 状态的下个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getHoverNextMonthDrawable = function (){};

/**
 * 设置 hove 状态的下个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setHoverNextMonthDrawable = function (drawable){};



/**
 * 获取 active 状态的上一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getActivePrevYear = function (){};

/**
 * 设置 active 状态的上一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setActivePrevYear = function (icon){};

/**
 * 获取 active 状态的上一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getActivePrevYearDrawable = function (){};

/**
 * 设置 active 状态的上一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setActivePrevYearDrawable = function (drawable){};

/**
 * 获取 active 状态的下一年图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getActiveNextYear = function (){};

/**
 * 设置 active 状态的下一年图标
 * @param {Object} icon 图标, 可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setActiveNextYear = function (icon){};

/**
 * 获取 active 状态的下一年图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getActiveNextYearDrawable = function (){};

/**
 * 设置 active 状态的下一年图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setActiveNextYearDrawable = function (drawable){};


/**
 * 获取 active 状态的上个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getActivePrevMonth = function (){};

/**
 * 设置 active 状态的上个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setActivePrevMonth = function (icon){};

/**
 * 获取 active 状态的上个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getActivePrevMonthDrawable = function (){};

/**
 * 设置 active 状态的上个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setActivePrevMonthDrawable = function (drawable){};


/**
 * 获取 active 状态的下个月图标，可以是颜色、图片等
 * @return {Object} 图标
 */
ht.ui.DateTimePane.prototype.getActiveNextMonth = function (){};

/**
 * 设置 active 状态的下个月图标
 * @param {Object} icon 图标，可以是颜色、图片等
 */
ht.ui.DateTimePane.prototype.setActiveNextMonth = function (icon){};

/**
 * 获取 active 状态的下个月图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.DateTimePane.prototype.getActiveNextMonthDrawable = function (){};

/**
 * 设置 active 状态的下个月图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.DateTimePane.prototype.setActiveNextMonthDrawable = function (drawable){};

/**
 * 获取标题栏中文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getHeaderTitleColor = function (){};

/**
 * 设置标题栏中文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setHeaderTitleColor = function (color){};

/**
 * 获取标题栏中文字 hover 状态颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getHoverHeaderTitleColor = function (){};

/**
 * 设置标题栏中文字 hover 状态颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setHoverHeaderTitleColor = function (color){};

/**
 * 获取周标题文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getWeekTitleColor = function (){};

/**
 * 设置周标题文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setWeekTitleColor = function (color){};


/**
 * 获取网格(日期、年份、月份)文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getGridColor = function (){};

/**
 * 设置网格(日期、年份、月份)文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setGridColor = function (color){};

/**
 * 获取日期格子中其它月份的日期的文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getOtherMonthGridColor = function (){};

/**
 * 设置日期格子中其它月份的日期的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setOtherMonthGridColor = function (color){};

/**
 * 获取 hover 状态的网格(日期、年份、月份)文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getHoverGridColor = function (){};

/**
 * 设置 hover 状态的网格(日期、年份、月份)文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setHoverGridColor = function (color){};

/**
 * 获取选中状态的网格(日期、年份、月份)文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getSelectGridColor = function (){};

/**
 * 设置选中状态的网格(日期、年份、月份)文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setSelectGridColor = function (color){};

/**
 * 获取时间文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getTimeColor = function (){};

/**
 * 设置时间文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setTimeColor = function (color){};


/**
 * 获取时间文字水平对齐方式
 * @return {String} 水平对齐方式，值为：left|center|right
 */
ht.ui.DateTimePane.prototype.getTimeAlign = function (){};

/**
 * 设置时间文字水平对齐方式
 * @param {String} align 水平对齐方式，值为：left|center|right
 */
ht.ui.DateTimePane.prototype.setTimeAlign = function (align){};


/**
 * 获取 hover 状态的时间文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getHoverTimeColor = function (){};

/**
 * 设置 hover 状态的时间文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setHoverTimeColor = function (color){};

/**
 * 获取禁用的时间文字颜色
 * @return {color} 颜色值
 */
ht.ui.DateTimePane.prototype.getDisabledTimeColor = function (){};

/**
 * 设置禁用的时间文字颜色
 * @param {color} color 颜色值
 */
ht.ui.DateTimePane.prototype.setDisabledTimeColor = function (color){};

/**
 * 获取 hover 状态的网格(日期、年份、月份)背景
 * @return {Object} 背景
 */
ht.ui.DateTimePane.prototype.getHoverGridBackground = function (){};

/**
 * 设置 hover 状态的网格(日期、年份、月份)背景
 * @param {Object} background 背景
 */
ht.ui.DateTimePane.prototype.setHoverGridBackground = function (background){};

/**
 * 获取 hover 状态的网格(日期、年份、月份)背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.DateTimePane.prototype.getHoverGridBackgroundDrawable = function (){};

/**
 * 设置 hover 状态的网格(日期、年份、月份)背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.DateTimePane.prototype.setHoverGridBackgroundDrawable = function (drawable){};


/**
 * 获取 hover 状态的网格(日期、年份、月份)背景
 * @return {Object} 背景
 */
ht.ui.DateTimePane.prototype.getSelectGridBackground = function (){};

/**
 * 设置选中状态的网格(日期、年份、月份)背景
 * @param {Object} background 背景
 */
ht.ui.DateTimePane.prototype.setSelectGridBackground = function (background){};

/**
 * 获取选中状态的网格(日期、年份、月份)背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.DateTimePane.prototype.getSelectGridBackgroundDrawable = function (){};

/**
 * 设置选中状态的网格(日期、年份、月份)背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.DateTimePane.prototype.setSelectGridBackgroundDrawable = function (drawable){};

/**
 * 获取当前选中的日期值
 * @return {Date} 
 */
ht.ui.DateTimePane.prototype.getValue = function (){};

/**
 * 设置日期值
 * @param {Date} date
 */
ht.ui.DateTimePane.prototype.setValue = function (date){};

/**
 * 获取小时列表组件
 * @return {ht.ui.ListView}
 */
ht.ui.DateTimePane.prototype.getHoursList = function (date){};

/**
 * 获取分钟列表组件
 * @return {ht.ui.ListView}
 */
ht.ui.DateTimePane.prototype.getMinutesList = function (date){};

/**
 * 获取秒列表组件
 * @return {ht.ui.ListView}
 */
ht.ui.DateTimePane.prototype.getSecondsList = function (date){};
/**
 * 日期时间下拉模板
 * @constructor
 * @extends {ht.ui.DropDownTemplate}
 */
ht.ui.DateTimeDropDown = function() {};

/**
 * 获取确定和取消两个按钮的文本
 * @return {Array} 
 */
ht.ui.DateTimePane.prototype.getButtonTexts = function (){};

/**
 * 设置确定和取消两个按钮的文本
 * @param {Array} texts 格式：['确定', '取消']
 */
ht.ui.DateTimePane.prototype.setButtonTexts = function (texts){};

/**
 * 日期选择器组件；从组件从 ComboBox 继承并使用 ht.ui.DateTimeDropDown 作为下拉模板
 * <br>
 * 组件的 format 属性用于设置日期格式，如 'YYYY-MM-DD' 会将日期格式化为 '2014-01-09'，支持的格式化标记如下：
 * <table class="params table table-striped">
 * <thead>
 * <th>部位</th>
 * <th>标记</th>
 * <th>示例</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td>月</td>
 * <td>M</td>
 * <td>1 2 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MM</td>
 * <td>01 02 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MMM</td>
 * <td>Jan Feb ... Dec</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MMMM</td>
 * <td>January February ... December</td>
 * </tr>
 * <tr>
 * <td>日</td>
 * <td>D</td>
 * <td>1 2 ... 31</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>DD</td>
 * <td>01 02 ... 31</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>Do</td>
 * <td>1st 2nd ... 31st</td>
 * </tr>
 * <tr>
 * <td>周</td>
 * <td>d</td>
 * <td>0 1 ... 6</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>ddd</td>
 * <td>Sun Mon ... Sat</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>dddd</td>
 * <td>Sunday Monday ... Saturday</td>
 * </tr>
 * <tr>
 * <td>年</td>
 * <td>YY</td>
 * <td>70 71 ... 30</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>YYYY</td>
 * <td>1970 1971 ... 2030</td>
 * </tr>
 * <tr>
 * <tr>
 * <td>上午/下午</td>
 * <td>A</td>
 * <td>AM PM</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>a</td>
 * <td>am pm</td>
 * </tr>
 * <td>小时</td>
 * <td>H</td>
 * <td>0 1 ... 23</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>HH</td>
 * <td>00 01 ... 23</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>h</td>
 * <td>1 2 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>hh</td>
 * <td>01 02 ... 12</td>
 * </tr>
 * <tr>
 * <td>分</td>
 * <td>m</td>
 * <td>0 1 ... 59</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>mm</td>
 * <td>00 01 ... 59</td>
 * </tr>
 * <tr>
 * <td>秒</td>
 * <td>s</td>
 * <td>0 1 ... 59</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>ss</td>
 * <td>00 01 ... 59</td>
 * </tr>
 * </tbody>
 * </table>
 * <br>
 * 样式属性(不含从父类继承)：format
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ComboBox}
 * @example
 * dateTimePicker = new ht.ui.DateTimePicker();
 * dateTimePicker.setFormat('YYYY-MM-DD HH:mm');
 * dateTimePicker.addPropertyChangeListener(function(e) {
 *     if (e.property === 'value') {
 *         console.log(e.newValue);
 *     }
 * });
 * dateTimePicker.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.DateTimePicker = function(properties) {};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.getDisplayField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.setDisplayField = function (displayField){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.getIconField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.setIconField = function (iconField){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.getValueField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateTimePicker.prototype.setValueField = function (valueField){};

/**
 * 获取格式
 * @return {String} 格式
 */
ht.ui.DateTimePicker.prototype.getFormat = function (){};

/**
 * 设置格式
 * @param {String} format 格式
 */
ht.ui.DateTimePicker.prototype.setFormat = function (format){};

/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * comboBox.setDropDownConfig({
 * 	'buttonTexts': ['确定', '取消'], // 下拉模板中的按钮文本改为中文
 * 	'dropDownView.background': 'red', // dropDownView.xxx 用来设置下拉组件(SplitLayout 布局器，上面是 DateTimePane，下面是确定和取消按钮)的属性
 *  'dateTimePane.type': 'date' // dateTimePane.xxx 用来设置下拉组件容器中的日期时间面板组件的属性
 * });
 */
ht.ui.DateTimePicker.prototype.setDropDownConfig = function (config){};
/**
 * 日期时间范围下拉模板
 * @constructor
 * @extends {ht.ui.DropDownTemplate}
 */
ht.ui.DateRangeDropDown = function() {};

/**
 * 获取确定和取消两个按钮的文本
 * @return {Array} 
 */
ht.ui.DateRangeDropDown.prototype.getButtonTexts = function (){};

/**
 * 设置确定和取消两个按钮的文本
 * @param {Array} texts 格式：['确定', '取消']
 */
ht.ui.DateRangeDropDown.prototype.setButtonTexts = function (texts){};


/**
 * 是否显示第二个日期面板(如果隐藏第二个日期面板意味着只显示第一个日期面板)
 * @return {Boolean} 
 */
ht.ui.DateRangeDropDown.prototype.isSecondPaneVisible = function (){};

/**
 * 设置是否显示第二个日期面板(如果隐藏第二个日期面板意味着只显示第一个日期面板)
 * @param {Boolean} secondPaneVisible
 */
ht.ui.DateRangeDropDown.prototype.setSecondPaneVisible = function (secondPaneVisible){};


/**
 * 是否显示快速选择面板
 * @return {Boolean} 
 */
ht.ui.DateRangeDropDown.prototype.isShortcutVisible = function (){};

/**
 * 设置是否显示快速选择面板
 * @param {Boolean} shortcutVisible
 */
ht.ui.DateRangeDropDown.prototype.setShortcutVisible = function (shortcutVisible){};


/**
 * 获取快速选择配置
 * @return {Object} 
 */
ht.ui.DateRangeDropDown.prototype.getShortcuts = function (){};

/**
 * 设置快速选择配置
 * @param {Object} shortcuts 示例：{ '最近一周': function() { var startDate = new Date(); startDate.setDate(startDate.getDate() - 7); return [startDate, new Date()];} } 
 */
ht.ui.DateRangeDropDown.prototype.setShortcutVisible = function (shortcuts){};

/**
 * 日期时间范围选择器组件；从组件从 ComboBox 继承并使用 ht.ui.DateRangeDropDown 作为下拉模板
 * <br>
 * 组件的 format 属性用于设置日期格式，如 'YYYY-MM-DD' 会将日期格式化为 '2014-01-09'，支持的格式化标记如下：
 * <table class="params table table-striped">
 * <thead>
 * <th>部位</th>
 * <th>标记</th>
 * <th>示例</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td>月</td>
 * <td>M</td>
 * <td>1 2 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MM</td>
 * <td>01 02 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MMM</td>
 * <td>Jan Feb ... Dec</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>MMMM</td>
 * <td>January February ... December</td>
 * </tr>
 * <tr>
 * <td>日</td>
 * <td>D</td>
 * <td>1 2 ... 31</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>DD</td>
 * <td>01 02 ... 31</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>Do</td>
 * <td>1st 2nd ... 31st</td>
 * </tr>
 * <tr>
 * <td>周</td>
 * <td>d</td>
 * <td>0 1 ... 6</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>ddd</td>
 * <td>Sun Mon ... Sat</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>dddd</td>
 * <td>Sunday Monday ... Saturday</td>
 * </tr>
 * <tr>
 * <td>年</td>
 * <td>YY</td>
 * <td>70 71 ... 30</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>YYYY</td>
 * <td>1970 1971 ... 2030</td>
 * </tr>
 * <tr>
 * <tr>
 * <td>上午/下午</td>
 * <td>A</td>
 * <td>AM PM</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>a</td>
 * <td>am pm</td>
 * </tr>
 * <td>小时</td>
 * <td>H</td>
 * <td>0 1 ... 23</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>HH</td>
 * <td>00 01 ... 23</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>h</td>
 * <td>1 2 ... 12</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>hh</td>
 * <td>01 02 ... 12</td>
 * </tr>
 * <tr>
 * <td>分</td>
 * <td>m</td>
 * <td>0 1 ... 59</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>mm</td>
 * <td>00 01 ... 59</td>
 * </tr>
 * <tr>
 * <td>秒</td>
 * <td>s</td>
 * <td>0 1 ... 59</td>
 * </tr>
 * <tr>
 * <td></td>
 * <td>ss</td>
 * <td>00 01 ... 59</td>
 * </tr>
 * </tbody>
 * </table>
 * <br>
 * 样式属性(不含从父类继承)：format
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ComboBox}
 * @example
 * dateRangePicker = new ht.ui.DateRangePicker();
 * dateRangePicker.setFormat('YYYY-MM-DD HH:mm');
 * dateRangePicker.addPropertyChangeListener(function(e) {
 *     if (e.property === 'value') {
 *         console.log(e.newValue);
 *     }
 * });
 * dateRangePicker.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.DateRangePicker = function(properties) {};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.getDisplayField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.setDisplayField = function (displayField){};


/**
 * 设置日期值
 * @param {String|Array} value 日期值，格式示例：'2018-01-01 ~ 2019-01-01' 或者 [startDate, endDate]
 */
ht.ui.DateRangePicker.prototype.setValue = function (value){};


/**
 * 返回开始日期对象和结束日期对象组成的数组
 * @return {Array} 格式为：[startDate, endDate]
 */
ht.ui.DateRangePicker.prototype.getDateValue = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.getIconField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.setIconField = function (iconField){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.getValueField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.DateRangePicker.prototype.setValueField = function (valueField){};

/**
 * 获取日期格式
 * @return {String} 日期格式
 */
ht.ui.DateRangePicker.prototype.getFormat = function (){};

/**
 * 设置日期格式
 * @param {String} format 日期格式
 */
ht.ui.DateRangePicker.prototype.setFormat = function (format){};

/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * comboBox.setDropDownConfig({
 * 	'buttonTexts': ['确定', '取消'], // 下拉模板中的按钮文本改为中文
 * 	'dropDownView.background': 'red', // dropDownView.xxx 用来设置下拉组件(SplitLayout 布局器，上面是 DateTimePane，下面是确定和取消按钮)的属性
 *  'dateRangePane.type': 'date' // dateRangePane.xxx 用来设置下拉组件容器中的日期时间面板组件的属性
 * });
 */
ht.ui.DateRangePicker.prototype.setDropDownConfig = function (config){};
/**
 * 颜色选择面板<br><br>
 * 样式属性(不含从父类继承)：labelColor, labelFont, sliderColor, inputColor, inputBackground, inputBorderColor, inputFont, previewBorderColor, alphaEditable
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.ColorPane = function(properties) {};

/**
 * 获取文字颜色
 * @return {color} 颜色值
 */
ht.ui.ColorPane.prototype.getLabelColor = function (){};

/**
 * 获取文字字体
 * @return {String} 字体
 */
ht.ui.ColorPane.prototype.getLabelFont = function (){};


/**
 * 获取拉条颜色
 * @return {color} 颜色值
 */
ht.ui.ColorPane.prototype.getSliderColor = function (){};

/**
 * 获取输入框的文字颜色
 * @return {color} 颜色值
 */
ht.ui.ColorPane.prototype.getInputColor = function (){};


/**
 * 获取输入框的文字字体
 * @return {String} 字体
 */
ht.ui.ColorPane.prototype.getInputFont = function (){};

/**
 * 获取输入框的背景
 * @return {String} 输入框的背景
 */
ht.ui.ColorPane.prototype.getInputBackground = function (){};

/**
 * 获取输入框的边框颜色
 * @return {color} 颜色值
 */
ht.ui.ColorPane.prototype.getInputBorderColor = function (){};

/**
 * 获取预览框的边框颜色
 * @return {color} 颜色值
 */
ht.ui.ColorPane.prototype.getPreviewBorderColor = function (){};


/**
 * 获取配置颜色
 * @return {Object} 颜色配置
 */
ht.ui.ColorPane.prototype.getPaletteColors = function (){};

/**
 * 判断是否启用透明度编辑
 * @return {Boolean} 是否启用透明度编辑
 */
ht.ui.ColorPane.prototype.isAlphaEditable = function (){};


/**
 * 判断颜色组名下拉框是否可见
 * @return {Boolean}
 */
ht.ui.ColorPane.prototype.isColorNameVisible = function (){};

/**
 * 获取选中的颜色值
 * @return {color} 颜色值，格式为 "rgba(r, g, b, a)"
 */
ht.ui.ColorPane.prototype.getValue = function (){};


/**
 * 设置文字颜色
 * @param {color} color 颜色值
 */
ht.ui.ColorPane.prototype.setLabelColor = function (color){};

/**
 * 设置文字字体
 * @param {String} font 文字字体
 */
ht.ui.ColorPane.prototype.setLabelFont = function (font){};


/**
 * 设置拉条颜色
 * @param {color} color 颜色值
 */
ht.ui.ColorPane.prototype.setSliderColor = function (color){};

/**
 * 设置输入框的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.ColorPane.prototype.setInputColor = function (color){};


/**
 * 设置输入框的文字字体
 * @param {String} font 字体
 */
ht.ui.ColorPane.prototype.setInputFont = function (font){};

/**
 * 设置输入框的背景
 * @param {String} background 输入框的背景；这个值被设置到遮罩 input 的 background 样式上，因此可以使用所有 CSS 支持的 background 类型
 */
ht.ui.ColorPane.prototype.setInputBackground = function (background){};

/**
 * 设置输入框的边框颜色值
 * @param {color} color 颜色值
 */
ht.ui.ColorPane.prototype.setInputBorderColor = function (color){};

/**
 * 设置预览框的边框颜色
 * @param {color} color 颜色值
 */
ht.ui.ColorPane.prototype.setPreviewBorderColor = function (color){};

/**
 * 设置颜色值
 * @param {color} value 颜色值，格式为 "rgba(r, g, b, a)"
 */
ht.ui.ColorPane.prototype.setValue = function (value){};

/**
 * 设置是否启用透明度编辑
 * @param {Boolean} enabled 是否启用透明度编辑
 */
ht.ui.ColorPane.prototype.setAlphaEditable = function (enabled){};

/**
 * 设置颜色组名下拉框是否可见
 * @param {Boolean} visible
 */
ht.ui.ColorPane.prototype.setColorNameVisible = function (visible){};

/**
 * 设置配置颜色
 * @param {Object} colors 格式：{<br>
 *           'MyColors': [[null, '#F6D897', '#F2BF40', '#F8AC19', '#986B22', '#215D54', '#25834C', '#24D098'],<br>
 *           ['#F3C0C9', '#BB6765', '#B24A5B', '#8D384D', '#A83A39', '#205586', '#3DABDD', '#A4D9DF']]<br>
 *       }
 */
ht.ui.ColorPane.prototype.setPaletteColors = function (colors){};












/**
 * 颜色选择器组件；从组件从 ComboBox 继承并使用 ht.ui.ColorDropDown 作为下拉模板
 * <br>
 * 样式属性(不含从父类继承)：previewBackground, previewBackgroundDrawable
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ComboBox}
 * @example
 * colorPicker = new ht.ui.ColorPicker();
 * colorPicker.addPropertyChangeListener(function(e) {
 *     if (e.property === 'value') {
 *         console.log(e.newValue);
 *     }
 * });
 * colorPicker.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.ColorPicker = function(properties) {};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.getDisplayField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.setDisplayField = function (displayField){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.getIconField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.setIconField = function (iconField){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.getValueField = function (){};

/**
 * 只对 ht.ui.ComboBox 起作用，本组件无效
 */
ht.ui.ColorPicker.prototype.setValueField = function (valueField){};

/**
 * 获取预览背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ColorPicker#getPreviewBackgroundDrawable getPreviewBackgroundDrawable}
 */
ht.ui.ColorPicker.prototype.getPreviewBackground = function (){};

/**
 * 获取预览背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ColorPicker.prototype.getPreviewBackgroundDrawable = function (){};

/**
 * 设置预览背景；可以是颜色或者图片等
 * @param {Object} previewBackground 背景
 * @see {@link ht.ui.ColorPicker#setPreviewBackgroundDrawable setPreviewBackgroundDrawable}
 */
ht.ui.ColorPicker.prototype.setPreviewBackground = function (previewBackground){};

/**
 * 设置预览背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景 Drawable
 */
ht.ui.ColorPicker.prototype.setPreviewBackgroundDrawable = function (drawable){};

/**
 * 设置下拉模板属性配置表
 * @param {Object} config 属性配置表
 * @example
 * comboBox.setDropDownConfig({
 * 	'width': 100, // 下拉框宽度
 * 	'height': 100, // 下拉框高度
 * 	'dropDownView.background': 'red' // dropDownView.xxx 用来设置下拉组件(SplitLayout 布局器，上面是 ColorPane，下面是确定和取消按钮)的属性
 *  'colorPane.paletteColors': {'MyColors': [['red', 'green'],['yellow', 'pink']]} // colorPane.xxx 用于设置颜色选择面板的属性
 * });
 */
ht.ui.ColorPicker.prototype.setDropDownConfig = function (config){};

/**
 * 级联下拉框；从组件从 ComboBox 继承并使用 ht.ui.CascadeDropDown 作为下拉模板；<br>
 * 下拉模板组件为 ht.ui.TabLayout，样式名为被设置为 cascadedropdown，使用 style 机制配合这个样式名可实现自定义外观
 * <br>
 * 样式属性(不含从父类继承)：displaySeparator
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ComboBox}
 * @example
 * cmb = new ht.ui.CascadeComboBox();
 * cmb.setDatas({
 *      childrenTitle: '省份',
 *      children: [
 *          {
 *              label: '北京',
 *              childrenTitle: '区',
 *              children: [
 *                  { label: '东城区' },
 *                  { label: '西城区' }
 *              ]
 *          },
 *          {
 *              label: '山东',
 *              childrenTitle: '市',
 *              children: [
 *                  { label: '济南市' },
 *                  { label: '青岛市' }
 *              ]
 *          }
 *      ]
 * });
 * cmb.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.CascadeComboBox = function(properties) {};

/**
 * 获取显示属性之间的分隔符
 */
ht.ui.CascadeComboBox.prototype.getDisplaySeparator = function (){};

/**
 * 设置显示属性之间的分隔符
 * @param {String} separator 分隔符
 */
ht.ui.CascadeComboBox.prototype.setDisplaySeparator = function (separator){};

/**
 * 获取延迟加载器
 * @return {Object}
 */
ht.ui.CascadeComboBox.prototype.getLoader = function (){};


/**
 * 设置延迟加载器
 * @param {Object} loader
 * @example // 示例：
 * cmb.setLoader({
 * 	load: function(data, callback) {
 * 		// 展开此数据元素时回调，用于加载子元素
 *      var children = [...]; // 根据 data 加载子元素
 *      
 *      callback(children); // 调用回调函数，通知组件更新
 * 	},
 * 	isLoaded: function(data) {
 * 		// 返回子结点是否已加载
 *      return false;
 * 	}
 * });
 */
ht.ui.CascadeComboBox.prototype.setLoader = function (loader){};
/**
 * 进度条组件<br><br>
 * 样式属性(不含从父类继承)：bar, barDrawable, selectBar, selectBarDrawable,
 *       min, max, value, orientation, fixedSize, indeterminate, clipSelectBar,
 *       percentTextVisible, percentTextFont, percentTextColor
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 * @example
 * progressBar = new ht.ui.ProgressBar();
 * progressBar.setBar('rgb(232, 237, 242)');
 * progressBar.setSelectBar('rgb(26, 188, 156)');
 * progressBar.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.ProgressBar = function(properties) {};

/**
 * 获取进度条背景，可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ProgressBar#getBarDrawable getBarDrawable}
 */
ht.ui.ProgressBar.prototype.getBar = function() {};

/**
 * 获取进度条背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ProgressBar.prototype.getBarDrawable = function() {};

/**
 * 获取前景(即进度覆盖区域)，可以是颜色或者图片等
 * @return {Object} 前景
 * @see {@link ht.ui.ProgressBar#getSelectBarDrawable getSelectBarDrawable}
 */
ht.ui.ProgressBar.prototype.getSelectBar = function() {};


/**
 * 获取前景(即进度覆盖区域)的 Drawable 对象，可以是颜色或者图片等
 * @return {ht.ui.drawable.Drawable} 前景
 */
ht.ui.ProgressBar.prototype.getSelectBarDrawable = function() {};


/**
 * 获取进度起始值
 * @return {Number} 起始值
 */
ht.ui.ProgressBar.prototype.getMin = function() {};

/**
 * 获取进度结束值
 * @return {Number} 结束值
 */
ht.ui.ProgressBar.prototype.getMax = function() {};


/**
 * 获取当前进度值
 * @return {Number} 进度值
 */
ht.ui.ProgressBar.prototype.getValue = function() {};

/**
 * 获取进度条显示方向
 * @return {String} 显示方向，值可能为：'horizontal'|'vertical'
 */
ht.ui.ProgressBar.prototype.getOrientation = function() {};

/**
 * 是否是不确定模式；在不确定模式下，前景条的尺寸固定，位置跟随 value 变化；正常模式下，前景条的尺寸随着 value 变化增长或减小
 * @return {Boolean} 是否是不确定模式
 */
ht.ui.ProgressBar.prototype.isIndeterminate = function() {};

/**
 * 获取不确定模式下，前景条的尺寸；此值如果小于 1，表示百分比；大于 1 表示固定尺寸
 * @return {Number} 尺寸值
 */
ht.ui.ProgressBar.prototype.getFixedSize = function() {};


/**
 * 是否裁切前景条；如果裁切，则在整个进度条范围内绘制前景条，并将其裁切只显示前景条范围内的内容；否则在前景条范围内绘制完整的进度条
 * @return {Boolean} 是否裁切前景条
 */
ht.ui.ProgressBar.prototype.isClipSelectBar = function() {};

/**
 * 是否显示百分比文字
 * @return {Boolean} 是否显示百分比
 */
ht.ui.ProgressBar.prototype.isPercentTextVisible = function() {};


/**
 * 获取百分比文字字体
 * @return {String} 百分比文字字体
 */
ht.ui.ProgressBar.prototype.getPercentTextFont = function() {};


/**
 * 获取百分比文字颜色
 * @return {color} 百分比文字颜色
 */
ht.ui.ProgressBar.prototype.getPercentTextColor = function() {};


/**
 * 计算百分比并返回百分比文字；可重写返回自定义的文字格式
 * @return {String} 百分比文字
 */
ht.ui.ProgressBar.prototype.figurePercentText = function() {};

/**
 * 设置进度条背景，可以是颜色或者图片等
 * @param {Object} bar 背景
 * @see {@link ht.ui.ProgressBar#setBarDrawable setBarDrawable}
 */
ht.ui.ProgressBar.prototype.setBar = function(bar) {};

/**
 * 设置进度条背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ProgressBar.prototype.setBarDrawable = function(drawable) {};

/**
 * 设置前景(即进度覆盖区域)，可以是颜色或者图片等
 * @param {Object} selectBar 前景
 * @see {@link ht.ui.ProgressBar#setSelectBarDrawable setSelectBarDrawable}
 */
ht.ui.ProgressBar.prototype.setSelectBar = function(selectBar) {};

/**
 * 设置前景(即进度覆盖区域)的 Drawable 对象，可以是颜色或者图片等
 * @param {ht.ui.drawable.Drawable} drawable 前景
 */
ht.ui.ProgressBar.prototype.setSelectBarDrawable = function(drawable) {};

/**
 * 设置进度起始值
 * @param {Number} min 起始值
 */
ht.ui.ProgressBar.prototype.setMin = function(min) {};

/**
 * 设置进度结束值
 * @param {Number} max 结束值
 */
ht.ui.ProgressBar.prototype.setMax = function(max) {};


/**
 * 设置当前进度值
 * @param {Number} value 进度值
 */
ht.ui.ProgressBar.prototype.setValue = function(value) {};

/**
 * 设置进度条显示方向
 * @param {String} orientation 显示方向，可选值为：'horizontal'|'vertical'
 */
ht.ui.ProgressBar.prototype.setOrientation = function(mode) {};

/**
 * 设置不确定模式
 * @param {Boolean} indeterminate 不确定模式；在不确定模式下，前景条的尺寸固定，位置跟随 value 变化；正常模式下，前景条的尺寸随着 value 变化增长或减小
 */
ht.ui.ProgressBar.prototype.setIndeterminate = function(indeterminate) {};

/**
 * 设置不确定模式下，前景条的尺寸；此值如果小于 1，表示百分比；大于 1 表示固定像素尺寸
 * @param {Number} fixedSize 尺寸值
 */
ht.ui.ProgressBar.prototype.setFixedSize = function(fixedSize) {};


/**
 * 设置是否裁切前景条；如果裁切，则在整个进度条范围内绘制前景条，并将其裁切只显示前景条范围内的内容；否则在前景条范围内绘制完整的进度条
 * @param {Boolean} clipSelectBar 是否裁切前景条
 */
ht.ui.ProgressBar.prototype.setClipSelectBar = function(clipSelectBar) {};

/**
 * 设置是否显示百分比文字
 * @param {Boolean} visible 是否显示百分比
 */
ht.ui.ProgressBar.prototype.setPercentTextVisible = function(visible) {};


/**
 * 设置百分比文字字体
 * @param {String} font 百分比文字字体
 */
ht.ui.ProgressBar.prototype.setPercentTextFont = function(font) {};


/**
 * 设置百分比文字颜色
 * @param {color} color 百分比文字颜色
 */
ht.ui.ProgressBar.prototype.setPercentTextColor = function(color) {};

/**
 * 获取工具提示文本内容
 * @return {String} 工具提示文本内容
 */
ht.ui.ProgressBar.prototype.getToolTip = function () {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.ProgressBar.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.ProgressBar.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.ProgressBar#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.ProgressBar.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.ProgressBar#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.ProgressBar.prototype.disableToolTip = function () {};

/**
 * 绘制进度条背景
 * @param {ht.ui.drawable.Drawable} drawable 背景 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ProgressBar.prototype.drawBar = function (drawable, x, y, width, height) {};


/**
 * 绘制进度条前景
 * @param {ht.ui.drawable.Drawable} drawable 前景 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ProgressBar.prototype.drawSelectBar = function (drawable, x, y, width, height) {};

/**
 * 绘制百分比文本
 * @param {String} text 文本内容
 * @param {String} font 字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ProgressBar.prototype.drawPercentText = function (text, font, color, x, y, width, height) {};








/**
 * 拉条组件<br><br>
 * 样式属性(不含从父类继承)：bar, barDrawable, selectBar, selectBarDrawable, barThickness,
 *       thumb, thumbDrawable, hoverThumb, hoverThumbDrawable, activeThumb, activeThumbDrawable, thumbWidth, thumbHeight,
 *       min, max, step, value, orientation, instant
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 * @example
 * slider = new ht.ui.Slider();
 * slider.setBar('rgb(232, 237, 242)');
 * slider.setSelectBar('rgb(26, 188, 156)');
 * slider.addToDOM(window, {x: 10, y: 20, width: 120, height: 26});
 */
ht.ui.Slider = function(properties) {};

/**
 * 获取拉条背景，可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Slider#getBarDrawable getBarDrawable}
 */
ht.ui.Slider.prototype.getBar = function() {};

/**
 * 获取拉条背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Slider.prototype.getBarDrawable = function() {};

/**
 * 获取拉条前景(即进度覆盖区域)，可以是颜色或者图片等
 * @return {Object} 前景
 * @see {@link ht.ui.Slider#getSelectBarDrawable getSelectBarDrawable}
 */
ht.ui.Slider.prototype.getSelectBar = function() {};

/**
 * 获取拉条前景(即进度覆盖区域)的 Drawable 对象，可以是颜色或者图片等
 * @return {ht.ui.drawable.Drawable} 前景
 */
ht.ui.Slider.prototype.getSelectBarDrawable = function() {};

/**
 * 获取拉条起始值
 * @return {Number} 起始值
 */
ht.ui.Slider.prototype.getMin = function() {};

/**
 * 获取拉条结束值
 * @return {Number} 结束值
 */
ht.ui.Slider.prototype.getMax = function() {};

/**
 * 获取当前值
 * @return {Number} 值
 */
ht.ui.Slider.prototype.getValue = function() {};

/**
 * 获取拖拽滑块时的步进值
 * @return {Number} 步进值
 */
ht.ui.Slider.prototype.getStep = function() {};

/**
 * 获取拉条显示方向
 * @return {String} 显示方向，值可能为：'horizontal'|'vertical'
 */
ht.ui.Slider.prototype.getOrientation = function() {};

/**
 * 是否是即时模式；在这种模式下，拖拽滑块过程中 value 属性变化事件会一直被派发，否则只有拖拽结束时才被派发
 * @return {Boolean} 是否是即时模式
 */
ht.ui.Slider.prototype.isInstant = function (){};

/**
 * 获取滑块宽度
 * @return {Number} 宽度值
 */
ht.ui.Slider.prototype.getThumbWidth = function() {};

/**
 * 获取滑块高度
 * @return {Number} 高度值
 */
ht.ui.Slider.prototype.getThumbHeight = function() {}

/**
 * 获取滑块状态，值可能为：'normal'|'hover'|'active'
 * @return {Number} 高度值
 */
ht.ui.Slider.prototype.getThumbState = function() {};

/**
 * 获取拉条背景的尺寸(水平显示方式的高度，垂直显示方式的宽度)
 * @return {Number} 尺寸
 */
ht.ui.Slider.prototype.getBarThickness = function() {};

/**
 * 获取正常状态下滑块样式，可以是颜色或者图片等
 * @return {Object} 滑块样式
 */
ht.ui.Slider.prototype.getThumb = function (){};

/**
 * 获取 hover 状态下的滑块样式
 * @return {Object} 滑块样式
 */
ht.ui.Slider.prototype.getHoverThumb = function (){};

/**
 * 获取 active 状态下的滑块样式
 * @return {Object} 滑块样式
 */
ht.ui.Slider.prototype.getActiveThumb = function (){};

/**
 * 获取正常状态下滑块样式的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 滑块样式
 */
ht.ui.Slider.prototype.getThumbDrawable = function (){};

/**
 * 获取 hover 状态下的滑块样式的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 滑块样式
 */
ht.ui.Slider.prototype.getHoverThumbDrawable = function (){};


/**
 * 获取 active 状态下的滑块样式样式
 * @return {ht.ui.drawable.Drawable} 滑块样式
 */
ht.ui.Slider.prototype.getActiveThumbDrawable = function (){};

/**
 * 获取滑块样式的 Drawable 对象；此函数根据滑块的状态(normal、hover、active) 返回相应的 Drawable，如：hover 状态下返回 getHoverThumbDrawable()
 * @param {String} [state] 状态，如果未指定，使用 slider.getThumbState()
 * @return {ht.ui.drawable.Drawable} 滑块样式
 */
ht.ui.Slider.prototype.getCurrentThumbDrawable = function (state){};


/**
 * 判断是否点击中滑块
 * @param {Event} event 事件对象
 * @return {Boolean} 是否点击中滑块
 */
ht.ui.Slider.prototype.thumbHitTest = function (event){};


/**
 * 绘制拉条背景
 * @param {ht.ui.drawable.Drawable} drawable 背景 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Slider.prototype.drawBar = function (drawable, x, y, width, height) {};


/**
 * 绘制拉条前景
 * @param {ht.ui.drawable.Drawable} drawable 前景 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {Number} clipX 裁剪范围 x 坐标
 * @param {Number} clipY 裁剪范围 y 坐标
 * @param {Number} clipWidth 裁剪范围的宽度
 * @param {Number} clipHeight 裁剪范围的高度
 */
ht.ui.Slider.prototype.drawSelectBar = function (drawable, x, y, width, height, clipX, clipY, clipWidth, clipHeight) {};

/**
 * 绘制滑块
 * @param {ht.ui.drawable.Drawable} drawable 滑块样式 Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.Slider.prototype.drawThumb = function (drawable, x, y, width, height) {};

/**
 * 设置拉条背景，可以是颜色或者图片等
 * @param {Object} bar 背景
 * @see {@link ht.ui.Slider#setBarDrawable setBarDrawable}
 */
ht.ui.Slider.prototype.setBar = function(bar) {};

/**
 * 设置拉条背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Slider.prototype.setBarDrawable = function(drawable) {};

/**
 * 设置拉条前景(即进度覆盖区域)，可以是颜色或者图片等
 * @param {Object} selectBar 前景
 * @see {@link ht.ui.Slider#setSelectBarDrawable setSelectBarDrawable}
 */
ht.ui.Slider.prototype.setSelectBar = function(selectBar) {};

/**
 * 设置拉条前景(即进度覆盖区域)的 Drawable 对象，可以是颜色或者图片等
 * @param {ht.ui.drawable.Drawable} drawable 前景
 */
ht.ui.Slider.prototype.setSelectBarDrawable = function(drawable) {};

/**
 * 设置拉条起始值
 * @param {Number} min 起始值
 */
ht.ui.Slider.prototype.setMin = function(min) {};

/**
 * 设置拉条结束值
 * @param {Number} max 结束值
 */
ht.ui.Slider.prototype.setMax = function(max) {};

/**
 * 设置拉条当前值
 * @param {Number} value 拉条的值
 */
ht.ui.Slider.prototype.setValue = function(value) {};


/**
 * 设置拖拽滑块时的步进值
 * @param {Number} step 步进值
 */
ht.ui.Slider.prototype.setStep = function(step) {};

/**
 * 设置拉条显示方向
 * @param {String} orientation 显示方向，可选值为：'horizontal'|'vertical'
 */
ht.ui.Slider.prototype.setOrientation = function(orientation) {};


/**
 * 设置即时模式；在这种模式下，拖拽滑块过程中 value 属性变化事件会一直被派发，否则只有拖拽结束时才被派发
 * @param {Boolean} instant 是否是即时模式
 */
ht.ui.Slider.prototype.setInstant = function (instant){};

/**
 * 设置滑块宽度
 * @param {Number} width 宽度值
 */
ht.ui.Slider.prototype.setThumbWidth = function(width) {};


/**
 * 设置滑块高度
 * @param {Number} height 高度值
 */
ht.ui.Slider.prototype.setThumbHeight = function(height) {};

/**
 * 设置拉条背景的尺寸
 * @param {Number} thickness 尺寸值：水平显示方式的高度，垂直显示方式的宽度
 */
ht.ui.Slider.prototype.setBarThickness = function(thickness) {};


/**
 * 设置正常状态下滑块样式，可以是颜色或者图片等
 * @param {Object} thumb 滑块样式
 * @see {@link ht.ui.Slider#setThumbDrawable setThumbDrawable}
 */
ht.ui.Slider.prototype.setThumb = function (thumb){};

/**
 * 设置 hover 状态下的滑块样式
 * @param {Object} thumb 滑块样式
 * @see {@link ht.ui.Slider#setHoverThumbDrawable setHoverThumbDrawable}
 */
ht.ui.Slider.prototype.setHoverThumb = function (thumb){};

/**
 * 设置 active 状态下的滑块样式
 * @param {Object} thumb 滑块样式
 * @see {@link ht.ui.Slider#setActiveThumbDrawable setActiveThumbDrawable}
 */
ht.ui.Slider.prototype.setActiveThumb = function (thumb){};

/**
 * 设置正常状态下滑块样式的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 滑块样式
 */
ht.ui.Slider.prototype.setThumbDrawable = function (drawable){};

/**
 * 设置 hover 状态下的滑块样式的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 滑块样式
 */
ht.ui.Slider.prototype.setHoverThumbDrawable = function (drawable){};


/**
 * 设置 active 状态下的滑块样式样式
 * @param {ht.ui.drawable.Drawable} drawable 滑块样式
 */
ht.ui.Slider.prototype.setActiveThumbDrawable = function (drawable){};

/**
 * 获取工具提示文本内容
 * @return {String} 工具提示文本内容
 */
ht.ui.Slider.prototype.getToolTip = function () {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.Slider.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.Slider.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.Slider#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.Slider.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.Slider#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.Slider.prototype.disableToolTip = function () {};






/**
 * 列表组件，用列表的方式呈现 DataModel 中的数据<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickData</code></td>
 * <td> { kind: 'clickData', data: data, nativeEvent: e } </td>
 * <td>单击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>doubleClickData</code></td>
 * <td> { kind: 'doubleClickData', data: data, nativeEvent: e } </td>
 * <td>双击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beginEdit</code></td>
 * <td> { kind: 'beginEdit', data: data, editor: editor, editorView: editorView } </td>
 * <td>开始编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endEdit</code></td>
 * <td> { kind: 'endEdit', valueChanged: valueChanged } </td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidateModel</code></td>
 * <td> { kind: 'invalidateModel' } </td>
 * <td>无效模型时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：labelColor, selectLabelColor, hoverLabelColor, unselectableLabelColor, labelFont,
 *       rowHeight, rowLineVisible, rowLineColor, sortFunc,
 *       visibleFunc, autoMakeVisible, selectBackground, selectBackgroundDrawable, hoverBackground, hoverBackgroundDrawable, focusBackground, focusBackgroundDrawable,
 *       iconWidth, iconHeight, iconStretch,
 *       checkIcon, checkIconDrawable, uncheckIcon, uncheckIconDrawable, radioOnIcon,radioOnIconDrawable, radioOffIcon,radioOffIconDrawable,
 *       editorClass, editable, rowHeightFunc, checkMode, dragEnabled, dropEnabled, dropLineColor, pannable, icongap, rowIndent, preferredSizeRowCountLimit,
 *       scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode, editorValidator
 * @param {ht.DataModel|Object} dataModel 绑定的数据模型或属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.ListView = function(dataModel) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.ListView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.ListView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.ListView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.ListView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.ListView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.ListView.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.ListView.prototype.getTranslateY = function (){};

/**
 * 是否允许拖拽平移
 * @return {Boolean} 是否允许拖拽平移
 */
ht.ui.ListView.prototype.isPannable = function (){};

/**
 * 是否启用拖拽
 * @return {Boolean} 是否启用拖拽
 */
ht.ui.ListView.prototype.isDragEnabled = function (){};


/**
 * 判断节点是否可以拖动；默认返回 true(即所有的节点都可以拖动)，可重写将某些节点设为不可拖动
 * @param {ht.Data} data 要拖动的节点
 * @param {ht.List} selection 当前选中的节点
 * @param {Event} e DOM 事件对象
 * @return {Boolean} 节点是否可以拖动
 */
ht.ui.ListView.prototype.isDraggable = function (data, selection, e){};

/**
 * 是否接受拖拽
 * @return {Boolean} 是否接受拖拽
 */
ht.ui.ListView.prototype.isDropEnabled = function (){};

/**
 * 接受拖拽数据；可重写此函数，根据拖拽事件加业务判断是否接受拖拽数据
 * @param {Event} e 拖拽事件，格式为：{source: source, target: target, data: data, kind: 'dragEnter', nativeEvent: event}
 */
ht.ui.ListView.prototype.acceptDrop = function (e){};

/**
 * 处理拖拽数据
 * <url>
 * <li>如果数据来自自身，则调整节点顺序</li>
 * <li>如果数据来自其它 List，则将节点移动到本组件中（其它列表中删除）</li>
 * <li>如果来自其它类型的组件，需要重写此函数处理</li>
 * </ul>
 * @param {Event} e 拖拽事件对象，格式为：{source: source, target: target, data: data, kind: 'dragCompleted', nativeEvent: event}
 * @param {Object} datas 节点列表或拖拽数据
 * @param {String} refType 拖拽目标相对在 refData 的位置(up、down、append)，一般无需关心此参数
 * @param {ht.Data} refData 拖拽目标相对定位的节点，一般无需关心此参数 
 */
ht.ui.ListView.prototype.handleDrop = function (dragEvent, datas, refType, refData){};

/**
 * 获取拖拽提示线颜色
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getDropLineColor = function (){};

/**
 * 获取行缩进
 * @return {Number} 缩进值
 */
ht.ui.ListView.prototype.getRowIndent = function (){};

/**
 * 获取计算 preferredSize 时要限制的数据行数
 * @return {Number} 限制行数
 */
ht.ui.ListView.prototype.getPreferredSizeRowCountLimit = function (){};

/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.ListView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.ListView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.ListView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.ListView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.ListView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.ListView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.ListView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.ListView.prototype.isCloseToVScrollBar = function (e){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.ListView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.ListView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.ListView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.ListView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.ListView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.ListView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.ListView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.ListView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置是否允许拖拽平移
 * @param {Boolean} pnnable 垂直滚动值
 */
ht.ui.ListView.prototype.setPannable = function (pannable) {};

/**
 * 设置是否启用拖拽
 * @param {Boolean} enabled 是否启用拖拽
 */
ht.ui.ListView.prototype.setDragEnabled = function (enabled){};

/**
 * 设置是否接受拖拽
 * @param {Boolean} enabled 是否接受拖拽
 */
ht.ui.ListView.prototype.setDropEnabled = function (enabled){};

/**
 * 设置拖拽提示线颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setDropLineColor = function (color){};


/**
 * 设置行缩进值
 * @param {Number} indent 缩进值
 */
ht.ui.ListView.prototype.setRowIndent = function (indent){};

/**
 * 设置计算 preferredSize 时要限制的数据行数；例如参数为 10，表示根据前 10 行数据的高度计算 preferredHeight
 * @param {Number} limit 限制行数
 */
ht.ui.ListView.prototype.setPreferredSizeRowCountLimit = function (limit){};

/**
 * 生成拖拽图片
 * @param {ht.Data} data 开始拖拽的节点
 * @param {ht.List} selection 开始拖拽时选中的节点列表
 * @return {HTMLCanvasElement|HTMLImageElement|HTVector|String} 图片，可以是 Canvas 对象、Image 对象、矢量对象或注册的图片名称
 */
ht.ui.ListView.prototype.createDragImage = function (data, selection){};


/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.ListView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.ListView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.ListView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.ListView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.ListView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.ListView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取工具提示文本内容，默认取出鼠标下的数据元素 data，然后返回 data.getToolTip()
 * @param {Event} e 事件对象
 * @return {String} 工具提示文本内容
 */
ht.ui.ListView.prototype.getToolTip = function (e) {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.ListView.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.ListView.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.ListView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.ListView.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.ListView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.ListView.prototype.disableToolTip = function () {};

/**
 * 增加底层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，底层绘制器绘制在组件最下面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * listView.addBottomPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.ListView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加顶层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，顶层绘制器绘制在组件最上面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * listView.addTopPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.ListView.prototype.addTopPainter = function (painter){};

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.ListView#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.ListView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.ListView.prototype.dm = function (dataModel){};

/**
 * 绘制数据元素的图标
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ListView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制数据元素的文本；注意：label 没有 width 参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} height 绘制范围的高度
 */
ht.ui.ListView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行内容，默认调用 drawIcon 和 drawLabel，如果返回值为 DOM 对象，则使用该 DOM 元素作为渲染器
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @return {HTMLElement} DOM 渲染器
 */
ht.ui.ListView.prototype.drawRow = function (g, data, selected, x, y, width, height){};

/**
 * 绘制行背景，默认仅在选中行时填充选中背景以及 hover 时填充 hover 背景，可重写自定义
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.ListView.prototype.drawRowBackground = function (drawable, x, y, width, height, data){};

/**
 * 获取数据元素图标的染色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('body.color')
 */
ht.ui.ListView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素图标的边框色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('border.color')
 */
ht.ui.ListView.prototype.getBorderColor = function (data){};

/**
 * 获取选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ListView#getRadioOnIconDrawable getRadioOnIconDrawable}
 */
ht.ui.ListView.prototype.getRadioOnIcon = function() {};

/**
 * 获取选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ListView.prototype.getRadioOnIconDrawable = function() {};

/**
 * 获取非选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ListView#getRadioOffIconDrawable getRadioOffIconDrawable}
 */
ht.ui.ListView.prototype.getRadioOffIcon = function() {};

/**
 * 获取非选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ListView.prototype.getRadioOffIconDrawable = function() {};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ListView#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.ListView.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ListView.prototype.getCheckIconDrawable = function() {};


/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.ListView#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.ListView.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.ListView.prototype.getUncheckIconDrawable = function() {};

/**
 * 传入逻辑坐标点或者交互事件对象，返回坐标下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 坐标下的数据元素
 */
ht.ui.ListView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取编辑器，可重写根据不同的数据元素返回不同的编辑器
 * @param {ht.Data} [data] 数据元素
 * @return {String|function} 编辑器类或类名
 */
ht.ui.ListView.prototype.getEditorClass = function (data){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.ListView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number} 索引
 */
ht.ui.ListView.prototype.getEndRowIndex = function (){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数获取 focus 状态数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.ListView.prototype.getFocusData = function (){};

/**
 * 获取 hover 状态的数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.ListView.prototype.getHoverData = function (){};

/**
 * 获取数据元素对应的图标，默认返回 data.getIcon()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 图标
 */
ht.ui.ListView.prototype.getIcon = function (data){};

/**
 * 返回图标之间的距离
 * @return {Number} 距离值
 */
ht.ui.ListView.prototype.getIconGap = function (){};

/**
 * 返回数据元素的图标宽度
 * @param {ht.Data} data 数据元素
 * @return {Number} 宽度值
 */
ht.ui.ListView.prototype.getIconWidth = function (){};

/**
 * 返回数据元素的图标高度
 * @param {ht.Data} data 数据元素
 * @return {Number} 高度值
 */
ht.ui.ListView.prototype.getIconHeight = function (){};

/**
 * 获取数据元素显示的文本，默认返回 data.toLabel()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本内容
 */
ht.ui.ListView.prototype.getLabel = function (data){};

/**
 * 获取数据元素的文本颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getLabelColor = function (data){};


/**
 * 获取 hover 状态下文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getHoverLabelColor = function (data){};

/**
 * 获取选中文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getSelectLabelColor = function (data){};


/**
 * 获取不可选中的文本颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getUnselectLabelColor = function (data){};

/**
 * 获取数据元素的文本颜色，默认实现根据选中状态返回 labelColor 或 hoverLabelColor 或 selectLabelColor，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getCurrentLabelColor = function (data){};

/**
 * 获取数据元素的文本字体，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本字体
 */
ht.ui.ListView.prototype.getLabelFont = function (data){};

/**
 * 获取当前显示的数据元素集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.ui.ListView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number} 行高
 */
ht.ui.ListView.prototype.getRowHeight = function (){};


/**
 * 获取行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @return {function} 行高函数
 */
ht.ui.ListView.prototype.getRowHeightFunc = function (){};

/**
 * 获取数据元素的索引
 * @param {ht.Data} data 数据元素
 * @return {Number} 索引值
 */
ht.ui.ListView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color} 颜色值
 */
ht.ui.ListView.prototype.getRowLineColor = function (){};

/**
 * 返回总行数
 * @return {Number} 行数
 */
ht.ui.ListView.prototype.getRowSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {function} 选择过滤器函数
 */
ht.ui.ListView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ListView#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.ListView.prototype.getSelectBackground = function (){};

/**
 * 获取行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ListView.prototype.getSelectBackgroundDrawable = function (){};

/**
 * 获取 hover 状态下的行背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ListView#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.ListView.prototype.getHoverBackground = function (){};

/**
 * 获取 hover 状态下行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ListView.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 判断在 check 模式下，是否点击中了 check 区域
 * @param {Event} e 事件对象
 * @return {Boolean} 是否点击中 check 区域
 */
ht.ui.ListView.prototype.checkHitTest = function (e){};

/**
 * 选中指定数据元素的前一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.ListView.prototype.selectPrevious = function(view) {};

/**
 * 选中指定数据元素的后一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.ListView.prototype.selectNext = function(view) {};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.ui.ListView#sm sm}
 */
ht.ui.ListView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.ListView.prototype.getSortFunc = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number} 索引值
 */
ht.ui.ListView.prototype.getStartRowIndex = function (){};

/**
 * 获取可见过滤器函数
 * @return {function} 可见过滤器函数
 */
ht.ui.ListView.prototype.getVisibleFunc = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas
 * @see {@link ht.ui.ListView#ivm ivm}
 */
ht.ui.ListView.prototype.invalidateModel = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.ui.ListView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否是 check 模式
 * @return {Boolean} 是否是 check 模式
 */
ht.ui.ListView.prototype.isCheckMode = function (){};

/**
 * 判断行线是否可见，默认为 true
 * @return {Boolean} 行线是否可见
 */
ht.ui.ListView.prototype.isRowLineVisible = function (){};

/**
 * 判断数据元素是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否可被选中
 */
ht.ui.ListView.prototype.isSelectable = function (data){};

/**
 * 判断数据元素是否被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.ListView.prototype.isSelected = function (data){};

/**
 * 判断数据元素是否可编辑，可重写自定义
 * @param {Event} e 交互事件
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可编辑
 */
ht.ui.ListView.prototype.isDataEditable = function (e, data){};

/**
 * 开始编辑数据，可以调用这个函数手动启动编辑
 * @param {ht.Data} data 数据元素
 * @param {String|Class|ht.ui.editor.Editor} editor 编辑器类或类名或实例
 */
ht.ui.ListView.prototype.beginEdit = function (data, editor){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑
 * @param {Boolean} setValue 是否将 Editor 中的值同步到模型中，如果为 false，Editor 中的值被丢弃
 */
ht.ui.ListView.prototype.endEdit = function (setValue){};

/**
 * 结束编辑后调用此函数将编辑器的值赋到节点属性中，默认修改节点的 name 属性，可重写此函数设置到自定义的属性上
 * @param {Object} value 值
 * @param {ht.Data} data 正在编辑的节点
 */
ht.ui.ListView.prototype.setDataValue = function (value, data){};

/**
 * 是否正在编辑数据
 * @return {Boolean} 正在编辑数据
 */
ht.ui.ListView.prototype.isEditing = function (){};

/**
 * 获取编辑器
 * @return {ht.ui.editor.Editor} 编辑器实例
 */
ht.ui.ListView.prototype.getEditor = function (){};


/**
 * 判断是否启用编辑
 * @return {Boolean} 是否可编辑
 */
ht.ui.ListView.prototype.isEditable = function (){};

/**
 * 根据 id 判断数据元素是否被选中
 * @param {String|Number} id 数据元素 id
 * @return {Boolean} 是否被选中
 */
ht.ui.ListView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.ui.ListView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见；如果参数为空，表示当前组件是否可见
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可见
 */
ht.ui.ListView.prototype.isVisible = function (data){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas，{@link ht.ui.ListView#invalidateModel invalidateModel} 的缩写
 * @see {@link ht.ui.ListView#invalidateModel invalidateModel}
 */
ht.ui.ListView.prototype.ivm = function (){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.ui.ListView.prototype.makeVisible = function (data){};

/**
 * 数据元素被点击时回调，可重写做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.ListView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重写做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.ListView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 删除底层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.ListView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除所有选中的数据元素
 */
ht.ui.ListView.prototype.removeSelection = function (){};

/**
 * 删除顶层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.ListView.prototype.removeTopPainter = function (painter){};

/**
 * 平移(滚动)组件至指定的行
 * @param {Number} index 行索引
 */
ht.ui.ListView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.ui.ListView.prototype.selectAll = function (){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v 是否自动显示选中的数据元素
 */
ht.ui.ListView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置 check 模式
 * @param {Boolean} checkMode 是否是 check 模式
 */
ht.ui.ListView.prototype.setCheckMode = function (checkMode){};

/**
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.ListView.prototype.setDataModel = function (dataModel){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数设置 focus 状态数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.ListView.prototype.setFocusData = function (data){};

/**
 * 根据 id 设置 focus 的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.ui.ListView.prototype.setFocusDataById = function (id){};

/**
 * 设置数据元素的文本颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setLabelColor = function (color){};

/**
 * 设置 hover 状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setHoverLabelColor = function (color){};


/**
 * 设置选中状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置不可选中的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setUnselectLabelColor = function (color){};

/**
 * 设置数据元素的文字字体
 * @param {String} font 字体
 */
ht.ui.ListView.prototype.setLabelFont = function (font){};

/**
 * 设置行高
 * @param {Number} height 高度值
 */
ht.ui.ListView.prototype.setRowHeight = function (height){};

/**
 * 设置行线颜色
 * @param {color} color 颜色值
 */
ht.ui.ListView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.ListView.prototype.setRowLineVisible = function (visible){};

/**
 * 设置选择过滤器函数
 * @param {function} func 过滤器函数
 */
ht.ui.ListView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ListView#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.ListView.prototype.setSelectBackground = function (background){};

/**
 * 设置行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ListView.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 状态下的行背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ListView#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.ListView.prototype.setHoverBackground = function (background){};

/**
 * 设置 hover 状态下行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ListView.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v 是否共享选中模型
 */
ht.ui.ListView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {function} func 排序函数
 */
ht.ui.ListView.prototype.setSortFunc = function (func){};

/**
 * 设置可见过滤器
 * @param {function} func 过滤器函数
 */
ht.ui.ListView.prototype.setVisibleFunc = function (func){};

/**
 * 获取选中模型，{@link ht.ui.ListView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.ui.ListView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.ui.ListView.prototype.sm = function (){};


/**
 * 设置选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ListView#setRadioOnIconDrawable setRadioOnIconDrawable}
 */
ht.ui.ListView.prototype.setRadioOnIcon = function(icon) {};

/**
 * 设置选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ListView.prototype.setRadioOnIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ListView#setRadioOffIconDrawable setRadioOffIconDrawable}
 */
ht.ui.ListView.prototype.setRadioOffIcon = function(icon) {};

/**
 * 设置非选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ListView.prototype.setRadioOffIconDrawable = function(drawable) {};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ListView#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.ListView.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ListView.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.ListView#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.ListView.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.ListView.prototype.setUncheckIconDrawable = function(drawable) {};

/**
 * 设置编辑器
 * @param {String|function} clazz 编辑器类或类名
 */
ht.ui.ListView.prototype.setEditorClass = function (clazz){};

/**
 * 设置是否可编辑
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.ListView.prototype.setEditable = function (editable){};


/**
 * 设置行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @param {function} func 行高函数
 * @example
 * list.setRowHeightFunc(function(data) {
 * 		if (data.getId() === 1) return 50;
 * 		else return 24;
 * });
 */
ht.ui.ListView.prototype.setRowHeightFunc = function (func){};


/**
 * 设置图标之间的距离
 * @param {Number} gap 距离值
 */
ht.ui.ListView.prototype.setIconGap = function (gap){};

/**
 * 设置数据元素的图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.ListView.prototype.setIconWidth = function (width){};

/**
 * 设置数据元素的图标高度
 * @param {Number} height 高度值
 */
ht.ui.ListView.prototype.setIconHeight = function (height){};

/**
 * 获取编辑组件的属性，默认返回 data.s('editorViewProperties')
 * @param {ht.Data} 数据元素
 */
ht.ui.ListView.prototype.getEditorViewProperties = function(data) { };


/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}]
 */
ht.ui.ListView.prototype.setDatas = function(datas) { };


/**
 * 获取编辑器验证函数
 * @return {Function} 数据验证函数
 */
ht.ui.ListView.prototype.getEditorValidator = function() { };


/**
 * 设置编辑器验证函数
 * @param {Function} validator 数据验证函数，格式为：function(olodValue, newValue, data, [column], editor, editorView, endEdit) {}
 * <br>其中最后一个参数 endEdit 表示是否要结束编辑，为 false 表示用户不打算结束编辑(比如假设 StringEditor 中文本框的 instant 为 true，每输入一个字符都会用 validator 验证且 endEdit 参数为 fale)
 * <br>返回值为 true 表示 newValue 格式合法
 * <br>返回值为 false 表示 newValue 格式不合法，同时阻止默认的停止编辑行为(让用户继续编辑)
 * <br>返回值为 end 表示 newValue 不合法，同时结束编辑(仅在 endEdit 为 true 时起作用)
 */
ht.ui.ListView.prototype.setEditorValidator = function(validator) { };


/**
 * 获取 icon 拉伸方式
 * @return {String} 拉伸方式
 */
ht.ui.ListView.prototype.getIconStretch = function() { };


/**
 * 设置 icon 拉伸方式
 * @param {String} stretch 拉伸方式：uniform|centerUniform|center|fill|null
 */
ht.ui.ListView.prototype.setIconStretch = function(stretch) { };


/**
 * 获取 check 模式下，点击行的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.ListView#getFocusBackgroundDrawable getFocusBackgroundDrawable}
 */
ht.ui.ListView.prototype.getFocusBackground = function (){};

/**
 * 获取 check 模式下，点击行背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.ListView.prototype.getFocusBackgroundDrawable = function (){};


/**
 * 设置 check 模式下，点击行的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.ListView#setFocusBackgroundDrawable setFocusBackgroundDrawable}
 */
ht.ui.ListView.prototype.setFocusBackground = function (background){};

/**
 * 设置 check 模式下，点击行背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.ListView.prototype.setFocusBackgroundDrawable = function (drawable){};
/**
 * 表格组件，用表格的方式呈现 DataModel 中的数据<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>clickData</code></td>
 * <td> { kind: 'clickData', data: data, nativeEvent: e } </td>
 * <td>单击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>doubleClickData</code></td>
 * <td> { kind: 'doubleClickData', data: data, nativeEvent: e } </td>
 * <td>双击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beginEdit</code></td>
 * <td> { kind: 'beginEdit', data: data, column: column, editor: editor, editorView: editorView } </td>
 * <td>开始编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endEdit</code></td>
 * <td> { kind: 'endEdit', valueChanged: valueChanged } </td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidateModel</code></td>
 * <td> { kind: 'invalidateModel' } </td>
 * <td>无效模型时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：labelColor, selectLabelColor, hoverLabelColor, labelFont,
 *       sortMode, batchEditable, rowHeight, rowLineVisible, rowLineColor,
 *       columnLineVisible, columnLineColor, sortFunc, visibleFunc,
 *       autoMakeVisible, selectBackground, selectBackgroundDrawable, hoverBackground, hoverBackgroundDrawable, focusBackground, focusBackgroundDrawable,
 *       iconWidth, iconHeight, rowHeightFunc, pannable,
 *       checkIcon, checkIconDrawable, uncheckIcon, uncheckIconDrawable, radioOnIcon, radioOnIconDrawable, radioOffIcon, radioOffIconDrawable, preferredSizeRowCountLimit,
 *       scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode, dragEnabled, dropEnabled, dropLineColor, fixedShadow, editorValidator
 * @param {ht.DataModel|Object} dataModel 绑定的数据模型或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TableView = function(dataModel) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.TableView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.TableView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.TableView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.TableView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.TableView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.TableView.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.TableView.prototype.getTranslateY = function (){};

/**
 * 获取计算 preferredSize 时要限制的数据行数
 * @return {Number} 限制行数
 */
ht.ui.TableView.prototype.getPreferredSizeRowCountLimit = function (){};

/**
 * 是否允许拖拽平移
 * @return {Boolean} 是否允许拖拽平移
 */
ht.ui.TableView.prototype.isPannable = function (){};

/**
 * 是否启用拖拽
 * @return {Boolean} 是否启用拖拽
 */
ht.ui.TableView.prototype.isDragEnabled = function (){};


/**
 * 判断行是否可以拖动；默认返回 true(即所有的行都可以拖动)，可重写将某些行设为不可拖动
 * @param {ht.Data} data 要拖动的行
 * @param {ht.List} selection 当前选中的行
 * @param {Event} e DOM 事件对象
 * @return {Boolean} 行是否可以拖动
 */
ht.ui.TableView.prototype.isDraggable = function (data, selection, e){};

/**
 * 是否接受拖拽
 * @return {Boolean} 是否接受拖拽
 */
ht.ui.TableView.prototype.isDropEnabled = function (){};

/**
 * 接受拖拽数据；可重写此函数，根据拖拽事件加业务判断是否接受拖拽数据
 * @param {Event} e 拖拽事件，格式为：{source: source, target: target, data: data, kind: 'dragEnter', nativeEvent: event}
 */
ht.ui.TableView.prototype.acceptDrop = function (e){};

/**
 * 处理拖拽数据
 * <url>
 * <li>如果数据来自自身，则调整节点顺序</li>
 * <li>如果数据来自其它 List，则将节点移动到本组件中（其它列表中删除）</li>
 * <li>如果来自其它类型的组件，需要重写此函数处理</li>
 * </ul>
 * @param {Event} e 拖拽事件对象，格式为：{source: source, target: target, data: data, kind: 'dragCompleted', nativeEvent: event}
 * @param {Object} datas 节点列表或拖拽数据
 * @param {String} refType 拖拽目标相对在 refData 的位置(up、down、append)，一般无需关心此参数
 * @param {ht.Data} refData 拖拽目标相对定位的节点，一般无需关心此参数 
 */
ht.ui.TableView.prototype.handleDrop = function (dragEvent, datas, refType, refData){};

/**
 * 获取拖拽提示线颜色
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getDropLineColor = function (){};


/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.TableView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.TableView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.TableView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.TableView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.TableView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TableView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TableView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TableView.prototype.isCloseToVScrollBar = function (e){};

/**
 * 锁定列的阴影是否可见，可重写实现自定义的阴影是否可见逻辑
 * @param {Number} scrollBarIndent 滚动条缩进
 * @param {Number} translateX 水平滚动值
 * @example
 * // 阴影始终可见
 * tableView.isFixedShadowVisible = function(indent, translateX) {
 *      if (!isNaN(indent)) return true;
 * }
 */
ht.ui.TableView.prototype.isFixedShadowVisible = function (scrollBarIndent, translateX){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TableView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TableView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TableView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TableView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.TableView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.TableView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.TableView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.TableView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置计算 preferredSize 时要限制的数据行数；例如参数为 10，表示根据前 10 行数据的高度计算 preferredHeight
 * @param {Number} limit 限制行数
 */
ht.ui.TableView.prototype.setPreferredSizeRowCountLimit = function (limit){};

/**
 * 设置是否允许拖拽平移
 * @param {Boolean} pannable 是否允许拖拽平移
 */
ht.ui.TableView.prototype.setPannable = function (pannable){};


/**
 * 设置是否启用拖拽
 * @param {Boolean} enabled 是否启用拖拽
 */
ht.ui.TableView.prototype.setDragEnabled = function (enabled){};

/**
 * 设置是否接受拖拽
 * @param {Boolean} enabled 是否接受拖拽
 */
ht.ui.TableView.prototype.setDropEnabled = function (enabled){};

/**
 * 设置拖拽提示线颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setDropLineColor = function (color){};


/**
 * 生成拖拽图片
 * @param {ht.Data} data 开始拖拽的节点
 * @param {ht.List} selection 开始拖拽时选中的节点列表
 * @return {HTMLCanvasElement|HTMLImageElement|HTVector|String} 图片，可以是 Canvas 对象、Image 对象、矢量对象或注册的图片名称
 */
ht.ui.TableView.prototype.createDragImage = function (data, selection){};


/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TableView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.TableView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.TableView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.TableView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.TableView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.TableView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取工具提示文本内容，默认取出鼠标下的数据元素 data 和 列 column，然后返回 column.getToolTip(data)
 * @param {Event} e 事件对象
 * @return {String} 工具提示文本内容
 */
ht.ui.TableView.prototype.getToolTip = function (e) {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.TableView.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.TableView.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示
 * @see {@link ht.ui.TableView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TableView.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示
 * @see {@link ht.ui.TableView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TableView.prototype.disableToolTip = function () {};

/**
 * 增加底层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，底层绘制器绘制在组件最下面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * tableView.addBottomPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TableView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加顶层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，顶层绘制器绘制在组件最上面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * tableView.addTopPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TableView.prototype.addTopPainter = function (painter){};

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.TableView#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.TableView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.TableView.prototype.dm = function (dataModel){};

/**
 * 绘制单元格，可重写自定义单元格渲染，如果返回值为 DOM 对象，则使用该 DOM 元素作为渲染器
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.ui.Column} column 列
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement} DOM 渲染器
 */
ht.ui.TableView.prototype.drawCell = function (g, data, selected, column, x, y, width, height){};

/**
 * 绘制 check 列单元格，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.ui.Column} column 列信息
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @param {Object} view 当前的表格组件
 */
ht.ui.TableView.prototype.drawCheckColumnCell = function (g, data, selected, column, x, y, width, height, view){};


/**
 * 绘制行背景，默认仅在选中行时填充选中背景以及 hover 时填充 hover 背景，可重写自定义
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.TableView.prototype.drawRowBackground = function (drawable, x, y, width, height, data){};

/**
 * 获取选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableView#getRadioOnIconDrawable getRadioOnIconDrawable}
 */
ht.ui.TableView.prototype.getRadioOnIcon = function() {};

/**
 * 获取选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableView.prototype.getRadioOnIconDrawable = function() {};

/**
 * 获取非选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableView#getRadioOffIconDrawable getRadioOffIconDrawable}
 */
ht.ui.TableView.prototype.getRadioOffIcon = function() {};

/**
 * 获取非选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableView.prototype.getRadioOffIconDrawable = function() {};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableView#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.TableView.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @param {ht.Data} 数据行
 * @param {ht.ui.Column} 数据列
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableView.prototype.getCheckIconDrawable = function(data, column) {};

/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableView#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.TableView.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @param {ht.Data} 数据行
 * @param {ht.ui.Column} 数据列
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableView.prototype.getUncheckIconDrawable = function(data, column) {};

/**
 * 传入逻辑坐标点或者交互事件对象，返回坐标下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 坐标下的数据元素
 */
ht.ui.TableView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TableView.prototype.getDataModel = function (){};

/**
 * 获取交互事件所在的列
 * @param {Event} e 鼠标或 Touch 事件
 * @return {ht.ui.Column} 
 */
ht.ui.TableView.prototype.getColumnAt = function (e){};

/**
 * 获取 check 列
 * @return {ht.ui.Column} check 列
 */
ht.ui.TableView.prototype.getCheckColumn = function (){};

/**
 * 获取列线颜色
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getColumnLineColor = function (){};

/**
 * 获取列模型，列模型用于存储 Column 列对象信息
 * @return {ht.DataModel} 列模型
 */
ht.ui.TableView.prototype.getColumnModel = function (){};

/**
 * 默认返回 sortFunc 函数，当 sortColumn 不为空时将返回其对应的排序函数
 * @return {function} 排序函数
 */
ht.ui.TableView.prototype.getCurrentSortFunc = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number} 索引
 */
ht.ui.TableView.prototype.getEndRowIndex = function (){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数获取 focus 状态数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TableView.prototype.getFocusData = function (){};

/**
 * 获取 hover 状态的数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TableView.prototype.getHoverData = function (){};

/**
 * 返回数据元素的图标宽度
 * @param {ht.Data} data 数据元素
 * @return {Number} 宽度值
 */
ht.ui.TableView.prototype.getIconWidth = function (){};

/**
 * 返回数据元素的图标高度
 * @param {ht.Data} data 数据元素
 * @return {Number} 高度值
 */
ht.ui.TableView.prototype.getIconHeight = function (){};

/**
 * 获取数据元素显示的文本，默认返回 data.toLabel()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本内容
 */
ht.ui.TableView.prototype.getLabel = function (data){};

/**
 * 获取数据元素的文本颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getLabelColor = function (data){};

/**
 * 获取 hover 状态下文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getHoverLabelColor = function (data){};


/**
 * 获取选中文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getSelectLabelColor = function (data){};

/**
 * 获取数据元素的文本颜色，默认实现根据选中状态返回 labelColor 或 hoverLabelColor 或 selectLabelColor，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getCurrentLabelColor = function (data){};

/**
 * 获取数据元素的文本字体，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本字体
 */
ht.ui.TableView.prototype.getLabelFont = function (data){};

/**
 * 获取锁定列的阴影颜色
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getFixedShadow = function (){};

/**
 * 获取当前显示的数据元素集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.ui.TableView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number} 行高
 */
ht.ui.TableView.prototype.getRowHeight = function (){};


/**
 * 获取行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @return {function} 行高函数
 */
ht.ui.TableView.prototype.getRowHeightFunc = function (){};

/**
 * 获取数据元素的索引
 * @param {ht.Data} data 数据元素
 * @return {Number} 索引值
 */
ht.ui.TableView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color} 颜色值
 */
ht.ui.TableView.prototype.getRowLineColor = function (){};

/**
 * 返回当前可见行总数
 * @return {Number} 行数
 */
ht.ui.TableView.prototype.getRowSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {function} 选择过滤器函数
 */
ht.ui.TableView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TableView#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.TableView.prototype.getSelectBackground = function (){};

/**
 * 获取行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TableView.prototype.getSelectBackgroundDrawable = function (){};

/**
 * 获取 hover 状态下的行背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TableView#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.TableView.prototype.getHoverBackground = function (){};

/**
 * 获取 hover 状态下行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TableView.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 判断在 check 模式下，是否点击中了 check 区域
 * @param {Event} e 事件对象
 * @return {Boolean} 是否点击中 check 区域
 */
ht.ui.TableView.prototype.checkHitTest = function (e){};

/**
 * 选中指定数据元素的前一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TableView.prototype.selectPrevious = function(view) {};

/**
 * 选中指定数据元素的后一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TableView.prototype.selectNext = function(view) {};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.ui.TableView#sm sm}
 */
ht.ui.TableView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.TableView.prototype.getSortFunc = function (){};


/**
 * 获取当前排序列
 * @return {ht.ui.Column} 排序列
 */
ht.ui.TableView.prototype.getSortColumn = function (){};

/**
 * 获取排序方式
 * <ul>
 * <li>none: 不允许排序</li>
 * <li>bistate: 点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate: 点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 * @return {String} 排序方式
 */
ht.ui.TableView.prototype.getSortMode = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number} 索引值
 */
ht.ui.TableView.prototype.getStartRowIndex = function (){};

/**
 * 获取可见过滤器函数
 * @return {function} 可见过滤器函数
 */
ht.ui.TableView.prototype.getVisibleFunc = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas
 * @see {@link ht.ui.TableView#ivm ivm}
 */
ht.ui.TableView.prototype.invalidateModel = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.ui.TableView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否是 check 模式
 * @return {Boolean} 是否是 check 模式
 */
ht.ui.TableView.prototype.isCheckMode = function (){};

/**
 * 判断列线是否可见
 * @return {Boolean} 列线是否可见
 */
ht.ui.TableView.prototype.isColumnLineVisible = function (){};


/**
 * 判断行线是否可见，默认为 true
 * @return {Boolean} 行线是否可见
 */
ht.ui.TableView.prototype.isRowLineVisible = function (){};

/**
 * 判断数据元素是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否可被选中
 */
ht.ui.TableView.prototype.isSelectable = function (data){};

/**
 * 判断数据元素是否被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.TableView.prototype.isSelected = function (data){};

/**
 * 判断单元格是否可编辑(通过参数 e 可得到数据元素和列，也就是单元格)
 * @param {Event} e 交互事件
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可编辑
 */
ht.ui.TableView.prototype.isDataEditable = function (e, data){};

/**
 * 开始编辑数据，可以调用这个函数手动启动编辑
 * @param {ht.Data} data 数据元素
 * @param {Event|ht.ui.Column} 事件对象或 Column 实例
 * @param {String|Class|ht.ui.editor.Editor} editor 编辑器类或类名或实例
 */
ht.ui.TableView.prototype.beginEdit = function (data, column, editor){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑
 * @param {Boolean} setValue 是否将 Editor 中的值同步到模型中，如果为 false，Editor 中的值被丢弃
 */
ht.ui.TableView.prototype.endEdit = function (value, saveValue, data, column){};

/**
 * 是否正在编辑数据
 * @return {Boolean} 正在编辑数据
 */
ht.ui.TableView.prototype.isEditing = function (){};

/**
 * 获取编辑器
 * @return {ht.ui.editor.Editor} 编辑器实例
 */
ht.ui.TableView.prototype.getEditor = function (){};


/**
 * 是否启用批量编辑
 * @return {Boolean} 是否批量编辑
 */
ht.ui.TableView.prototype.isBatchEditable = function (){};


/**
 * 根据 id 判断数据元素是否被选中
 * @param {String|Number} id 数据元素 id
 * @return {Boolean} 是否被选中
 */
ht.ui.TableView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.ui.TableView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见；如果参数为空，表示当前组件是否可见
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可见
 */
ht.ui.TableView.prototype.isVisible = function (data){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas，{@link ht.ui.TableView#invalidateModel invalidateModel} 的缩写
 * @see {@link ht.ui.TableView#invalidateModel invalidateModel}
 */
ht.ui.TableView.prototype.ivm = function (){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.ui.TableView.prototype.makeVisible = function (data){};

/**
 * 平移组件以确保数据列在可见区域内
 * @param {ht.ui.Column} column 列对象
 */
ht.ui.TableView.prototype.makeColumnVisible = function (column){};

/**
 * 数据元素被点击时回调，可重写做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TableView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重写做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TableView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 删除底层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TableView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除所有选中的数据元素
 */
ht.ui.TableView.prototype.removeSelection = function (){};

/**
 * 删除顶层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TableView.prototype.removeTopPainter = function (painter){};

/**
 * 平移(滚动)组件至指定的行
 * @param {Number} index 行索引
 */
ht.ui.TableView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.ui.TableView.prototype.selectAll = function (){};


/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v 是否自动显示选中的数据元素
 */
ht.ui.TableView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置 check 模式，在 check 模式下，自动增加复选框列
 * @param {Boolean} checkMode 是否是 check 模式
 */
ht.ui.TableView.prototype.setCheckMode = function (checkMode){};

/**
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TableView.prototype.setDataModel = function (dataModel){};

/**
 * 在 checkMode 下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数设置 focus 状态数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TableView.prototype.setFocusData = function (data){};

/**
 * 根据 id 设置 focus 的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.ui.TableView.prototype.setFocusDataById = function (id){};

/**
 * 设置数据元素的文本颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setLabelColor = function (color){};

/**
 * 设置锁定列的阴影颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setFixedShadow = function (color){};

/**
 * 设置 hover 状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setHoverLabelColor = function (color){};

/**
 * 设置选中状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置数据元素的文字字体
 * @param {String} font 字体
 */
ht.ui.TableView.prototype.setLabelFont = function (font){};

/**
 * 设置行高
 * @param {Number} height 高度值
 */
ht.ui.TableView.prototype.setRowHeight = function (height){};

/**
 * 设置行线颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TableView.prototype.setRowLineVisible = function (visible){};

/**
 * 设置选择过滤器函数
 * @param {function} func 过滤器函数
 */
ht.ui.TableView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TableView#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.TableView.prototype.setSelectBackground = function (background){};

/**
 * 设置行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TableView.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 状态下的行背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TableView#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.TableView.prototype.setHoverBackground = function (background){};

/**
 * 设置 hover 状态下行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TableView.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v 是否共享选中模型
 */
ht.ui.TableView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {function} func 排序函数
 */
ht.ui.TableView.prototype.setSortFunc = function (func){};

/**
 * 设置可见过滤器
 * @param {function} func 过滤器函数
 */
ht.ui.TableView.prototype.setVisibleFunc = function (func){};

/**
 * 获取选中模型，{@link ht.ui.TableView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.ui.TableView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.ui.TableView.prototype.sm = function (){};

/**
 * 设置选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableView#setRadioOnIconDrawable setRadioOnIconDrawable}
 */
ht.ui.TableView.prototype.setRadioOnIcon = function(icon) {};

/**
 * 设置选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableView.prototype.setRadioOnIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableView#setRadioOffIconDrawable setRadioOffIconDrawable}
 */
ht.ui.TableView.prototype.setRadioOffIcon = function(icon) {};

/**
 * 设置非选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableView.prototype.setRadioOffIconDrawable = function(drawable) {};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableView#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.TableView.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableView.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableView#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.TableView.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableView.prototype.setUncheckIconDrawable = function(drawable) {};

/**
 * 设置行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @param {function} func 行高函数
 * @example
 * list.setRowHeightFunc(function(data) {
 * 		if (data.getId() === 1) return 50;
 * 		else return 24;
 * });
 */
ht.ui.TableView.prototype.setRowHeightFunc = function (func){};

/**
 * 设置数据元素的图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.TableView.prototype.setIconWidth = function (width){};

/**
 * 设置数据元素的图标高度
 * @param {Number} height 高度值
 */
ht.ui.TableView.prototype.setIconHeight = function (height){};

/**
 * 设置排序列
 * @param {ht.ui.Column} column 排序列
 */
ht.ui.TableView.prototype.setSortColumn = function (column){};

/**
 * 设置排序方式
 * @param {String} mode
 * <ul>
 * <li>none: 不允许排序</li>
 * <li>bistate: 点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate: 点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 */
ht.ui.TableView.prototype.setSortMode = function (mode){};

/**
 * 设置列线颜色
 * @param {color} color 颜色值
 */
ht.ui.TableView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TableView.prototype.setColumnLineVisible = function (visible){};

/**
 * 设置列模型，列模型用于存储 Column 列对象信息
 * @param {ht.DataModel} model 列模型
 */
ht.ui.TableView.prototype.setColumnModel = function (model){};

/**
 * 以 json 的方式配置表格中的列
 * @param {Array} columns json 列
 * @example // 示例：
 * tableView.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TableView.prototype.setColumns = function (columns){};

/**
 * 以 json 的方式配置表格中的列(新增)
 * @param {Array} columns json 列
 * @example // 示例：
 * tableView.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * },
 * {
 *  className: 'ht.ui.EnumColumn',
 *  datas: [
 *      { id: 0, label: 'Female' },
 *      { id: 1, label: 'Male' }
 *  ]
 * }
 * ]);
 */
ht.ui.TableView.prototype.addColumns = function(columns) {}


/**
 * 设置是否启用批量编辑
 * @param {Boolean} batchEditable 是否启用批量编辑
 */
ht.ui.TableView.prototype.setBatchEditable = function (batchEditable){};

/**
 * 获取编辑组件的属性，默认返回 column.s('editorViewProperties')
 * @param {ht.Data} 数据元素
 * @param {ht.ui.Column} 列
 */
ht.ui.TableView.prototype.getEditorViewProperties = function(data, column) { };


/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}]
 */
ht.ui.TableView.prototype.setDatas = function(datas) { };


/**
 * 获取编辑器验证函数
 * @return {Function} 数据验证函数
 */
ht.ui.TableView.prototype.getEditorValidator = function() { };


/**
 * 设置编辑器验证函数
 * @param {Function} validator 数据验证函数，格式为：function(olodValue, newValue, data, [column], editor, editorView, endEdit) {}
 * <br>其中最后一个参数 endEdit 表示是否要结束编辑，为 false 表示用户不打算结束编辑(比如假设 StringEditor 中文本框的 instant 为 true，每输入一个字符都会用 validator 验证且 endEdit 参数为 fale)
 * <br>返回值为 true 表示 newValue 格式合法
 * <br>返回值为 false 表示 newValue 格式不合法，同时阻止默认的停止编辑行为(让用户继续编辑)
 * <br>返回值为 end 表示 newValue 不合法，同时结束编辑(仅在 endEdit 为 true 时起作用)
 */
ht.ui.TableView.prototype.setEditorValidator = function(validator) { };


/**
 * 获取 check 模式下，点击行的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TableView#getFocusBackgroundDrawable getFocusBackgroundDrawable}
 */
ht.ui.TableView.prototype.getFocusBackground = function (){};

/**
 * 获取 check 模式下，点击行背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TableView.prototype.getFocusBackgroundDrawable = function (){};


/**
 * 设置 check 模式下，点击行的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TableView#setFocusBackgroundDrawable setFocusBackgroundDrawable}
 */
ht.ui.TableView.prototype.setFocusBackground = function (background){};

/**
 * 设置 check 模式下，点击行背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TableView.prototype.setFocusBackgroundDrawable = function (drawable){};
/**
 * 表头组件，常与 TableView 和 TreeTableView 结合呈现 Column 信息，并提供 Column 的排序、拖拽等交互操作功能<br><br>
 * 样式属性(不含从父类继承)：checkIcon, checkIconDrawable, uncheckIcon, uncheckIconDrawable, indeterminateIcon, indeterminateIconDrawable, sortDescIcon, sortDescIconDrawable, sortAscIcon, sortAscIconDrawable,
 *       labelColor, labelFont, iconWidth, iconHeight, columnPaddingLeft, columnPaddingRight,
 *       moveBackground, moveBackgroundDrawable, insertLine, insertLineDrawable, columnLineVisible, columnLineColor, resizable, movable
 * @param {ht.ui.TableView|ht.ui.TreeTableView|Object} tableView 表格组件或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TableHeader = function(tableView) {};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableHeader#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.TableHeader.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableHeader.prototype.getCheckIconDrawable = function() {};

/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableHeader#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.TableHeader.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableHeader.prototype.getUncheckIconDrawable = function() {};


/**
 * 获取半选中状态图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableHeader#getIndeterminateIconDrawable getIndeterminateIconDrawable}
 */
ht.ui.TableHeader.prototype.getIndeterminateIcon = function() {};

/**
 * 获取半选中状态图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableHeader.prototype.getIndeterminateIconDrawable = function() {};

/**
 * 获取降序图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableHeader#getSortDescIconDrawable getSortDescIconDrawable}
 */
ht.ui.TableHeader.prototype.getSortDescIcon = function() {};

/**
 * 获取降序图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableHeader.prototype.getSortDescIconDrawable = function() {};

/**
 * 获取升序图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TableHeader#getSortAscIconDrawable getSortAscIconDrawable}
 */
ht.ui.TableHeader.prototype.getSortAscIcon = function() {};

/**
 * 获取升序图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TableHeader.prototype.getSortAscIconDrawable = function() {};

/**
 * 绘制列头，可重写自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.ui.Column} column 列信息
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TableHeader.prototype.drawColumn = function (g, column, x, y, width, height){};

/**
 * 获取列线颜色
 * @return {color} 颜色值
 */
ht.ui.TableHeader.prototype.getColumnLineColor = function (){};

/**
 * 获取列线是否可见，默认为 true
 * @return {Boolean} 列线是否可见
 */
ht.ui.TableHeader.prototype.isColumnLineVisible = function (){};

/**
 * 获取移动列时可插入位置的提示线，可以是颜色或者图片等
 * @return {Object} 提示线
 * @see {@link ht.ui.TableHeader#getInsertLineDrawable getInsertLineDrawable}
 */
ht.ui.TableHeader.prototype.getInsertLine = function() {};

/**
 * 获取移动列时可插入位置的提示线的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 提示线
 */
ht.ui.TableHeader.prototype.getInsertLineDrawable = function() {};

/**
 * 获取列头文本内容，默认返回 column.toLabel()，可重写自定义
 * @param {ht.ui.Column} column 列
 * @return {String} 文本内容
 */
ht.ui.TableHeader.prototype.getLabel = function (column){};

/**
 * 获取列头文本水平对齐方式，默认返回 column.getAlign()，可重写自定义
 * @param {ht.ui.Column} column 列
 * @return {String}
 */
ht.ui.TableHeader.prototype.getLabelAlign = function (column){};

/**
 * 获取列头文本颜色
 * @param {ht.ui.Column} column 列
 * @return {color} 颜色值
 */
ht.ui.TableHeader.prototype.getLabelColor = function (column){};

/**
 * 获取列头文本字体
 * @param {ht.ui.Column} column 列
 * @return {String} 字体
 */
ht.ui.TableHeader.prototype.getLabelFont = function (column){};

/**
 * 获取移动列时的列头背景，可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TableHeader#getMoveBackgroundDrawable getMoveBackgroundDrawable}
 */
ht.ui.TableHeader.prototype.getMoveBackground = function (){};

/**
 * 获取移动列时的列头背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TableHeader.prototype.getMoveBackgroundDrawable = function (){};

/**
 * 获取绑定的表格组件
 * @return {ht.ui.TableView|ht.ui.TreeTableView}
 */
ht.ui.TableHeader.prototype.getTableView = function (){};

/**
 * 判断是否允许拖拽改变列顺序，默认为 true
 * @return {Boolean} 是否允许移动列头
 */
ht.ui.TableHeader.prototype.isMovable = function (){};

/**
 * 判断是否允许拖拽改变列宽，默认为 true
 * @return {Boolean} 是否允许拖拽改变列宽
 */
ht.ui.TableHeader.prototype.isResizable = function (){};

/**
 * 获取 check 列头选中模式
 * @return {String} 选中模式，值可能为：all|none|indeterminate
 */
ht.ui.TableHeader.prototype.getCheckMode = function (){};

/**
 * 返回图标宽度
 * @return {Number} 宽度值
 */
ht.ui.TableHeader.prototype.getIconWidth = function (){};

/**
 * 返回图标高度
 * @return {Number} 高度值
 */
ht.ui.TableHeader.prototype.getIconHeight = function (){};

/**
 * 判断在 check 模式下，是否点击中了 check 区域
 * @param {Event} e 事件对象
 * @return {Boolean} 是否点击中 check 区域
 */
ht.ui.TableHeader.prototype.checkIconHitTest = function (e){};

/**
 * 判断是否点击中了 resize 区域(两个 Column 中间的竖线)
 * @param {Event} e 事件对象
 * @return {Boolean} 是否点击中 resize 区域
 */
ht.ui.TableHeader.prototype.resizeHitTest = function (e){};

/**
 * 绘制插入提示线
 * @param {ht.ui.drawable.Drawable} drawable 提示线 Drawable
 * @param {Number} x 起点 x 坐标
 * @param {Number} y 起点 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TableHeader.prototype.drawInsertLine = function (drawable, x, y, width, height){};

/**
 * 绘制排序图标
 * @param {ht.ui.drawable.Drawable} drawable 图标 Drawable
 * @param {Number} x 起点 x 坐标
 * @param {Number} y 起点 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.ui.Column} column 当前绘制的列
 */
ht.ui.TableHeader.prototype.drawSortIcon = function (drawable, x, y, width, height, column){};

/**
 * 设置绑定的表格组件
 * @param {ht.ui.TableView|ht.ui.TreeTableView} tableView 表格组件
 */
ht.ui.TableHeader.prototype.setTableView = function(tableView) {};

/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableHeader#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.TableHeader.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableHeader.prototype.setCheckIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableHeader#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.TableHeader.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableHeader.prototype.setUncheckIconDrawable = function(drawable) {};


/**
 * 设置半选中状态图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableHeader#setIndeterminateIconDrawable setIndeterminateIconDrawable}
 */
ht.ui.TableHeader.prototype.setIndeterminateIcon = function() {};

/**
 * 设置半选中状态图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableHeader.prototype.setIndeterminateIconDrawable = function(drawable) {};


/**
 * 设置降序图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableHeader#setSortDescIconDrawable setSortDescIconDrawable}
 */
ht.ui.TableHeader.prototype.setSortDescIcon = function(icon) {};

/**
 * 设置降序图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableHeader.prototype.setSortDescIconDrawable = function(drawable) {};

/**
 * 设置升序图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TableHeader#setSortAscIconDrawable setSortAscIconDrawable}
 */
ht.ui.TableHeader.prototype.setSortAscIcon = function(icon) {};

/**
 * 设置升序图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TableHeader.prototype.setSortAscIconDrawable = function(drawable) {};

/**
 * 设置列线颜色
 * @param {color} color 颜色值
 */
ht.ui.TableHeader.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} visible 列线是否可见
 */
ht.ui.TableHeader.prototype.setColumnLineVisible = function (visible){};

/**
 * 设置移动列时可插入位置的提示线，可以是颜色或者图片等
 * @param {Object} insertLine 提示线
 * @see {@link ht.ui.TableHeader#setInsertLineDrawable setInsertLineDrawable}
 */
ht.ui.TableHeader.prototype.setInsertLine = function(insertLine) {};

/**
 * 设置移动列时可插入位置的提示线的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 提示线
 */
ht.ui.TableHeader.prototype.setInsertLineDrawable = function(drawable) {};

/**
 * 设置列头文本颜色
 * @param {color} color 颜色值
 */
ht.ui.TableHeader.prototype.setLabelColor = function (color){};

/**
 * 设置列头文本字体
 * @param {String} font 字体
 */
ht.ui.TableHeader.prototype.setLabelFont = function (font){};

/**
 * 设置是否允许拖拽改变列顺序
 * @param {Boolean} movable 是否允许拖拽改变列顺序
 */
ht.ui.TableHeader.prototype.setMovable = function (movable){};

/**
 * 设置移动列时的列头背景，可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TableHeader#setMoveBackgroundDrawable setMoveBackgroundDrawable}
 */
ht.ui.TableHeader.prototype.setMoveBackground = function (background){};

/**
 * 设置移动列时的列头背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TableHeader.prototype.setMoveBackgroundDrawable = function (drawable){};

/**
 * 设置是否允许拖拽改变列宽
 * @param {Boolean} reszable 是否允许拖拽改变列宽
 */
ht.ui.TableHeader.prototype.setResizable = function (resizable){};

/**
 * 设置 check 列头选中模式
 * @param {String} checkMode 选中模式，值为：all|none|indeterminate
 */
ht.ui.TableHeader.prototype.setCheckMode = function (checkMode){};

/**
 * 设置数据元素的图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.TableHeader.prototype.setIconWidth = function (width){};

/**
 * 设置数据元素的图标高度
 * @param {Number} height 高度值
 */
ht.ui.TableHeader.prototype.setIconHeight = function (height){};


/**
 * 获取每列左侧内边距，默认为空(从 ht.ui.Column#getPaddingLeft 取值)
 * @return {Number}
 */
ht.ui.TableHeader.prototype.getColumnPaddingLeft = function (){};


/**
 * 设置每列左侧内边距
 * @param {Number} columnPaddingLeft
 */
ht.ui.TableHeader.prototype.setColumnPaddingLeft = function (columnPaddingLeft){};


/**
 * 获取每列右侧内边距，默认为空(从 ht.ui.Column#getPaddingRight 取值)
 * @return {Number}
 */
ht.ui.TableHeader.prototype.getColumnPaddingRight = function (){};


/**
 * 设置每列右侧内边距
 * @param {Number} columnPaddingRight
 */
ht.ui.TableHeader.prototype.setColumnPaddingRight = function (columnPaddingRight){};


/**
 * 表尾组件，常与 TableView 和 TreeTableView 结合呈现 Column 的统计信息
 * 样式属性(不含从父类继承)：labelColor, labelFont, columnLineVisible, columnLineColor, columnPaddingLeft, columnPaddingRight
 * @param {ht.ui.TableView|ht.ui.TreeTableView|Object} tableView 表格组件或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TableFooter = function(tableView) {};

/**
 * 绘制列头，可重写自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.ui.Column} column 列信息
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TableFooter.prototype.drawColumn = function (g, column, x, y, width, height){};

/**
 * 获取统计值，可重写此函数，根据 column.getSummary() 返回自定义的统计数据
 * @param {ht.ui.Column} column 列对象
 * @param {ht.List} datas 行数据
 * @return {Object} 统计数据
 */
ht.ui.TableFooter.prototype.getSummary = function(column, datas) {};

/**
 * 获取列线颜色
 * @return {color} 颜色值
 */
ht.ui.TableFooter.prototype.getColumnLineColor = function (){};

/**
 * 获取列线是否可见，默认为 true
 * @return {Boolean} 列线是否可见
 */
ht.ui.TableFooter.prototype.isColumnLineVisible = function (){};

/**
 * 获取列头文本颜色
 * @param {ht.ui.Column} column 列
 * @return {color} 颜色值
 */
ht.ui.TableFooter.prototype.getLabelColor = function (column){};

/**
 * 获取列头文本字体
 * @param {ht.ui.Column} column 列
 * @return {String} 字体
 */
ht.ui.TableFooter.prototype.getLabelFont = function (column){};

/**
 * 获取绑定的表格组件
 * @return {ht.ui.TableView|ht.ui.TreeTableView}
 */
ht.ui.TableFooter.prototype.getTableView = function (){};

/**
 * 设置绑定的表格组件
 * @param {ht.ui.TableView|ht.ui.TreeTableView} tableView 表格组件
 */
ht.ui.TableFooter.prototype.setTableView = function(tableView) {};

/**
 * 设置列线颜色
 * @param {color} color 颜色值
 */
ht.ui.TableFooter.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} visible 列线是否可见
 */
ht.ui.TableFooter.prototype.setColumnLineVisible = function (visible){};

/**
 * 设置列头文本颜色
 * @param {color} color 颜色值
 */
ht.ui.TableFooter.prototype.setLabelColor = function (color){};

/**
 * 设置列头文本字体
 * @param {String} font 字体
 */
ht.ui.TableFooter.prototype.setLabelFont = function (font){};

/**
 * 获取每列左侧内边距，默认为空(从 ht.ui.Column#getPaddingLeft 取值)
 * @return {Number}
 */
ht.ui.TableFooter.prototype.getColumnPaddingLeft = function (){};


/**
 * 设置每列左侧内边距
 * @param {Number} columnPaddingLeft
 */
ht.ui.TableFooter.prototype.setColumnPaddingLeft = function (columnPaddingLeft){};


/**
 * 获取每列右侧内边距，默认为空(从 ht.ui.Column#getPaddingRight 取值)
 * @return {Number}
 */
ht.ui.TableFooter.prototype.getColumnPaddingRight = function (){};


/**
 * 设置每列右侧内边距
 * @param {Number} columnPaddingRight
 */
ht.ui.TableFooter.prototype.setColumnPaddingRight = function (columnPaddingRight){};


/**
 * 表格面板，这个一个专用容器组件，内部自动创建 TableHeader, TableView, TableFooter 三个子组件并自动布局(TableFooter 默认隐藏)，
 * 可以通过 getTableHeader(), getTableView(), getTableTooter() 获取出来进行修改
 * @param {ht.DataModel | ht.ui.TableView | Object} [tableView] 数据容器或表格组件或是属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 */
ht.ui.TablePane = function(tableView) {};

/**
 * 以 json 的方式配置表格中的列(新增)，内部调用 getTableView().addColumns(columns)
 * @param {Array} columns json 列
 * @example // 示例：
 * tablePane.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TablePane.prototype.addColumns = function(columns) {}

/**
 /**
 * 获取列模型，列模型用于存储 Column 列对象信息；内部调用 getTableView().getColumnModel()
 * @return {ht.DataModel} 列模型
 */
ht.ui.TablePane.prototype.getColumnModel = function (){};

/**
 * 获取绑定的数据模型；内部调用 getTableView().getDataModel()
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TablePane.prototype.getDataModel = function (){};

/**
 * 获取表头组件
 * @return {ht.ui.TableHeader} 表头组件
 */
ht.ui.TablePane.prototype.getTableHeader = function (){};


/**
 * 获取表尾组件
 * @return {ht.ui.TableFooter} 表头组件
 */
ht.ui.TablePane.prototype.getTableFooter = function (){};


/**
 * 获取表格组件
 * @return {ht.ui.TableView} 表格组件
 */
ht.ui.TablePane.prototype.getTableView = function (){};

/**
 * 以 json 的方式配置表格中的列；内部调用 getTableView().setColumns(columns)
 * @param {Array} columns json 列
 * @example // 示例：
 * tablePane.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TablePane.prototype.setColumns = function (columns){};


/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}]
 */
ht.ui.TablePane.prototype.setDatas = function(datas) { };
/**
 * 树表格面板，这个一个特殊的容器组件，内部自动创建 TableHeader, TreeTableView, TableFooter 三个子组件并自动布局(TableFooter 默认隐藏)，
 * 可以通过 getTableHeader(), getTableView(), getTableFooter() 获取出来进行修改
 * @param {ht.DataModel | ht.ui.TreeTableView | Object} [treeTableView] 数据容器或树表组件或是属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 */
ht.ui.TreeTablePane = function(treeTableView) {};

/**
 * 以 json 的方式配置表格中的列(新增)，内部调用 getTableView().addColumns(columns)
 * @param {Array} columns json 列
 * @example // 示例：
 * treeTablePane.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TreeTablePane.prototype.addColumns = function(columns) {}

/**
 * 获取列模型，列模型用于存储 Column 列对象信息；内部调用 getTableView().getColumnModel()
 * @return {ht.DataModel} 列模型
 */
ht.ui.TreeTablePane.prototype.getColumnModel = function (){};

/**
 * 获取绑定的数据模型；内部调用 getTableView().getDataModel()
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TreeTablePane.prototype.getDataModel = function (){};

/**
 * 获取表头组件
 * @return {ht.ui.TableHeader} 表头组件
 */
ht.ui.TreeTablePane.prototype.getTableHeader = function (){};

/**
 * 获取表尾组件
 * @return {ht.ui.TableFooter} 表头组件
 */
ht.ui.TreeTablePane.prototype.getTableFooter = function (){};

/**
 * 获取树表组件
 * @return {ht.ui.TreeTableView} 树表组件
 */
ht.ui.TreeTablePane.prototype.getTableView = function (){};

/**
 * 以 json 的方式配置表格中的列；内部调用 getTableView().setColumns(columns)
 * @param {Array} columns json 列
 * @example // 示例：
 * treeTablePane.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TreeTablePane.prototype.setColumns = function (columns){};


/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}] 或者 { name: 'Root', children: [ {name: 'Child1'} ]}
 */
ht.ui.TreeTablePane.prototype.setDatas = function(datas) { };
/**
 * 树组件，以层次树的方式呈现 DataModel 中数据元素及父子关系<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>expandAll</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'expandAll', // 事件类型
 *      source: treeView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 expandAll 展开所有节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>collapseAll</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'collapseAll', // 事件类型
 *      source: treeView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 collapseAll 合并所有节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>expand</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'expand', // 事件类型
 *      data: data, // 被展开的数据元素
 *      source: treeView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 expand 展开单个节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>collapse</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'collapse', // 事件类型
 *      data: data, // 被合并的数据元素
 *      source: treeView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 collapse 合并单个节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>clickData</code></td>
 * <td> { kind: 'clickData', data: data, nativeEvent: e } </td>
 * <td>单击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>doubleClickData</code></td>
 * <td> { kind: 'doubleClickData', data: data, nativeEvent: e } </td>
 * <td>双击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beginEdit</code></td>
 * <td> { kind: 'beginEdit' } </td>
 * <td>开始编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endEdit</code></td>
 * <td> { kind: 'endEdit', valueChanged: valueChanged } </td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidateModel</code></td>
 * <td> { kind: 'invalidateModel' } </td>
 * <td>无效模型时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：labelColor, selectLabelColor, hoverLabelColor, labelFont,
 *           rootVisible, checkMode, sortFunc, visibleFunc,
 *           indent, rowHeight, rowLineVisible, rowLineColor,
 *           autoMakeVisible, iconGap,
 *           expandIcon, expandIconDrawable, collapseIcon, collapseIconDrawable,
 *           hoverExpandIcon, hoverExpandIconDrawable, hoverCollapseIcon, hoverCollapseIconDrawable,
 *           selectExpandIcon, selectExpandIconDrawable, selectCollapseIcon, selectCollapseIconDrawable,
 *           selectBackground, selectBackgroundDrawable, focusBackground, focusBackgroundDrawable, rowHeightFunc,
 *           hoverBackground, hoverBackgroundDrawable, iconWidth, iconHeight, iconStretch, dragEnabled, dropEnabled, dropLineColor, pannable,
 *           checkIcon, checkIconDrawable, uncheckIcon,uncheckIconDrawable, indeterminateIcon, indeterminateIconDrawable, adioOnIcon, radioOnIconDrawable, radioOffIcon, radioOffIconDrawable, rowIndent, preferredSizeRowCountLimit,
 *           editorClass, editable, scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode, editorValidator
 * @param {ht.DataModel|Object} dataModel 绑定的数据模型或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TreeView = function(dataModel) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.TreeView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.TreeView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.TreeView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.TreeView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.TreeView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.TreeView.prototype.getTranslateX = function (){};

/**
 * 是否允许拖拽平移
 * @return {Boolean} 是否允许拖拽平移
 */
ht.ui.TreeView.prototype.isPannable = function (){};


/**
 * 是否启用拖拽
 * @return {Boolean} 是否启用拖拽
 */
ht.ui.TreeView.prototype.isDragEnabled = function (){};


/**
 * 判断节点是否可以拖动；默认返回 true(即所有的节点都可以拖动)，可重写将某些节点设为不可拖动
 * @param {ht.Data} data 要拖动的节点
 * @param {ht.List} selection 当前选中的节点
 * @param {Event} e DOM 事件对象
 * @return {Boolean} 节点是否可以拖动
 */
ht.ui.TreeView.prototype.isDraggable = function (data, selection, e){};

/**
 * 是否接受拖拽
 * @return {Boolean} 是否接受拖拽
 */
ht.ui.TreeView.prototype.isDropEnabled = function (){};

/**
 * 接受拖拽数据；可重写此函数，根据拖拽事件加业务判断是否接受拖拽数据
 * @param {Event} e 拖拽事件，格式为：{source: source, target: target, data: data, kind: 'dragEnter', nativeEvent: event}
 */
ht.ui.TreeView.prototype.acceptDrop = function (e){};

/**
 * 处理拖拽数据
 * <url>
 * <li>如果数据来自自身，则调整节点顺序</li>
 * <li>如果数据来自其它 List，则将节点移动到本组件中（其它列表中删除）</li>
 * <li>如果来自其它类型的组件，需要重写此函数处理</li>
 * </ul>
 * @param {Event} e 拖拽事件对象，格式为：{source: source, target: target, data: data, kind: 'dragCompleted', nativeEvent: event}
 * @param {Object} datas 节点列表或拖拽数据
 * @param {String} refType 拖拽目标相对在 refData 的位置(up、down、parent、append)，一般无需关心此参数
 * @param {ht.Data} refData 拖拽目标相对定位的节点，一般无需关心此参数 
 */
ht.ui.TreeView.prototype.handleDrop = function (dragEvent, datas, refType, refData){};

/**
 * 获取拖拽提示线颜色
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getDropLineColor = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.TreeView.prototype.getTranslateY = function (){};

/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.TreeView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.TreeView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.TreeView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.TreeView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.TreeView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TreeView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TreeView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TreeView.prototype.isCloseToVScrollBar = function (e){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TreeView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TreeView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TreeView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TreeView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.TreeView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.TreeView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.TreeView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.TreeView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置是否允许拖拽平移
 * @param {Boolean} pannable 是否允许拖拽平移
 */
ht.ui.TreeView.prototype.setPannable = function (pannable) {};

/**
 * 设置是否启用拖拽
 * @param {Boolean} enabled 是否启用拖拽
 */
ht.ui.TreeView.prototype.setDragEnabled = function (enabled){};

/**
 * 设置是否接受拖拽
 * @param {Boolean} enabled 是否接受拖拽
 */
ht.ui.TreeView.prototype.setDropEnabled = function (enabled){};

/**
 * 设置拖拽提示线颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setDropLineColor = function (color){};


/**
 * 生成拖拽图片
 * @param {ht.Data} data 开始拖拽的节点
 * @param {ht.List} selection 开始拖拽时选中的节点列表
 * @return {HTMLCanvasElement|HTMLImageElement|HTVector|String} 图片，可以是 Canvas 对象、Image 对象、矢量对象或注册的图片名称
 */
ht.ui.TreeView.prototype.createDragImage = function (data, selection){};

/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TreeView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.TreeView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.TreeView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.TreeView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.TreeView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.TreeView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取工具提示文本内容，默认取出鼠标下的数据元素 data，然后返回 data.getToolTip()
 * @param {Event} e 事件对象
 * @return {String} 工具提示文本内容
 */
ht.ui.TreeView.prototype.getToolTip = function (e) {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.TreeView.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.TreeView.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.TreeView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TreeView.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.TreeView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TreeView.prototype.disableToolTip = function () {};

/**
 * 增加底层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，底层绘制器绘制在组件最下面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * treeView.addBottomPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TreeView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加顶层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，顶层绘制器绘制在组件最上面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * treeView.addTopPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TreeView.prototype.addTopPainter = function (painter){};

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.TreeView#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.TreeView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.TreeView.prototype.dm = function (dataModel){};

/**
 * 绘制数据元素的图标
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TreeView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制展开合并图标
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.drawToggleIcon = function (drawable, x, y, width, height, data){};

/**
 * 绘制行分割线
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {color} color 颜色值
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.drawRowLine = function (g, color, x, y, width, height, data){};

/**
 * 绘制数据元素的文本；注意：label 没有 width 参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TreeView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行内容
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TreeView.prototype.drawRow = function (g, data, selected, x, y, width, height){};

/**
 * 绘制行背景，默认仅在选中行时填充选中背景以及 hover 时填充 hover 背景，可重写自定义
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.drawRowBackground = function (drawable, x, y, width, height, data){};

/**
 * 获取数据元素图标的染色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('body.color')
 */
ht.ui.TreeView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素图标的边框色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('border.color')
 */
ht.ui.TreeView.prototype.getBorderColor = function (data){};

/**
 * 获取选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getRadioOnIconDrawable getRadioOnIconDrawable}
 */
ht.ui.TreeView.prototype.getRadioOnIcon = function() {};

/**
 * 获取选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getRadioOnIconDrawable = function() {};

/**
 * 获取非选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getRadioOffIconDrawable getRadioOffIconDrawable}
 */
ht.ui.TreeView.prototype.getRadioOffIcon = function() {};

/**
 * 获取非选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getRadioOffIconDrawable = function() {};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.TreeView.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getCheckIconDrawable = function() {};

/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.TreeView.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getUncheckIconDrawable = function() {};

/**
 * 获取半选中状态的图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getIndeterminateIconDrawable getIndeterminateIconDrawable}
 */
ht.ui.TreeView.prototype.getIndeterminateIcon = function() {};

/**
 * 获取半选中状态的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getIndeterminateIconDrawable = function() {};

/**
 * 获取展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getExpandIconDrawable getExpandIconDrawable}
 */
ht.ui.TreeView.prototype.getExpandIcon = function() {};

/**
 * 获取展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getExpandIconDrawable = function() {};

/**
 * 获取 hover 状态的展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getHoverExpandIconDrawable getHoverExpandIconDrawable}
 */
ht.ui.TreeView.prototype.getHoverExpandIcon = function() {};

/**
 * 获取 hover 状态的展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getHoverExpandIconDrawable = function() {};


/**
 * 获取 select 状态的展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getSelectExpandIconDrawable getSelectExpandIconDrawable}
 */
ht.ui.TreeView.prototype.getSelectExpandIcon = function() {};

/**
 * 获取 select 状态的展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getSelectExpandIconDrawable = function() {};

/**
 * 获取合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getCollapseIconDrawable getCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.getCollapseIcon = function() {};

/**
 * 获取合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getCollapseIconDrawable = function() {};


/**
 * 获取 hover 状态的合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getHoverCollapseIconDrawable getHoverCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.getHoverCollapseIcon = function() {};

/**
 * 获取 hover 状态的合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getHoverCollapseIconDrawable = function() {};

/**
 * 获取 select 状态的合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeView#getSelectCollapseIconDrawable getSelectCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.getSelectCollapseIcon = function() {};

/**
 * 获取 select 状态的合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getSelectCollapseIconDrawable = function() {};

/**
 * 根据参数 data 的状态，返回相应的 toggle 图标(expandIconDrawable 或 collapseIconDrawable)
 * @param {ht.Data} data 节点对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeView.prototype.getToggleIconDrawable = function(data) {};

/**
 * 根据参数 data 和选中状态，返回相应的行背景(hoverBackgroundDrawable 或 selectBackgroundDrawable)
 * @param {ht.Data} data 节点对象
 * @param {Boolean} selected 节点是否选中
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeView.prototype.getRowBackgroundDrawable = function(data, selected) {};

/**
 * 传入逻辑坐标点或者交互事件对象，返回坐标下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 坐标下的数据元素
 */
ht.ui.TreeView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 返回不同层次之间的缩进值
 * @return {Number} 缩进值
 */
ht.ui.TreeView.prototype.getIndent = function (){};

/**
 * 获取行缩进值；注意和 getIndent 的区别：rowIndent 控制所有行的缩进，而 indent 一般用于控制子行相对于父行的缩进
 * @return {Number} 缩进值
 */
ht.ui.TreeView.prototype.getRowIndent = function() {}

/**
 * 获取计算 preferredSize 时要限制的数据行数
 * @return {Number} 限制行数
 */
ht.ui.TreeView.prototype.getPreferredSizeRowCountLimit = function (){};

/**
 * 获取编辑器，可重写根据不同的数据元素返回不同的编辑器
 * @param {ht.Data} [data] 数据元素
 * @return {String|function} 编辑器类或类名
 */
ht.ui.TreeView.prototype.getEditorClass = function (data){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TreeView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number} 索引
 */
ht.ui.TreeView.prototype.getEndRowIndex = function (){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数获取 focus 状态数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TreeView.prototype.getFocusData = function (){};

/**
 * 获取 hover 状态的数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TreeView.prototype.getHoverData = function (){};

/**
 * 获取数据元素对应的图标，默认返回 data.getIcon()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 图标
 */
ht.ui.TreeView.prototype.getIcon = function (data){};

/**
 * 返回图标之间的距离
 * @return {Number} 距离值
 */
ht.ui.TreeView.prototype.getIconGap = function (){};

/**
 * 返回数据元素的图标宽度
 * @param {ht.Data} data 数据元素
 * @return {Number} 宽度值
 */
ht.ui.TreeView.prototype.getIconWidth = function (){};

/**
 * 返回数据元素的图标高度
 * @param {ht.Data} data 数据元素
 * @return {Number} 高度值
 */
ht.ui.TreeView.prototype.getIconHeight = function (){};

/**
 * 获取数据元素显示的文本，默认返回 data.toLabel()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本内容
 */
ht.ui.TreeView.prototype.getLabel = function (data){};

/**
 * 获取数据元素的文本颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getLabelColor = function (data){};

/**
 * 获取 hover 状态下文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getHoverLabelColor = function (data){};


/**
 * 获取选中文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getSelectLabelColor = function (data){};

/**
 * 获取数据元素的文本颜色，默认实现根据选中状态返回 labelColor 或 hoverLabelColor 或 selectLabelColor，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getCurrentLabelColor = function (data){};

/**
 * 获取数据元素的文本字体，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本字体
 */
ht.ui.TreeView.prototype.getLabelFont = function (data){};

/**
 * 获取当前显示的数据元素集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.ui.TreeView.prototype.getRowDatas = function (){};


/**
 * 获取所有可显示的数据元素集合，该集合已被排序和过滤(与 rowDatas 相比，此属性包含被折叠暂时不显示的数据元素)
 * @return {ht.List}
 */
ht.ui.TreeView.prototype.getAllRowDatas = function (){};

/**
 * 获取行高
 * @return {Number} 行高
 */
ht.ui.TreeView.prototype.getRowHeight = function (){};


/**
 * 获取行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @return {function} 行高函数
 */
ht.ui.TreeView.prototype.getRowHeightFunc = function (){};

/**
 * 获取数据元素的索引
 * @param {ht.Data} data 数据元素
 * @return {Number} 索引值
 */
ht.ui.TreeView.prototype.getRowIndex = function (data){};

/**
 * 判断行线是否可见，默认为 true
 * @return {Boolean} 行线是否可见
 */
ht.ui.TreeView.prototype.isRowLineVisible = function (){};
/**
 * 获取行线颜色
 * @return {color} 颜色值
 */
ht.ui.TreeView.prototype.getRowLineColor = function (){};

/**
 * 返回总行数
 * @return {Number} 行数
 */
ht.ui.TreeView.prototype.getRowSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {function} 选择过滤器函数
 */
ht.ui.TreeView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeView#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.TreeView.prototype.getSelectBackground = function (){};

/**
 * 获取行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeView.prototype.getSelectBackgroundDrawable = function (){};

/**
 * 获取 hover 状态下的行背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeView#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.TreeView.prototype.getHoverBackground = function (){};

/**
 * 获取 hover 状态下行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeView.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 判断在 check 模式下，是否点击中了 check 区域
 * @param {Event} e 事件对象
 * @param {Event} [data] 数据元素
 * @return {Boolean} 是否点击中 check 区域
 */
ht.ui.TreeView.prototype.checkHitTest = function (e, data){};

/**
 * 判断是否点击中了展开合并图标
 * @param {Event} e 事件对象
 * @param {Event} [data] 数据元素
 * @return {Boolean} 是否点击中展开合并图标
 */
ht.ui.TreeView.prototype.toggleHitTest = function (e, data){};

/**
 * 选中指定数据元素的前一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.selectPrevious = function(view) {};

/**
 * 选中指定数据元素的后一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.selectNext = function(view) {};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.ui.TreeView#sm sm}
 */
ht.ui.TreeView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.TreeView.prototype.getSortFunc = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number} 索引值
 */
ht.ui.TreeView.prototype.getStartRowIndex = function (){};

/**
 * 获取可见过滤器函数
 * @return {function} 可见过滤器函数
 */
ht.ui.TreeView.prototype.getVisibleFunc = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas
 * @see {@link ht.ui.TreeView#ivm ivm}
 */
ht.ui.TreeView.prototype.invalidateModel = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.ui.TreeView.prototype.isAutoMakeVisible = function (){};

/**
 * 获取 check 模式
 * <ul>
 * <li>null：默认值，不启用 check 选择模式</li>
 * <li>default：check 模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的数据元素</li>
 * <li>children：该 check 模式将同时影响点击中的数据元素及其孩子元素</li>
 * <li>descendant：该 check 模式将同时影响点击中的数据元素及其所有子孙元素</li>
 * <li>all：该 check 模式将同时影响点击中的数据元素及其所有父辈和子孙元素</li>
 * </ul>
 * @return {String} check 模式
 */
ht.ui.TreeView.prototype.getCheckMode = function (){};


/**
 * 判断数据元素是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否可被选中
 */
ht.ui.TreeView.prototype.isSelectable = function (data){};

/**
 * 判断数据元素是否被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeView.prototype.isSelected = function (data){};

/**
 * 判断数据元素是否处于半选中状态
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeView.prototype.isIndeterminateSelected = function (data){};


/**
 * 根据 id 判断数据元素是否被选中
 * @param {String|Number} id 数据元素 id
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeView.prototype.isSelectedById = function (id){};

/**
 * 判断数据元素是否可编辑，可重写自定义
 * @param {Event} e 交互事件
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可编辑
 */
ht.ui.TreeView.prototype.isDataEditable = function (e, data){};

/**
 * 开始编辑数据，可以调用这个函数手动启动编辑
 * @param {ht.Data} data 数据元素
 * @param {String|Class|ht.ui.editor.Editor} editor 编辑器类或类名或实例
 */
ht.ui.TreeView.prototype.beginEdit = function (data, editor){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑
 * @param {Boolean} setValue 是否将 Editor 中的值同步到模型中，如果为 false，Editor 中的值被丢弃
 */
ht.ui.TreeView.prototype.endEdit = function (setValue){};

/**
 * 结束编辑后调用此函数将编辑器的值赋到节点属性中，默认修改节点的 name 属性，可重写此函数设置到自定义的属性上
 * @param {Object} value 值
 * @param {ht.Data} data 正在编辑的节点
 */
ht.ui.TreeView.prototype.setDataValue = function (value, data){};

/**
 * 是否正在编辑数据
 * @return {Boolean} 正在编辑数据
 */
ht.ui.TreeView.prototype.isEditing = function (){};

/**
 * 获取编辑器
 * @return {ht.ui.editor.Editor} 编辑器实例
 */
ht.ui.TreeView.prototype.getEditor = function (){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.ui.TreeView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可编辑
 * @return {Boolean} 是否可编辑
 */
ht.ui.TreeView.prototype.isEditable = function (){};

/**
 * 判断数据元素是否可见；如果参数为空，表示当前组件是否可见
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可见
 */
ht.ui.TreeView.prototype.isVisible = function (data){};

/**
 * 获取数据元素的缩减层次，一般结合 indent 参数用于绘制
 * @param {ht.Data} data 数据元素
 * @return {Number} 层次
 */
ht.ui.TreeView.prototype.getLevel = function (data){};

/**
 * 获取延迟加载器
 * @return {Object}
 */
ht.ui.TreeView.prototype.getLoader = function (){};

/**
 * 获取根节点，默认为空，从DataModel#getRoots() 的对象开始展示
 * @return {ht.Data} 根节点
 */
ht.ui.TreeView.prototype.getRootData = function (){};


/**
 * 判断是否允许对数据元素的子元素排序，默认返回 true，可重写屏蔽孩子排序
 * @param {ht.Data} parent 数据元素
 * @return {Boolean} 是否允许排序
 */
ht.ui.TreeView.prototype.isChildrenSortable = function (parent){};

/**
 * 判断数据元素是否展开
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否展开
 */
ht.ui.TreeView.prototype.isExpanded = function (data){};

/**
 * 判断根节点是否可见
 * @return {Boolean} 
 */
ht.ui.TreeView.prototype.isRootVisible = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas，{@link ht.ui.TreeView#invalidateModel invalidateModel} 的缩写
 * @see {@link ht.ui.TreeView#invalidateModel invalidateModel}
 */
ht.ui.TreeView.prototype.ivm = function (){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.makeVisible = function (data){};

/**
 * 数据元素被点击时回调，可重写做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TreeView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重写做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TreeView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 合并数据元素时调用，可重写做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.onCollapsed = function (data){};

/**
 * 展开数据元素时调用，可重写做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.onExpanded = function (data){};

/**
 * 合并数据元素(如果数据元素有子元素并处于展开状态)
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.collapse = function (data){};

/**
 * 合并所有数据元素
 */
ht.ui.TreeView.prototype.collapseAll = function (){};

/**
 * 展开数据元素(如果数据元素有子元素并且处于合并状态)
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.expand = function (data){};

/**
 * 展开所有数据元素
 * @param {ht.Data} {data} 如果指定此参数，则只展开此节点以及此节点下的所有子孙节点；否则展开所有数据元素
 */
ht.ui.TreeView.prototype.expandAll = function (data){};

/**
 * 展开或合并数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.toggle = function (data){};

/**
 * 删除底层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TreeView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除所有选中的数据元素
 */
ht.ui.TreeView.prototype.removeSelection = function (){};

/**
 * 删除顶层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TreeView.prototype.removeTopPainter = function (painter){};

/**
 * 平移(滚动)组件至指定的行
 * @param {Number} index 行索引
 */
ht.ui.TreeView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.ui.TreeView.prototype.selectAll = function (){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v 是否自动显示选中的数据元素
 */
ht.ui.TreeView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置 check 模式
 * @param {String} checkMode
 * <ul>
 * <li>null：默认值，不启用 check 选择模式</li>
 * <li>default：check 模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的数据元素</li>
 * <li>children：该 check 模式将同时影响点击中的数据元素及其孩子元素</li>
 * <li>descendant：该 check 模式将同时影响点击中的数据元素及其所有子孙元素</li>
 * <li>all：该 check 模式将同时影响点击中的数据元素及其所有父辈和子孙元素</li>
 * </ul>
 */
ht.ui.TreeView.prototype.setCheckMode = function (checkMode){};

/*
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TreeView.prototype.setDataModel = function (dataModel){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数设置 focus 状态数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeView.prototype.setFocusData = function (data){};

/**
 * 根据 id 设置 focus 的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.ui.TreeView.prototype.setFocusDataById = function (id){};

/**
 * 设置数据元素的文本颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setLabelColor = function (color){};

/**
 * 设置 hover 状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setHoverLabelColor = function (color){};


/**
 * 设置选中状态文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置数据元素的文字字体
 * @param {String} font 字体
 */
ht.ui.TreeView.prototype.setLabelFont = function (font){};


/**
 * 设置行线颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TreeView.prototype.setRowLineVisible = function (visible){};

/**
 * 设置选择过滤器函数
 * @param {function} func 过滤器函数
 */
ht.ui.TreeView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeView#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.TreeView.prototype.setSelectBackground = function (background){};

/**
 * 设置行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeView.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 状态下的行背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeView#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.TreeView.prototype.setHoverBackground = function (background){};

/**
 * 设置 hover 状态下行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeView.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v 是否共享选中模型
 */
ht.ui.TreeView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {function} func 排序函数
 */
ht.ui.TreeView.prototype.setSortFunc = function (func){};

/**
 * 设置可见过滤器
 * @param {function} func 过滤器函数
 */
ht.ui.TreeView.prototype.setVisibleFunc = function (func){};

/**
 * 获取选中模型，{@link ht.ui.TreeView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.ui.TreeView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.ui.TreeView.prototype.sm = function (){};


/**
 * 设置选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setRadioOnIconDrawable setRadioOnIconDrawable}
 */
ht.ui.TreeView.prototype.setRadioOnIcon = function(icon) {};

/**
 * 设置选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setRadioOnIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setRadioOffIconDrawable setRadioOffIconDrawable}
 */
ht.ui.TreeView.prototype.setRadioOffIcon = function(icon) {};

/**
 * 设置非选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setRadioOffIconDrawable = function(drawable) {};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.TreeView.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.TreeView.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setUncheckIconDrawable = function(drawable) {};


/**
 * 设置半选中状态的图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setIndeterminateIconDrawable setIndeterminateIconDrawable}
 */
ht.ui.TreeView.prototype.setIndeterminateIcon = function() {};

/**
 * 设置半选中状态的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setIndeterminateIconDrawable = function(drawable) {};

/**
 * 设置展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setExpandIconDrawable setExpandIconDrawable}
 */
ht.ui.TreeView.prototype.setExpandIcon = function() {};

/**
 * 设置展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setExpandIconDrawable = function(drawable) {};


/**
 * 设置 hover 状态的展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setHoverExpandIconDrawable setHoverExpandIconDrawable}
 */
ht.ui.TreeView.prototype.setHoverExpandIcon = function() {};

/**
 * 设置 hover 状态的展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setHoverExpandIconDrawable = function(drawable) {};


/**
 * 设置 select 状态的展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setSelectExpandIconDrawable setSelectExpandIconDrawable}
 */
ht.ui.TreeView.prototype.setSelectExpandIcon = function() {};

/**
 * 设置 select 状态的展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setSelectExpandIconDrawable = function(drawable) {};

/**
 * 设置合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setCollapseIconDrawable setCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.setCollapseIcon = function() {};

/**
 * 设置合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setCollapseIconDrawable = function(drawable) {};


/**
 * 设置 hover 状态的合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setHoverCollapseIconDrawable setHoverCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.setHoverCollapseIcon = function() {};

/**
 * 设置 hover 状态的合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setHoverCollapseIconDrawable = function(drawable) {};

/**
 * 设置 select 状态的合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeView#setSelectCollapseIconDrawable setSelectCollapseIconDrawable}
 */
ht.ui.TreeView.prototype.setSelectCollapseIcon = function() {};

/**
 * 设置 select 状态的合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeView.prototype.setSelectCollapseIconDrawable = function(drawable) {};

/**
 * 设置编辑器
 * @param {String|function} clazz 编辑器类或类名
 */
ht.ui.TreeView.prototype.setEditorClass = function (clazz){};

/**
 * 设置是否可编辑
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.TreeView.prototype.setEditable = function (editable){};


/**
 * 设置行高
 * @param {Number} height 高度值
 */
ht.ui.TreeView.prototype.setRowHeight = function (height){};

/**
 * 设置行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @param {function} func 行高函数
 * @example
 * list.setRowHeightFunc(function(data) {
 * 		if (data.getId() === 1) return 50;
 * 		else return 24;
 * });
 */
ht.ui.TreeView.prototype.setRowHeightFunc = function (func){};

/**
 * 设置图标之间的距离
 * @param {Number} gap 距离值
 */
ht.ui.TreeView.prototype.setIconGap = function (gap){};

/**
 * 设置数据元素的图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.TreeView.prototype.setIconWidth = function (width){};

/**
 * 设置数据元素的图标高度
 * @param {Number} height 高度值
 */
ht.ui.TreeView.prototype.setIconHeight = function (height){};

/**
 * 设置不同层次的缩进值
 * @param {Number} indent 缩进值
 */
ht.ui.TreeView.prototype.setIndent = function (indent){};

/**
 * 设置行缩进值；注意和 setIndent 的区别：rowIndent 控制所有行的缩进，而 indent 一般用于控制子行相对于父行的缩进
 * @param {Number} rowIndent 缩进值
 */
ht.ui.TreeView.prototype.setRowIndent = function(rowIndent) {}


/**
 * 设置计算 preferredSize 时要限制的数据行数；例如参数为 10，表示根据前 10 行数据的高度计算 preferredHeight
 * @param {Number} limit 限制行数
 */
ht.ui.TreeView.prototype.setPreferredSizeRowCountLimit = function (limit){};

/**
 * 设置延迟加载器
 * @param {Object} loader
 * @example // 示例：
 * treeView.setLoader({
 * 	load: function(data) {
 * 		// 展开此数据元素时回调，可用于加载子节点
 * 	},
 * 	isLoaded: function(data) {
 * 		// 返回子结点是否已加载
 * 	}
 * });
 */
ht.ui.TreeView.prototype.setLoader = function (loader){};

/**
 * 指定根节点，默认为空，从 DataModel#getRoots() 的对象开始展示
 * @param {ht.Data} root 根节点
 */
ht.ui.TreeView.prototype.setRootData = function (root){};

/**
 * 设置根节点是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TreeView.prototype.setRootVisible = function (visible){};


/**
 * 获取编辑组件的属性，默认返回 data.s('editorViewProperties')
 * @param {ht.Data} 数据元素
 */
ht.ui.TreeView.prototype.getEditorViewProperties = function(data) { };


/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}] 或者 { name: 'Root', children: [ {name: 'Child1'} ]}
 */
ht.ui.TreeView.prototype.setDatas = function(datas) { };


/**
 * 获取编辑器验证函数
 * @return {Function} 数据验证函数
 */
ht.ui.TreeView.prototype.getEditorValidator = function() { };


/**
 * 设置编辑器验证函数
 * @param {Function} validator 数据验证函数，格式为：function(olodValue, newValue, data, [column], editor, editorView, endEdit) {}
 * <br>其中最后一个参数 endEdit 表示是否要结束编辑，为 false 表示用户不打算结束编辑(比如假设 StringEditor 中文本框的 instant 为 true，每输入一个字符都会用 validator 验证且 endEdit 参数为 fale)
 * <br>返回值为 true 表示 newValue 格式合法
 * <br>返回值为 false 表示 newValue 格式不合法，同时阻止默认的停止编辑行为(让用户继续编辑)
 * <br>返回值为 end 表示 newValue 不合法，同时结束编辑(仅在 endEdit 为 true 时起作用)
 */
ht.ui.TreeView.prototype.setEditorValidator = function(validator) { };


/**
 * 获取 icon 拉伸方式
 * @return {String} 拉伸方式
 */
ht.ui.TreeView.prototype.getIconStretch = function() { };


/**
 * 设置 icon 拉伸方式
 * @param {String} stretch 拉伸方式：uniform|centerUniform|center|fill|null
 */
ht.ui.TreeView.prototype.setIconStretch = function(stretch) { };


/**
 * 获取 check 模式下，点击行的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeView#getFocusBackgroundDrawable getFocusBackgroundDrawable}
 */
ht.ui.TreeView.prototype.getFocusBackground = function (){};

/**
 * 获取 check 模式下，点击行背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeView.prototype.getFocusBackgroundDrawable = function (){};


/**
 * 设置 check 模式下，点击行的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeView#setFocusBackgroundDrawable setFocusBackgroundDrawable}
 */
ht.ui.TreeView.prototype.setFocusBackground = function (background){};

/**
 * 设置 check 模式下，点击行背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeView.prototype.setFocusBackgroundDrawable = function (drawable){};
/**
 * 树表组件，以树和表格的组合方式呈现 DataModel 中数据元素属性及父子关系<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>expandAll</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'expandAll', // 事件类型
 *      source: treeTableView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 expandAll 展开所有节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>collapseAll</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'collapseAll', // 事件类型
 *      source: treeTableView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 collapseAll 合并所有节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>expand</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'expand', // 事件类型
 *      data: data, // 被展开的数据元素
 *      source: treeTableView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 expand 展开单个节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>collapse</code></td>
 * <td>
 * <pre>
 * {
 *      kind: 'collapse', // 事件类型
 *      data: data, // 被合并的数据元素
 *      source: treeTableView // 事件源
 * }
 * </pre>
 * </td>
 * <td>调用 collapse 合并单个节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>clickData</code></td>
 * <td> { kind: 'clickData', data: data, nativeEvent: e } </td>
 * <td>单击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>doubleClickData</code></td>
 * <td> { kind: 'doubleClickData', data: data, nativeEvent: e } </td>
 * <td>双击节点时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>beginEdit</code></td>
 * <td> { kind: 'beginEdit' } </td>
 * <td>开始编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endEdit</code></td>
 * <td> { kind: 'endEdit', valueChanged: valueChanged } </td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidateModel</code></td>
 * <td> { kind: 'invalidateModel' } </td>
 * <td>无效模型时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：labelColor, selectLabelColor, hoverLabelColor, labelFont,
 *           sortMode, batchEditable, indent, checkMode, rootVisible, sortFunc, visibleFunc,
 *           autoMakeVisible, rowLineColor, rowHeight, rowLineVisible,
 *           columnLineVisible, columnLineColor, selectBackground, selectBackgroundDrawable
 *           expandIcon, expandIconDrawable, collapseIcon, collapseIconDrawable,
 *           hoverExpandIcon, hoverExpandIconDrawable, hoverCollapseIcon, hoverCollapseIconDrawable,
 *           selectExpandIcon, selectExpandIconDrawable, selectCollapseIcon, selectCollapseIconDrawable,
 *           rowHeightFunc,
 *           hoverBackground, hoverBackgroundDrawable, focusBackground, focusBackgroundDrawable, iconWidth, iconHeight, iconGap,
 *           checkIcon, checkIconDrawable, uncheckIcon, uncheckIconDrawable, indeterminateIcon, indeterminateIconDrawable, radioOnIcon, radioOnIconDrawable, radioOffIcon, radioOffIconDrawable, preferredSizeRowCountLimit,
 *           scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode, dragEnabled, dropEnabled, dropLineColor, fixedShadow, editorValidator
 * @param {ht.DataModel|Object} dataModel 绑定的数据模型或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.TreeTableView = function(dataModel) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.TreeTableView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.TreeTableView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.TreeTableView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.TreeTableView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.TreeTableView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.TreeTableView.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.TreeTableView.prototype.getTranslateY = function (){};

/**
 * 获取计算 preferredSize 时要限制的数据行数
 * @return {Number} 限制行数
 */
ht.ui.TreeTableView.prototype.getPreferredSizeRowCountLimit = function (){};

/**
 * 是否允许拖拽平移
 * @return {Boolean} 是否允许拖拽平移
 */
ht.ui.TreeTableView.prototype.isPannable = function (){};

/**
 * 是否启用拖拽
 * @return {Boolean} 是否启用拖拽
 */
ht.ui.TreeTableView.prototype.isDragEnabled = function (){};


/**
 * 判断行是否可以拖动；默认返回 true(即所有的行都可以拖动)，可重写将某些行设为不可拖动
 * @param {ht.Data} data 要拖动的行
 * @param {ht.List} selection 当前选中的行
 * @param {Event} e DOM 事件对象
 * @return {Boolean} 行是否可以拖动
 */
ht.ui.TreeTableView.prototype.isDraggable = function (data, selection, e){};

/**
 * 是否接受拖拽
 * @return {Boolean} 是否接受拖拽
 */
ht.ui.TreeTableView.prototype.isDropEnabled = function (){};

/**
 * 接受拖拽数据；可重写此函数，根据拖拽事件加业务判断是否接受拖拽数据
 * @param {Event} e 拖拽事件，格式为：{source: source, target: target, data: data, kind: 'dragEnter', nativeEvent: event}
 */
ht.ui.TreeTableView.prototype.acceptDrop = function (e){};

/**
 * 处理拖拽数据
 * <url>
 * <li>如果数据来自自身，则调整节点顺序</li>
 * <li>如果数据来自其它列表了类组件，则将节点移动到本组件中（其它列表中删除）</li>
 * <li>如果来自其它类型的组件，需要重写此函数处理</li>
 * </ul>
 * @param {Event} e 拖拽事件对象，格式为：{source: source, target: target, data: data, kind: 'dragCompleted', nativeEvent: event}
 * @param {Object} datas 节点列表或拖拽数据
 * @param {String} refType 拖拽目标相对在 refData 的位置(up、down、append)，一般无需关心此参数
 * @param {ht.Data} refData 拖拽目标相对定位的节点，一般无需关心此参数 
 */
ht.ui.TreeTableView.prototype.handleDrop = function (dragEvent, datas, refType, refData){};

/**
 * 获取拖拽提示线颜色
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getDropLineColor = function (){};

/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.TreeTableView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.TreeTableView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.TreeTableView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.TreeTableView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.TreeTableView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TreeTableView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TreeTableView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.TreeTableView.prototype.isCloseToVScrollBar = function (e){};


/**
 * 锁定列的阴影是否可见，可重写实现自定义的阴影是否可见逻辑
 * @param {Number} scrollBarIndent 滚动条缩进
 * @param {Number} translateX 水平滚动值
 * @example
 * // 阴影始终可见
 * treeTableView.isFixedShadowVisible = function(indent, translateX) {
 *      if (!isNaN(indent)) return true;
 * }
 */
ht.ui.TreeTableView.prototype.isFixedShadowVisible = function (scrollBarIndent, translateX){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TreeTableView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.TreeTableView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TreeTableView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.TreeTableView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.TreeTableView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.TreeTableView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.TreeTableView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.TreeTableView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置计算 preferredSize 时要限制的数据行数；例如参数为 10，表示根据前 10 行数据的高度计算 preferredHeight
 * @param {Number} limit 限制行数
 */
ht.ui.TreeTableView.prototype.setPreferredSizeRowCountLimit = function (limit){};

/**
 * 设置是否允许拖拽平移
 * @param {Boolean} pannable 是否允许拖拽平移
 */
ht.ui.TreeTableView.prototype.setPannable = function (pannable){};

/**
 * 设置是否启用拖拽
 * @param {Boolean} enabled 是否启用拖拽
 */
ht.ui.TreeTableView.prototype.setDragEnabled = function (enabled){};

/**
 * 设置是否接受拖拽
 * @param {Boolean} enabled 是否接受拖拽
 */
ht.ui.TreeTableView.prototype.setDropEnabled = function (enabled){};

/**
 * 设置拖拽提示线颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setDropLineColor = function (color){};

/**
 * 生成拖拽图片
 * @param {ht.Data} data 开始拖拽的节点
 * @param {ht.List} selection 开始拖拽时选中的节点列表
 * @return {HTMLCanvasElement|HTMLImageElement|HTVector|String} 图片，可以是 Canvas 对象、Image 对象、矢量对象或注册的图片名称
 */
ht.ui.TreeTableView.prototype.createDragImage = function (data, selection){};

/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.TreeTableView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.TreeTableView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.TreeTableView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.TreeTableView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.TreeTableView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.TreeTableView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取工具提示文本内容，默认取出鼠标下的数据元素 data，然后返回 data.getToolTip()
 * @param {Event} e 事件对象
 * @return {String} 工具提示文本内容
 */
ht.ui.TreeTableView.prototype.getToolTip = function (e) {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.TreeTableView.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.TreeTableView.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.TreeTableView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TreeTableView.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示，同 setToolTipEnabled
 * @see {@link ht.ui.TreeTableView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.TreeTableView.prototype.disableToolTip = function () {};

/**
 * 增加底层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，底层绘制器绘制在组件最下面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * treeTableView.addBottomPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TreeTableView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加顶层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，顶层绘制器绘制在组件最上面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * treeTableView.addTopPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.TreeTableView.prototype.addTopPainter = function (painter){};

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.TreeTableView#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.TreeTableView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.TreeTableView.prototype.dm = function (dataModel){};

/**
 * 绘制数据元素的图标
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TreeTableView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制数据元素的文本；注意：label 没有 width 参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} height 绘制范围的高度
 */
ht.ui.TreeTableView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行背景，默认仅在选中行时填充选中背景以及 hover 时填充 hover 背景，可重写自定义
 * @param {ht.ui.drawable.Drawable} drawable Drawable 对象
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} width 绘制范围的宽度
 * @param {Number} height 绘制范围的高度
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.drawRowBackground = function (drawable, x, y, width, height, data){};

/**
 * 绘制单元格，可重写自定义单元格渲染，如果返回值为 DOM 对象，则使用该 DOM 元素作为渲染器
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.ui.Column} column 列
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement} DOM 渲染器
 */
ht.ui.TreeTableView.prototype.drawCell = function (g, data, selected, column, x, y, width, height){};

/**
 * 获取数据元素图标的染色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('body.color')
 */
ht.ui.TreeTableView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素图标的边框色，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回 data.s('border.color')
 */
ht.ui.TreeTableView.prototype.getBorderColor = function (data){};

/**
 * 获取选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getRadioOnIconDrawable getRadioOnIconDrawable}
 */
ht.ui.TreeTableView.prototype.getRadioOnIcon = function() {};

/**
 * 获取选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getRadioOnIconDrawable = function() {};

/**
 * 获取非选中状态的单选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getRadioOffIconDrawable getRadioOffIconDrawable}
 */
ht.ui.TreeTableView.prototype.getRadioOffIcon = function() {};

/**
 * 获取非选中状态的单选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getRadioOffIconDrawable = function() {};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.TreeTableView.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @param {ht.Data} 数据行
 * @param {ht.ui.Column} 数据列
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getCheckIconDrawable = function(data, column) {};

/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.TreeTableView.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @param {ht.Data} 数据行
 * @param {ht.ui.Column} 数据列
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getUncheckIconDrawable = function(data, column) {};


/**
 * 获取半选中状态的图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getIndeterminateIconDrawable getIndeterminateIconDrawable}
 */
ht.ui.TreeTableView.prototype.getIndeterminateIcon = function() {};

/**
 * 获取半选中状态的图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getIndeterminateIconDrawable = function() {};

/**
 * 获取展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getExpandIconDrawable getExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.getExpandIcon = function() {};

/**
 * 获取展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getExpandIconDrawable = function() {};


/**
 * 获取 hover 状态的展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getHoverExpandIconDrawable getHoverExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.getHoverExpandIcon = function() {};

/**
 * 获取 hover 状态的展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getHoverExpandIconDrawable = function() {};


/**
 * 获取 select 状态的展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getSelectExpandIconDrawable getSelectExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.getSelectExpandIcon = function() {};

/**
 * 获取 select 状态的展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getSelectExpandIconDrawable = function() {};

/**
 * 获取合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getCollapseIconDrawable getCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.getCollapseIcon = function() {};

/**
 * 获取合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getCollapseIconDrawable = function() {};


/**
 * 获取 hover 状态的合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getHoverCollapseIconDrawable getHoverCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.getHoverCollapseIcon = function() {};

/**
 * 获取 hover 状态的合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getHoverCollapseIconDrawable = function() {};

/**
 * 获取 select 状态的合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.TreeTableView#getSelectCollapseIconDrawable getSelectCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.getSelectCollapseIcon = function() {};

/**
 * 获取 select 状态的合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.TreeTableView.prototype.getSelectCollapseIconDrawable = function() {};

/**
 * 传入逻辑坐标点或者交互事件对象，返回坐标下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 坐标下的数据元素
 */
ht.ui.TreeTableView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取交互事件所在的列
 * @param {Event} e 鼠标或 Touch 事件
 * @return {ht.ui.Column} 
 */
ht.ui.TreeTableView.prototype.getColumnAt = function (e){};

/**
 * 返回树表组件默认插入的树列，该列显示树层次结构
 * @return {ht.ui.Column}
 */
ht.ui.TreeTableView.prototype.getTreeColumn = function (){};

/**
 * 判断列线是否可见
 * @return {Boolean} 列线是否可见
 */
ht.ui.TreeTableView.prototype.isColumnLineVisible = function (){};

/**
 * 获取列线颜色
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getColumnLineColor = function (){};

/**
 * 获取列模型，列模型用于存储 Column 列对象信息
 * @return {ht.DataModel} 列模型
 */
ht.ui.TreeTableView.prototype.getColumnModel = function (){};

/**
 * 默认返回 sortFunc 函数，当 sortColumn 不为空时将返回其对应的排序函数
 * @return {function} 排序函数
 */
ht.ui.TreeTableView.prototype.getCurrentSortFunc = function (){};


/**
 * 返回不同层次之间的缩进值
 * @return {Number} 缩进值
 */
ht.ui.TreeTableView.prototype.getIndent = function (){};

/**
 * 获取编辑器，可重写根据不同的数据元素返回不同的编辑器
 * @param {ht.Data} [data] 数据元素
 * @return {String|function} 编辑器类或类名
 */
ht.ui.TreeTableView.prototype.getEditorClass = function (data){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TreeTableView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number} 索引
 */
ht.ui.TreeTableView.prototype.getEndRowIndex = function (){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数获取 focus 状态数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TreeTableView.prototype.getFocusData = function (){};

/**
 * 获取 hover 状态的数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.TreeTableView.prototype.getHoverData = function (){};

/**
 * 获取数据元素对应的图标，默认返回 data.getIcon()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 图标
 */
ht.ui.TreeTableView.prototype.getIcon = function (data){};

/**
 * 返回图标之间的距离
 * @return {Number} 距离值
 */
ht.ui.TreeTableView.prototype.getIconGap = function (){};

/**
 * 返回数据元素的图标宽度
 * @param {ht.Data} data 数据元素
 * @return {Number} 宽度值
 */
ht.ui.TreeTableView.prototype.getIconWidth = function (){};

/**
 * 返回数据元素的图标高度
 * @param {ht.Data} data 数据元素
 * @return {Number} 高度值
 */
ht.ui.TreeTableView.prototype.getIconHeight = function (){};

/**
 * 获取数据元素显示的文本，默认返回 data.toLabel()，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本内容
 */
ht.ui.TreeTableView.prototype.getLabel = function (data){};

/**
 * 获取数据元素的文本颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getLabelColor = function (data){};

/**
 * 获取 hover 状态下文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getHoverLabelColor = function (data){};

/**
 * 获取选中状态下文本的颜色
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getSelectLabelColor = function (data){};

/**
 * 获取数据元素的文本颜色，默认实现根据选中状态返回 labelColor 或 hoverLabelColor 或 selectLabelColor，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getCurrentLabelColor = function (data){};

/**
 * 获取数据元素的文本字体，可重写自定义
 * @param {ht.Data} data 数据元素
 * @return {String} 文本字体
 */
ht.ui.TreeTableView.prototype.getLabelFont = function (data){};


/**
 * 获取锁定列的阴影颜色
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getFixedShadow = function (){};


/**
 * 获取当前显示的数据元素集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.ui.TreeTableView.prototype.getRowDatas = function (){};


/**
 * 获取所有可显示的数据元素集合，该集合已被排序和过滤(与 rowDatas 相比，此属性包含被折叠暂时不显示的数据元素)
 * @return {ht.List}
 */
ht.ui.TreeTableView.prototype.getAllRowDatas = function (){};

/**
 * 获取行高
 * @return {Number} 行高
 */
ht.ui.TreeTableView.prototype.getRowHeight = function (){};


/**
 * 获取行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @return {function} 行高函数
 */
ht.ui.TreeTableView.prototype.getRowHeightFunc = function (){};

/**
 * 获取数据元素的索引
 * @param {ht.Data} data 数据元素
 * @return {Number} 索引值
 */
ht.ui.TreeTableView.prototype.getRowIndex = function (data){};

/**
 * 判断行线是否可见，默认为 true
 * @return {Boolean} 行线是否可见
 */
ht.ui.TreeTableView.prototype.isRowLineVisible = function (){};
/**
 * 获取行线颜色
 * @return {color} 颜色值
 */
ht.ui.TreeTableView.prototype.getRowLineColor = function (){};

/**
 * 返回总行数
 * @return {Number} 行数
 */
ht.ui.TreeTableView.prototype.getRowSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {function} 选择过滤器函数
 */
ht.ui.TreeTableView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeTableView#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.getSelectBackground = function (){};

/**
 * 获取行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeTableView.prototype.getSelectBackgroundDrawable = function (){};

/**
 * 获取 hover 状态下的行背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeTableView#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.getHoverBackground = function (){};

/**
 * 获取 hover 状态下行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeTableView.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 判断在 check 模式下，是否点击中了 check 区域
 * @param {Event} e 事件对象
 * @param {Event} [data] 数据元素
 * @return {Boolean} 是否点击中 check 区域
 */
ht.ui.TreeTableView.prototype.checkHitTest = function (e, data){};

/**
 * 判断是否点击中了展开合并图标
 * @param {Event} e 事件对象
 * @param {Event} [data] 数据元素
 * @return {Boolean} 是否点击中展开合并图标
 */
ht.ui.TreeTableView.prototype.toggleHitTest = function (e, data){};

/**
 * 选中指定数据元素的前一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.selectPrevious = function(view) {};

/**
 * 选中指定数据元素的后一个数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.selectNext = function(view) {};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.ui.TreeTableView#sm sm}
 */
ht.ui.TreeTableView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.TreeTableView.prototype.getSortFunc = function (){};

/**
 * 获取当前排序列
 * @return {ht.ui.Column} 排序列
 */
ht.ui.TreeTableView.prototype.getSortColumn = function (){};

/**
 * 获取排序方式
 * <ul>
 * <li>none: 不允许排序</li>
 * <li>bistate: 点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate: 点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 * @return {String} 排序方式
 */
ht.ui.TreeTableView.prototype.getSortMode = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number} 索引值
 */
ht.ui.TreeTableView.prototype.getStartRowIndex = function (){};

/**
 * 获取可见过滤器函数
 * @return {function} 可见过滤器函数
 */
ht.ui.TreeTableView.prototype.getVisibleFunc = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas
 * @see {@link ht.ui.TreeTableView#ivm ivm}
 */
ht.ui.TreeTableView.prototype.invalidateModel = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.ui.TreeTableView.prototype.isAutoMakeVisible = function (){};

/**
 * 获取 check 模式
 * <ul>
 * <li>null：默认值，不启用 check 选择模式</li>
 * <li>default：check 模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的数据元素</li>
 * <li>children：该 check 模式将同时影响点击中的数据元素及其孩子元素</li>
 * <li>descendant：该 check 模式将同时影响点击中的数据元素及其所有子孙元素</li>
 * <li>all：该 check 模式将同时影响点击中的数据元素及其所有父辈和子孙元素</li>
 * </ul>
 * @return {String} check 模式
 */
ht.ui.TreeTableView.prototype.getCheckMode = function (){};


/**
 * 判断数据元素是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否可被选中
 */
ht.ui.TreeTableView.prototype.isSelectable = function (data){};

/**
 * 判断数据元素是否被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeTableView.prototype.isSelected = function (data){};

/**
 * 判断数据元素是否处于半选中状态
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeTableView.prototype.isIndeterminateSelected = function (data){};

/**
 * 根据 id 判断数据元素是否被选中
 * @param {String|Number} id 数据元素 id
 * @return {Boolean} 是否被选中
 */
ht.ui.TreeTableView.prototype.isSelectedById = function (id){};

/**
 * 判断数据元素是否可编辑
 * @param {Event} e 交互事件
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可编辑
 */
ht.ui.TreeTableView.prototype.isDataEditable = function (e, data){};

/**
 * 开始编辑数据，可以调用这个函数手动启动编辑
 * @param {ht.Data} data 数据元素
 * @param {Event|ht.ui.Column} 事件对象或 Column 实例
 * @param {String|Class|ht.ui.editor.Editor} editor 编辑器类或类名或实例
 */
ht.ui.TreeTableView.prototype.beginEdit = function (data, column, editor){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑
 * @param {Boolean} setValue 是否将 Editor 中的值同步到模型中，如果为 false，Editor 中的值被丢弃
 */
ht.ui.TreeTableView.prototype.endEdit = function (setValue){};


/**
 * 结束编辑数据，可以调用这个函数手动结束编辑，重写此函数可以实现编辑数据验证
 * @param {Object} value 单元格的值
 * @param {Boolean} saveValue 是否保存值
 * @param {ht.Data} data 正在编辑的数据行
 * @param {ht.ui.Column} column 正在编辑的数列
 * @example
 * var oldEndEditImpl = tableView.endEditImpl;
 * tableView.endEditImpl = function(value, saveValue, data, column) {
 * if (column.getName() === 'name') {
 *      if (value === '1') {
 *          // 数据不合法，保持编辑状态
 *          return;
 *      }
 *      else if (value === '2') {
 *          // 数据不合法，丢掉编辑值，同时结束编辑
 *          oldEndEditImpl.call(this, value, false, data, column);
 *          return;
 *      }
 *  }
 *  // 数据正常，结束编辑
 *  oldEndEditImpl.call(this, value, saveValue, data, column);
 *  
 * }
 */
ht.ui.TreeTableView.prototype.endEditImpl = function (value, saveValue, data, column){};

/**
 * 是否正在编辑数据
 * @return {Boolean} 正在编辑数据
 */
ht.ui.TreeTableView.prototype.isEditing = function (){};

/**
 * 获取编辑器
 * @return {ht.ui.editor.Editor} 编辑器实例
 */
ht.ui.TreeTableView.prototype.getEditor = function (){};


/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.ui.TreeTableView.prototype.isSelectionModelShared = function (){};


/**
 * 是否启用批量编辑
 * @return {Boolean} 是否批量编辑
 */
ht.ui.TreeTableView.prototype.isBatchEditable = function (){};

/**
 * 判断数据元素是否可见；如果参数为空，表示当前组件是否可见
 * @param {ht.Data} [data] 数据元素
 * @return {Boolean} 是否可见
 */
ht.ui.TreeTableView.prototype.isVisible = function (data){};

/**
 * 获取数据元素的缩减层次，一般结合 indent 参数用于绘制
 * @param {ht.Data} data 数据元素
 * @return {Number} 层次
 */
ht.ui.TreeTableView.prototype.getLevel = function (data){};

/**
 * 获取延迟加载器
 * @return {Object}
 */
ht.ui.TreeTableView.prototype.getLoader = function (){};

/**
 * 获取根节点，默认为空，从DataModel#getRoots() 的对象开始展示
 * @return {ht.Data} 根节点
 */
ht.ui.TreeTableView.prototype.getRootData = function (){};


/**
 * 判断是否允许对数据元素的子元素排序，默认返回 true，可重写屏蔽孩子排序
 * @param {ht.Data} parent 数据元素
 * @return {Boolean} 是否允许排序
 */
ht.ui.TreeTableView.prototype.isChildrenSortable = function (parent){};

/**
 * 判断数据元素是否展开
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 是否展开
 */
ht.ui.TreeTableView.prototype.isExpanded = function (data){};

/**
 * 判断根节点是否可见
 * @return {Boolean} 
 */
ht.ui.TreeTableView.prototype.isRootVisible = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rowDatas，{@link ht.ui.TreeTableView#invalidateModel invalidateModel} 的缩写
 * @see {@link ht.ui.TreeTableView#invalidateModel invalidateModel}
 */
ht.ui.TreeTableView.prototype.ivm = function (){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.makeVisible = function (data){};

/**
 * 平移组件以确保数据列在可见区域内
 * @param {ht.ui.Column} column 列对象
 */
ht.ui.TreeTableView.prototype.makeColumnVisible = function (column){};

/**
 * 数据元素被点击时回调，可重写做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TreeTableView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重写做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.ui.TreeTableView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 合并数据元素时调用，可重写做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.onCollapsed = function (data){};

/**
 * 展开数据元素时调用，可重写做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.onExpanded = function (data){};

/**
 * 合并数据元素(如果数据元素有子元素并处于展开状态)
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.collapse = function (data){};

/**
 * 合并所有数据元素
 */
ht.ui.TreeTableView.prototype.collapseAll = function (){};

/**
 * 展开数据元素(如果数据元素有子元素并且处于合并状态)
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.expand = function (data){};

/**
 * 展开所有数据元素
 * @param {ht.Data} {data} 如果指定此参数，则只展开此节点以及此节点下的所有子孙节点；否则展开所有数据元素
 */
ht.ui.TreeTableView.prototype.expandAll = function (data){};

/**
 * 展开或合并数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.toggle = function (data){};

/**
 * 删除底层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TreeTableView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除所有选中的数据元素
 */
ht.ui.TreeTableView.prototype.removeSelection = function (){};

/**
 * 删除顶层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.TreeTableView.prototype.removeTopPainter = function (painter){};

/**
 * 平移(滚动)组件至指定的行
 * @param {Number} index 行索引
 */
ht.ui.TreeTableView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.ui.TreeTableView.prototype.selectAll = function (){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v 是否自动显示选中的数据元素
 */
ht.ui.TreeTableView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置 check 模式
 * @param {String} checkMode
 * <ul>
 * <li>null：默认值，不启用 check 选择模式</li>
 * <li>default：check 模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的数据元素</li>
 * <li>children：该 check 模式将同时影响点击中的数据元素及其孩子元素</li>
 * <li>descendant：该 check 模式将同时影响点击中的数据元素及其所有子孙元素</li>
 * <li>all：该 check 模式将同时影响点击中的数据元素及其所有父辈和子孙元素</li>
 * </ul>
 */
ht.ui.TreeTableView.prototype.setCheckMode = function (checkMode){};

/*
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.TreeTableView.prototype.setDataModel = function (dataModel){};

/**
 * 在 check 模式下，点击一个数据元素使其背景变化但并不选中它，此时它处于 focus 状态<br>
 * 此函数设置 focus 状态数据元素
 * @param {ht.Data} data 数据元素
 */
ht.ui.TreeTableView.prototype.setFocusData = function (data){};

/**
 * 根据 id 设置 focus 的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.ui.TreeTableView.prototype.setFocusDataById = function (id){};

/**
 * 设置数据元素的文本颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setLabelColor = function (color){};

/**
 * 设置 hover 状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setHoverLabelColor = function (color){};

/**
 * 设置选中状态下的文字颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置数据元素的文字字体
 * @param {String} font 字体
 */
ht.ui.TreeTableView.prototype.setLabelFont = function (font){};

/**
 * 设置锁定列的阴影颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setFixedShadow = function (color){};

/**
 * 设置行label文字选中颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置行线颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TreeTableView.prototype.setRowLineVisible = function (visible){};

/**
 * 设置选择过滤器函数
 * @param {function} func 过滤器函数
 */
ht.ui.TreeTableView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeTableView#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.setSelectBackground = function (background){};

/**
 * 设置行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeTableView.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 状态下的行背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeTableView#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.setHoverBackground = function (background){};

/**
 * 设置 hover 状态下行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeTableView.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v 是否共享选中模型
 */
ht.ui.TreeTableView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {function} func 排序函数
 */
ht.ui.TreeTableView.prototype.setSortFunc = function (func){};

/**
 * 设置可见过滤器
 * @param {function} func 过滤器函数
 */
ht.ui.TreeTableView.prototype.setVisibleFunc = function (func){};

/**
 * 获取选中模型，{@link ht.ui.TreeTableView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.ui.TreeTableView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.ui.TreeTableView.prototype.sm = function (){};


/**
 * 设置选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setRadioOnIconDrawable setRadioOnIconDrawable}
 */
ht.ui.TreeTableView.prototype.setRadioOnIcon = function(icon) {};

/**
 * 设置选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setRadioOnIconDrawable = function(drawable) {};

/**
 * 设置非选中状态的单选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setRadioOffIconDrawable setRadioOffIconDrawable}
 */
ht.ui.TreeTableView.prototype.setRadioOffIcon = function(icon) {};

/**
 * 设置非选中状态的单选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setRadioOffIconDrawable = function(drawable) {};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.TreeTableView.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.TreeTableView.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setUncheckIconDrawable = function(drawable) {};

/**
 * 设置半选中状态的图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setIndeterminateIconDrawable setIndeterminateIconDrawable}
 */
ht.ui.TreeTableView.prototype.setIndeterminateIcon = function() {};

/**
 * 设置半选中状态的图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setIndeterminateIconDrawable = function(drawable) {};

/**
 * 设置展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setExpandIconDrawable setExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.setExpandIcon = function() {};

/**
 * 设置展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setExpandIconDrawable = function(drawable) {};


/**
 * 设置 hover 状态的展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setHoverExpandIconDrawable setHoverExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.setHoverExpandIcon = function() {};

/**
 * 设置 hover 状态的展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setHoverExpandIconDrawable = function(drawable) {};


/**
 * 设置 select 状态的展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setSelectExpandIconDrawable setSelectExpandIconDrawable}
 */
ht.ui.TreeTableView.prototype.setSelectExpandIcon = function() {};

/**
 * 设置 select 状态的展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setSelectExpandIconDrawable = function(drawable) {};

/**
 * 设置合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setCollapseIconDrawable setCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.setCollapseIcon = function() {};

/**
 * 设置合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setCollapseIconDrawable = function(drawable) {};

/**
 * 设置 hover 状态的合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setHoverCollapseIconDrawable setHoverCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.setHoverCollapseIcon = function() {};

/**
 * 设置 hover 状态的合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setHoverCollapseIconDrawable = function(drawable) {};

/**
 * 设置 select 状态的合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.TreeTableView#setSelectCollapseIconDrawable setSelectCollapseIconDrawable}
 */
ht.ui.TreeTableView.prototype.setSelectCollapseIcon = function() {};

/**
 * 设置 select 状态的合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.TreeTableView.prototype.setSelectCollapseIconDrawable = function(drawable) {};

/**
 * 设置编辑器
 * @param {String|function} clazz 编辑器类或类名
 */
ht.ui.TreeTableView.prototype.setEditorClass = function (clazz){};

/**
 * 设置是否可编辑
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.TreeTableView.prototype.setEditable = function (editable){};


/**
 * 设置行高
 * @param {Number} height 高度值
 */
ht.ui.TreeTableView.prototype.setRowHeight = function (height){};

/**
 * 设置行高函数，函数内可以根据不同的数据元素返回不同的高度值
 * @param {function} func 行高函数
 * @example
 * treeTableView.setRowHeightFunc(function(data) {
 * 		if (data.getId() === 1) return 50;
 * 		else return 24;
 * });
 */
ht.ui.TreeTableView.prototype.setRowHeightFunc = function (func){};

/**
 * 设置图标之间的距离
 * @param {Number} gap 距离值
 */
ht.ui.TreeTableView.prototype.setIconGap = function (gap){};

/**
 * 设置数据元素的图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.TreeTableView.prototype.setIconWidth = function (width){};

/**
 * 设置数据元素的图标高度
 * @param {Number} height 高度值
 */
ht.ui.TreeTableView.prototype.setIconHeight = function (height){};

/**
 * 设置排序列
 * @param {ht.ui.Column} column 排序列
 */
ht.ui.TreeTableView.prototype.setSortColumn = function (column){};

/**
 * 设置排序方式
 * @param {String} mode
 * <ul>
 * <li>none: 不允许排序</li>
 * <li>bistate: 点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate: 点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 */
ht.ui.TreeTableView.prototype.setSortMode = function (mode){};

/**
 * 设置列线颜色
 * @param {color} color 颜色值
 */
ht.ui.TreeTableView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TreeTableView.prototype.setColumnLineVisible = function (visible){};

/**
 * 设置列模型，列模型用于存储 Column 列对象信息
 * @param {ht.DataModel} model 列模型
 */
ht.ui.TreeTableView.prototype.setColumnModel = function (model){};

/**
 * 以 json 的方式配置表格中的列
 * @param {Array} columns json 列
 * @example // 示例：
 * tableView.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TreeTableView.prototype.setColumns = function (columns){};

/**
 * 以 json 的方式配置表格中的列(新增)
 * @param {Array} columns json 列
 * @example // 示例：
 * tableView.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.TreeTableView.prototype.addColumns = function(columns) {};

/**
 * 设置是否启用批量编辑
 * @param {Boolean} batchEditable 是否启用批量编辑
 */
ht.ui.TreeTableView.prototype.setBatchEditable = function (batchEditable){};

/**
 * 设置不同层次的缩进值
 * @param {Number} indent 缩进值
 */
ht.ui.TreeTableView.prototype.setIndent = function (indent){};

/**
 * 设置延迟加载器
 * @param {Object} loader
 * @example // 示例：
 * treeView.setLoader({
 * 	load: function(data) {
 * 		// 展开此数据元素时回调，可用于加载子节点
 * 	},
 * 	isLoaded: function(data) {
 * 		// 返回子结点是否已加载
 * 	}
 * });
 */
ht.ui.TreeTableView.prototype.setLoader = function (loader){};

/**
 * 指定根节点，默认为空，从 DataModel#getRoots() 的对象开始展示
 * @param {ht.Data} root 根节点
 */
ht.ui.TreeTableView.prototype.setRootData = function (root){};

/**
 * 设置根节点是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.TreeTableView.prototype.setRootVisible = function (visible){};

/**
 * 获取编辑组件的属性，默认返回 column.s('editorViewProperties')
 * @param {ht.Data} 数据元素
 * @param {ht.ui.Column} 列
 */
ht.ui.TreeTableView.prototype.getEditorViewProperties = function(data, column) { };

/**
 * 将参数 datas 转成 ht.Data 类型并添加到 dataModel 中
 * @param {JSON} datas 格式：[{name: 'data1'}, {name: 'data2'}] 或者 { name: 'Root', children: [ {name: 'Child1'} ]}
 */
ht.ui.TreeTableView.prototype.setDatas = function(datas) { };



/**
 * 获取编辑器验证函数
 * @return {Function} 数据验证函数
 */
ht.ui.TreeTableView.prototype.getEditorValidator = function() { };


/**
 * 设置编辑器验证函数
 * @param {Function} validator 数据验证函数，格式为：function(olodValue, newValue, data, [column], editor, editorView, endEdit) {}
 * <br>其中最后一个参数 endEdit 表示是否要结束编辑，为 false 表示用户不打算结束编辑(比如假设 StringEditor 中文本框的 instant 为 true，每输入一个字符都会用 validator 验证且 endEdit 参数为 fale)
 * <br>返回值为 true 表示 newValue 格式合法
 * <br>返回值为 false 表示 newValue 格式不合法，同时阻止默认的停止编辑行为(让用户继续编辑)
 * <br>返回值为 end 表示 newValue 不合法，同时结束编辑(仅在 endEdit 为 true 时起作用)
 */
ht.ui.TreeTableView.prototype.setEditorValidator = function(validator) { };


/**
 * 获取 check 模式下，点击行的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.TreeTableView#getFocusBackgroundDrawable getFocusBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.getFocusBackground = function (){};

/**
 * 获取 check 模式下，点击行背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.TreeTableView.prototype.getFocusBackgroundDrawable = function (){};


/**
 * 设置 check 模式下，点击行的背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.TreeTableView#setFocusBackgroundDrawable setFocusBackgroundDrawable}
 */
ht.ui.TreeTableView.prototype.setFocusBackground = function (background){};

/**
 * 设置 check 模式下，点击行背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.TreeTableView.prototype.setFocusBackgroundDrawable = function (drawable){};
/**
 * 属性表组件，用于显示数据元素的属性，支持属性分组、排序<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>beginEdit</code></td>
 * <td> { kind: 'beginEdit', data: data, property: property, editor: editor, editorView: editorView } </td>
 * <td>开始编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>endEdit</code></td>
 * <td> { kind: 'endEdit', valueChanged: valueChanged } </td>
 * <td>结束编辑时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>invalidateModel</code></td>
 * <td> { kind: 'invalidateModel' } </td>
 * <td>无效模型时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：labelColor, selectLabelColor, hoverLabelColor, labelFont,
 *       editable, categorizable, indent, columnPosition, sortFunc, visibleFunc,
 *       expandIcon, expandIconDrawable, collapseIcon, collapseIconDrawable,
 *       selectBackground, selectBackgroundDrawable, indentBackground, indentBackgroundDrawable,
 *       iconWidth, iconHeight,
 *       hoverBackground, hoverBackgroundDrawable,
 *       checkIcon, checkIconDrawable, uncheckIcon, uncheckIconDrawable, nameAlign, valueAlign, cellPaddingLeft, cellPaddingRight,
 *       rowHeight, rowHeightFunc, rowLineVisible, rowLineColor, columnLineVisible, columnLineColor, preferredSizeRowCountLimit, dataModelEditable,
 *       scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode, editorValidator
 * @param {ht.DataModel|Object} dataModel 绑定的数据模型或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.PropertyView = function(dataModel) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.PropertyView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.PropertyView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.PropertyView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.PropertyView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.PropertyView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.PropertyView.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.PropertyView.prototype.getTranslateY = function (){};


/**
 * 获取计算 preferredSize 时要限制的数据行数
 * @return {Number} 限制行数
 */
ht.ui.PropertyView.prototype.getPreferredSizeRowCountLimit = function (){};

/**
 * 是否允许拖拽平移
 * @return {Boolean} 是否允许拖拽平移
 */
ht.ui.PropertyView.prototype.isPannable = function (){};

/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.PropertyView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.PropertyView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.PropertyView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.PropertyView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.PropertyView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.PropertyView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.PropertyView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.PropertyView.prototype.isCloseToVScrollBar = function (e){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.PropertyView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.PropertyView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.PropertyView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.PropertyView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.PropertyView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.PropertyView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.PropertyView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.PropertyView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置计算 preferredSize 时要限制的数据行数；例如参数为 10，表示根据前 10 行数据的高度计算 preferredHeight
 * @param {Number} limit 限制行数
 */
ht.ui.PropertyView.prototype.setPreferredSizeRowCountLimit = function (limit){};

/**
 * 设置是否允许拖拽平移
 * @param {Boolean} pannable 是否允许拖拽平移
 */
ht.ui.PropertyView.prototype.setPannable = function (pannable){};

/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.PropertyView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.PropertyView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.PropertyView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.PropertyView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.PropertyView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.PropertyView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取工具提示文本内容，默认取出鼠标下的数据元素 data 和 property，然后返回 property.getToolTip(data, isPropertyValue, propertyView)
 * @param {Event} e 事件对象
 * @return {String} 工具提示文本内容
 */
ht.ui.PropertyView.prototype.getToolTip = function (e) {};

/**
 * 是否启用工具提示
 * @return {Boolean} 是否启用工具提示
 */
ht.ui.PropertyView.prototype.isToolTipEnabled = function () {};

/**
 * 设置是否启用工具提示
 * @param {Boolean} enabled 是否启用工具提示
 */
ht.ui.PropertyView.prototype.setToolTipEnabled = function (enabled) {};

/**
 * 启用工具提示
 * @see {@link ht.ui.PropertyView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.PropertyView.prototype.enableToolTip = function () {};

/**
 * 禁用工具提示
 * @see {@link ht.ui.PropertyView#setToolTipEnabled setToolTipEnabled}
 */
ht.ui.PropertyView.prototype.disableToolTip = function () {};

/**
 * 增加底层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，底层绘制器绘制在组件最下面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * propertyView.addBottomPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.PropertyView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加顶层绘制器<br>
 * 开发者可以使用 Canvas 的画笔对象自由绘制任意形状，顶层绘制器绘制在组件最上面
 * @param {function} painter 绘制器函数
 * @example // 示例：
 * propertyView.addTopPainter(function(g) {
 *      g.save();
 *      // draw...
 *      g.restore();
 * });
 */
ht.ui.PropertyView.prototype.addTopPainter = function (painter){};


/**
 * 以 json 的方式配置属性(新增)
 * @param {Array} properties json 属性
 * @example // 示例：
 * propertyView.addProperties([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * },
 * {
 *  className: 'ht.ui.EnumProperty',
 *  name: 'sex',
 *  datas: [
 *      { id: 0, label: 'Female' },
 *      { id: 1, label: 'Male' }
 *  ]
 * }
 * ]);
 */
ht.ui.PropertyView.prototype.addProperties = function(properties) {}

/**
 * 合并分组
 * @param  {String} categoryName 分组名
 */
ht.ui.PropertyView.prototype.collapse = function (categoryName){};

/**
 * 合并所有分组
 */
ht.ui.PropertyView.prototype.collapseAll = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于 {@link ht.ui.PropertyView#getDataModel getDataModel}，有参数时相当于 {@link ht.ui.PropertyView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.ui.PropertyView.prototype.dm = function (dataModel){};

/**
 * 绘制分组名，可重写自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} name 分组名
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} w 绘制范围的宽度
 * @param {Number} h 绘制范围的高度
 */
ht.ui.PropertyView.prototype.drawCategoryName = function (g, name, rowIndex, x, y, w, h){};

/**
 * 绘制属性名，可重写自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.ui.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角 x 坐标 
 * @param {Number} y 左上角 y 坐标 
 * @param {Number} w 绘制范围的宽度
 * @param {Number} h 绘制范围的高度
 */
ht.ui.PropertyView.prototype.drawPropertyName = function (g, property, rowIndex, x, y, w, h){};

/**
 * 绘制属性值，可重写自定义，如果返回值为 DOM 对象，则使用该 DOM 元素作为渲染器
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.ui.Property} property 属性对象
 * @param {Object} value 值
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} w 绘制范围的宽度
 * @param {Number} h 绘制范围的高度
 * @param {ht.Data} data 数据元素
 * @return {HTMLElement} DOM 渲染器
 */
ht.ui.PropertyView.prototype.drawPropertyValue = function (g, property, value, rowIndex, x, y, w, h, data){};

/**
 * 展开分组
 * @param {String} categoryName 分组名
 */
ht.ui.PropertyView.prototype.expand = function (categoryName){};

/**
 * 展开所有分组
 */
ht.ui.PropertyView.prototype.expandAll = function (){};

/**
 * 获取分组行背景和左侧 toggle 区域背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.PropertyView#getIndentBackgroundDrawable getIndentBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.getIndentBackground = function (){};

/**
 * 获取分组行背景和左侧 toggle 区域背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.PropertyView.prototype.getIndentBackgroundDrawable = function (){};

/**
 * 返回分组文本颜色，可重写自定义
 * @param {String} categoryName 分组名
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getCategoryColor = function (categoryName){};

/**
 * 返回分组文本字体，可重载自定义
 * @param {String} categoryName 分组名
 * @return {String} 字体
 */
ht.ui.PropertyView.prototype.getCategoryFont = function (categoryName){};

/**
 * 获取选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.PropertyView#getCheckIconDrawable getCheckIconDrawable}
 */
ht.ui.PropertyView.prototype.getCheckIcon = function() {};

/**
 * 获取选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.PropertyView.prototype.getCheckIconDrawable = function() {};

/**
 * 获取非选中状态的多选图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.PropertyView#getUncheckIconDrawable getUncheckIconDrawable}
 */
ht.ui.PropertyView.prototype.getUncheckIcon = function() {};

/**
 * 获取非选中状态的多选图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.PropertyView.prototype.getUncheckIconDrawable = function() {};

/**
 * 获取展开图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.PropertyView#getExpandIconDrawable getExpandIconDrawable}
 */
ht.ui.PropertyView.prototype.getExpandIcon = function() {};

/**
 * 获取展开图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.PropertyView.prototype.getExpandIconDrawable = function() {};

/**
 * 获取合并图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.PropertyView#getCollapseIconDrawable getCollapseIconDrawable}
 */
ht.ui.PropertyView.prototype.getCollapseIcon = function() {};

/**
 * 获取合并图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.PropertyView.prototype.getCollapseIconDrawable = function() {};

/**
 * 返回属性图标宽度
 * @return {Number} 宽度值
 */
ht.ui.PropertyView.prototype.getIconWidth = function (){};

/**
 * 返回属性图标高度
 * @return {Number} 高度值
 */
ht.ui.PropertyView.prototype.getIconHeight = function (){};

/**
 * 获取列线是否可见，默认为 true
 * @return {Boolean} 列线是否可见
 */
ht.ui.PropertyView.prototype.isColumnLineVisible = function (){};

/**
 * 获取列线颜色
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getColumnLineColor = function (){};

/**
 * 获取列线位置比例，默认值 0.5，允许范围为 0 ~ 1
 * @return {Number} 比例值
 */
ht.ui.PropertyView.prototype.getColumnPosition = function (){};

/**
 * 获取当前显示的属性所属的数据元素
 * @return {ht.Data} 数据元素
 */
ht.ui.PropertyView.prototype.getCurrentData = function (){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.ui.PropertyView.prototype.getDataModel = function (){};

/**
 * 获取左侧缩进，左侧空间用于绘制分组 toggle 图标，以及属性提示图标
 * @return {Number} 缩进值
 */
ht.ui.PropertyView.prototype.getIndent = function (data){};

/**
 * 返回属性值文本颜色，可重写自定义
 * @param {ht.ui.Property} property 属性对象 
 * @param {Object} value 属性值
 * @param {Number} rowIndex 行索引
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getCurrentLabelColor = function (property, value, rowIndex){};

/**
 * 返回属性值文本字体，可重写自定义
 * @param {ht.ui.Property|String} property 属性对象或分组名
 * @param {Object} [value] 属性值
 * @param {Number} [rowIndex] 行索引
 * @return {String} 字体
 */
ht.ui.PropertyView.prototype.getLabelFont = function (property, value, rowIndex){};

/**
 * 获取属性文本颜色(默认用于属性值、属性名、分组名)
 * @param {ht.ui.Property|String} property 属性对象或分组名
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getLabelColor = function (property){};

/**
 * 获取选中文本颜色(默认用于属性值、属性名)
 * @param {ht.ui.Property} property 属性对象
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getHoverLabelColor = function (property){};

/**
 * 获取选中文本颜色(默认用于属性值、属性名)
 * @param {ht.ui.Property} property 属性对象
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getSelectLabelColor = function (property){};

/**
 * 传入交互事件对象，返回坐标下的属性对象
 * @param {Event} event 事件对象
 * @return {ht.ui.Property}
 */
ht.ui.PropertyView.prototype.getPropertyAt = function (event){};

/**
 * 返回属性名文本颜色，可重写自定义
 * @param {ht.ui.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getPropertyColor = function (property, rowIndex){};

/**
 * 返回属性名文本字体，可重写自定义
 * @param {ht.ui.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @return {color} 字体
 */
ht.ui.PropertyView.prototype.getPropertyFont = function (property, rowIndex){};

/**
 * 获取属性模型
 * @return {ht.DataModel} 属性模型
 */
ht.ui.PropertyView.prototype.getPropertyModel = function (){};

/**
 * 返回显示在左列的属性名，可重写自定义
 * @param {ht.ui.Property} 属性对象
 * @return {String} 属性名
 */
ht.ui.PropertyView.prototype.getPropertyName = function (property){};

/**
 * 获取行高
 * @return {Number} 高度值
 */
ht.ui.PropertyView.prototype.getRowHeight = function (){};

/**
 * 获取行高函数，函数内可以根据不同的属性返回不同的高度值
 * @return {function} 行高函数
 */
ht.ui.PropertyView.prototype.getRowHeightFunc = function (){};

/**
 * 获取属性对象所在的行
 * @param {ht.ui.Property} property 属性对象
 * @return {Number} 索引值
 */
ht.ui.PropertyView.prototype.getRowIndex = function (property){};

/**
 * 获取 event 事件所在的行索引
 * @param {Event} event 事件对象
 * @return {Number} 索引值
 */
ht.ui.PropertyView.prototype.getRowIndexAt = function (event){};

/**
 * 返回所有属性信息的集合，集合元素为 String 类型代表分组名，{data: d, property: p} 结构代表属性对象
 * @return {ht.List}
 */
ht.ui.PropertyView.prototype.getRows = function (){};

/**
 * 获取行选中背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.PropertyView#getSelectBackgroundDrawable getSelectBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.getSelectBackground = function (){};

/**
 * 获取行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.PropertyView.prototype.getSelectBackgroundDrawable = function (){};

/**
 * 获取 hover 状态下的行背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.PropertyView#getHoverBackgroundDrawable getHoverBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.getHoverBackground = function (){};

/**
 * 获取 hover 状态下行选中背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.PropertyView.prototype.getHoverBackgroundDrawable = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.ui.PropertyView#sm sm}
 */
ht.ui.PropertyView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {function} 排序函数
 */
ht.ui.PropertyView.prototype.getSortFunc = function (){};

/**
 * 获取可见过滤器函数
 * @return {function} 可见过滤器函数
 */
ht.ui.PropertyView.prototype.getVisibleFunc = function (){};

/**
 * 是否分组显示，默认为 true
 * @return {Boolean} 是否分组显示
 */
ht.ui.PropertyView.prototype.isCategorizable = function (){};

/**
 * 是否可编辑的总开关
 * @return {Boolean} 是否可编辑
 */
ht.ui.PropertyView.prototype.isEditable = function (){};

/**
 * 分组是否展开
 * @param {String} categoryName 分组名
 * @return {Boolean} 
 */
ht.ui.PropertyView.prototype.isExpanded = function (categoryName){};

/**
 * 判断属性是否可编辑，可重写自定义
 * @param {Event} event 交互事件对象
 * @param {ht.ui.Property} property 属性对象
 * @return {Boolean} 
 */
ht.ui.PropertyView.prototype.isPropertyEditable = function (event, property){};

/**
 * 判断行线是否可见
 * @return {Boolean} 
 */
ht.ui.PropertyView.prototype.isRowLineVisible = function (){};

/**
 * 获取行线颜色
 * @return {color} 颜色值
 */
ht.ui.PropertyView.prototype.getRowLineColor = function (){};

/**
 * 获取 hover 状态的属性
 * @return {ht.ui.Property} 属性对象
 */
ht.ui.PropertyView.prototype.getHoverProperty = function (){};

/**
 * 获取选中状态的属性
 * @return {ht.ui.Property} 属性对象
 */
ht.ui.PropertyView.prototype.getSelectProperty = function (){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 是否共享选中模型
 */
ht.ui.PropertyView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可编辑
 * @param {Event} e 交互事件
 * @param {ht.ui.Property} [property] 属性对象
 * @return {Boolean} 是否可编辑
 */
ht.ui.PropertyView.prototype.isPropertyEditable = function (e, property){};

/**
 * 开始编辑数据，可以调用这个函数手动启动编辑
 * @param {ht.Data} data 数据元素
 * @param {Event|ht.ui.Property} 事件对象或 Property 实例
 * @param {String|Class|ht.ui.editor.Editor} editor 编辑器类或类名或实例
 */
ht.ui.PropertyView.prototype.beginEdit = function (data, property, editor){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑
 * @param {Boolean} setValue 是否将 Editor 中的值同步到模型中，如果为 false，Editor 中的值被丢弃
 */
ht.ui.PropertyView.prototype.endEdit = function (setValue){};

/**
 * 结束编辑数据，可以调用这个函数手动结束编辑，重写此函数可以实现编辑数据验证
 * @param {Object} value 单元格的值
 * @param {Boolean} saveValue 是否保存值
 * @param {ht.Data} data 正在编辑的数据行
 * @param {ht.ui.Property} property 正在编辑的属性
 * @example
 * var oldEndEditImpl = tableView.endEditImpl;
 * tableView.endEditImpl = function(value, saveValue, data, property) {
 * if (property.getName() === 'name') {
 *      if (value === '1') {
 *          // 数据不合法，保持编辑状态
 *          return;
 *      }
 *      else if (value === '2') {
 *          // 数据不合法，丢掉编辑值，同时结束编辑
 *          oldEndEditImpl.call(this, value, false, data, property);
 *          return;
 *      }
 *  }
 *  // 数据正常，结束编辑
 *  oldEndEditImpl.call(this, value, saveValue, data, property);
 *  
 * }
 */
ht.ui.PropertyView.prototype.endEditImpl = function (value, saveValue, data, property){};

/**
 * 是否正在编辑数据；如果 data 和 property 为空，返回值表示属性页是否处于编辑状态；
 * 如果不为空，返回值表示是否正在编辑参数指定的 data 和 property
 * @param {ht.Data} [data] 数据元素
 * @param {ht.ui.Property} [property] 属性对象
 * @return {Boolean} 正在编辑数据
 */
ht.ui.PropertyView.prototype.isEditing = function (data, property){};

/**
 * 获取编辑器
 * @return {ht.ui.editor.Editor} 编辑器实例
 */
ht.ui.PropertyView.prototype.getEditor = function (){};

/**
 * 判断属性是否可见；如果参数为空，表示当前组件是否可见
 * @param {ht.ui.Property} [property] 属性对象
 * @return {Boolean} 是否可见
 */
ht.ui.PropertyView.prototype.isVisible = function (property){};

/**
 * 无效模型，下次刷新时会重新构建 rows，{@link ht.ui.PropertyView#invalidateModel invalidateModel} 的缩写
 * @see {@link ht.ui.PropertyView#invalidateModel invalidateModel}
 */
ht.ui.PropertyView.prototype.ivm = function (){};

/**
 * 无效模型，下次刷新时会重新构建 rows
 * @see {@link ht.ui.PropertyView#ivm ivm}
 */
ht.ui.PropertyView.prototype.invalidateModel = function (){};

/**
 * 合并分组时调用，可重写做后续处理
 * @param {String} categoryName 分组名
 */
ht.ui.PropertyView.prototype.onCollapsed = function (categoryName){};

/**
 * 展开分组时调用，可重写做后续处理
 * @param {String} categoryName 分组名
 */
ht.ui.PropertyView.prototype.onExpanded = function (categoryName){};

/**
 * 删除底层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.PropertyView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除顶层绘制器
 * @param {function} painter 绘制器函数
 */
ht.ui.PropertyView.prototype.removeTopPainter = function (painter){};


/**
 * 设置是否分组显示
 * @param {Boolean} categorizable 是否分组
 */
ht.ui.PropertyView.prototype.setCategorizable = function (categorizable){};


/**
 * 设置选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.PropertyView#setCheckIconDrawable setCheckIconDrawable}
 */
ht.ui.PropertyView.prototype.setCheckIcon = function(icon) {};

/**
 * 设置选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.PropertyView.prototype.setCheckIconDrawable = function(drawable) {};


/**
 * 设置非选中状态的多选图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.PropertyView#setUncheckIconDrawable setUncheckIconDrawable}
 */
ht.ui.PropertyView.prototype.setUncheckIcon = function() {};

/**
 * 设置非选中状态的多选图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.PropertyView.prototype.setUncheckIconDrawable = function(drawable) {};

/**
 * 设置展开图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.PropertyView#setExpandIconDrawable setExpandIconDrawable}
 */
ht.ui.PropertyView.prototype.setExpandIcon = function() {};

/**
 * 设置展开图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.PropertyView.prototype.setExpandIconDrawable = function(drawable) {};

/**
 * 设置合并图标图标，可以是颜色或者图片等
 * @param {Object} icon 图标
 * @see {@link ht.ui.PropertyView#setCollapseIconDrawable setCollapseIconDrawable}
 */
ht.ui.PropertyView.prototype.setCollapseIcon = function() {};

/**
 * 设置合并图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.PropertyView.prototype.setCollapseIconDrawable = function(drawable) {};

/**
 * 设置列线颜色
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.PropertyView.prototype.setColumnLineVisible = function (visible){};


/**
 * 设置列线位置比例，默认值 0.5，允许范围为 0 ~ 1
 * @param {Number} position 比例值
 */
ht.ui.PropertyView.prototype.setColumnPosition = function (position){};

/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.ui.PropertyView.prototype.setDataModel = function (dataModel){};

/**
 * 设置可否编辑的总开关，每个属性对象可单独再控制
 * @param {Boolean} editable 是否可编辑
 */
ht.ui.PropertyView.prototype.setEditable = function (editable){};

/**
 * 设置左侧缩进，左侧空间用于绘制分组 toggle 图标，以及属性图标
 * @param {Number} indent 缩进值
 */
ht.ui.PropertyView.prototype.setIndent = function (indent){};

/**
 * 设置属性文本颜色(默认用于属性值、属性名、分组名)
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setLabelColor = function (color){};

/**
 * 设置选中文本颜色(默认用于属性值、属性名)
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setHoverLabelColor = function (color){};

/**
 * 设置选中文本颜色(默认用于属性值、属性名)
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setSelectLabelColor = function (color){};

/**
 * 设置属性名和属性值文本字体
 * @param {String} font 字体
 */
ht.ui.PropertyView.prototype.setLabelFont = function (font){};

/**
 * 以 json 的方式配置属性(设置)
 * @param {Array} properties json 属性
 * @example //示例：
 * propertyView.setProperties([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.ui.PropertyView.prototype.setProperties = function (properties){};

/**
 * 设置行高
 * @param {Number} height 行高
 */
ht.ui.PropertyView.prototype.setRowHeight = function (height){};

/**
 * 设置行高函数，函数内可以根据不同的属性返回不同的高度值
 * @param {function} func 行高函数
 * @example
 * propertyView.setRowHeightFunc(function(property) {
 * 		if (data.getId() === 1) return 50;
 * 		else return 24;
 * });
 */
ht.ui.PropertyView.prototype.setRowHeightFunc = function (func){};

/**
 * 设置行线颜色
 * @param {color} color 颜色值
 */
ht.ui.PropertyView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} visible 是否可见
 */
ht.ui.PropertyView.prototype.setRowLineVisible = function (visible){};

/**
 * 设置行选中背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.PropertyView#setSelectBackgroundDrawable setSelectBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.setSelectBackground = function (background){};

/**
 * 设置行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.PropertyView.prototype.setSelectBackgroundDrawable = function (drawable){};

/**
 * 设置 hover 状态下的行背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.PropertyView#setHoverBackgroundDrawable setHoverBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.setHoverBackground = function (background){};

/**
 * 设置 hover 状态下行选中背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.PropertyView.prototype.setHoverBackgroundDrawable = function (drawable){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v 是否共享选中模型
 */
ht.ui.PropertyView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {function} func 排序函数
 */
ht.ui.PropertyView.prototype.setSortFunc = function (func){};

/**
 * 设置可见属性过滤器
 * @param {function} func 过滤器函数
 */
ht.ui.PropertyView.prototype.setVisibleFunc = function (func){};

/**
 * 获取选中模型，{@link ht.ui.PropertyView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.ui.PropertyView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel} 
 */
ht.ui.PropertyView.prototype.sm = function (){};

/**
 * 切换分组展开合并状态
 * @param {String} categoryName 分组名
 */
ht.ui.PropertyView.prototype.toggle = function (categoryName){};

/**
 * 设置属性图标宽度
 * @param {Number} width 宽度值
 */
ht.ui.PropertyView.prototype.setIconWidth = function (width){};

/**
 * 设置属性图标高度
 * @param {Number} height 高度值
 */
ht.ui.PropertyView.prototype.setIconHeight = function (height){};


/**
 * 设置 hover 状态的属性
 * @param {ht.ui.Property} property 属性对象
 */
ht.ui.PropertyView.prototype.setHoverProperty = function (property){};

/**
 * 设置选中状态的属性
 * @param {ht.ui.Property} property 属性对象
 */
ht.ui.PropertyView.prototype.setSelectProperty = function (property){};


/**
 * 设置分组行背景和左侧 toggle 区域背景；可以是颜色或者图片等
 * @param {Object} background 背景
 * @see {@link ht.ui.PropertyView#setIndentBackgroundDrawable setIndentBackgroundDrawable}
 */
ht.ui.PropertyView.prototype.setIndentBackground = function (background){};

/**
 * 设置分组行背景和左侧 toggle 区域背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.PropertyView.prototype.setIndentBackgroundDrawable = function (drawable){};

/**
 * 获取编辑组件的属性，默认返回 property.s('editorViewProperties')
 * @param {ht.ui.Property} 属性
 */
ht.ui.PropertyView.prototype.getEditorViewProperties = function(property) { };

/**
 * 获取属性名的对齐方式
 * @param {ht.ui.Property} property 属性
 * @return {String} 对齐方式，值为：left|center|right
 */
ht.ui.PropertyView.prototype.getNameAlign = function(property) { };

/**
 * 获取属性值的对齐方式
 * @param {ht.ui.Property} property 属性
 * @return {String} 对齐方式，值为：left|center|right
 */
ht.ui.PropertyView.prototype.getValueAlign = function(property) { };

/**
 * 获取属性名格子和属性值格子的左侧内边距
 * @param {ht.ui.Property} [property] 属性
 * @return {Number} 左侧内边距
 */
ht.ui.PropertyView.prototype.getCellPaddingLeft = function(property) { };

/**
 * 获取属性名格子和属性值格子的右侧内边距
 * @param {ht.ui.Property} [property] 属性
 * @return {Number} 右侧内边距
 */
ht.ui.PropertyView.prototype.getCellPaddingLeft = function(property) { };

/**
 * 设置属性名的对齐方式
 * @param {String} align 对齐方式，值为：left|center|right
 */
ht.ui.PropertyView.prototype.setNameAlign = function(align) { };

/**
 * 设置属性值的对齐方式
 * @param {String} align 对齐方式，值为：left|center|right
 */
ht.ui.PropertyView.prototype.setValueAlign = function(align) { };

/**
 * 设置属性名格子和属性值格子的左侧内边距
 * @param {Number} padding 左侧内边距
 */
ht.ui.PropertyView.prototype.setCellPaddingLeft = function(padding) { };

/**
 * 设置属性名格子和属性值格子的右侧内边距
 * @param {Number} padding 右侧内边距
 */
ht.ui.PropertyView.prototype.setCellPaddingLeft = function(padding) { };


/**
 * 设置是否可以编辑 DataModel 属性
 * @param {Boolean} editable
 */
ht.ui.PropertyView.prototype.setDataModelEditable = function(editable) { };

/**
 * 判断是否可以编辑 DataModel 属性
 * @return {Boolean}
 */
ht.ui.PropertyView.prototype.isDataModelEditable = function() { };



/**
 * 获取编辑器验证函数
 * @return {Function} 数据验证函数
 */
ht.ui.PropertyView.prototype.getEditorValidator = function() { };


/**
 * 设置编辑器验证函数
 * @param {Function} validator 数据验证函数，格式为：function(olodValue, newValue, data, property, editor, editorView, endEdit) {}
 * <br>其中最后一个参数 endEdit 表示是否要结束编辑，为 false 表示用户不打算结束编辑(比如假设 StringEditor 中文本框的 instant 为 true，每输入一个字符都会用 validator 验证且 endEdit 参数为 fale)
 * <br>返回值为 true 表示 newValue 格式合法
 * <br>返回值为 false 表示 newValue 格式不合法，同时阻止默认的停止编辑行为(让用户继续编辑)
 * <br>返回值为 end 表示 newValue 不合法，同时结束编辑(仅在 endEdit 为 true 时起作用)
 */
ht.ui.PropertyView.prototype.setEditorValidator = function(validator) { };
/**
 * 属性面板，这是一个特殊的容器组件，内部创建工具栏(支持分组、过滤、排序)、属性头和属性页组件，并自动从上到下进行布局<br>
 * 开发者可以通过 getCategoryButton()、getSortButton()、getFilterInput()、getPropertyView() 分别获取分组开关按钮、排序开关按钮、过滤文本框、属性页组件进行修改<br>
 * 此面板内部对分组开关按钮、排序开关按钮设置了默认属性(背景、图标)，因此外部 style 不再起作用，如果希望能在外部 style 中配置按钮风格，需要重写 createCategoryButton() 和 createSortbutton()
 * 两个函数，创建 ht.ui.ToggleButton 类型直接返回(或设置样式名以后返回)，这样没有设置默认属性，就可以在外部通过 style 配置<br>
 * 样式属性(不含从父类继承)：headerBackground, headerBackgroundDrawable, headerLabelColor, headerLabelFont, headerLabelAlign, headerLabels, caseSensitive, toolbarHeight, headerHeight, toolbarPadding
 * @param {ht.DataModel|Object} [dataModel] 数据容器或属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 */
ht.ui.PropertyPane = function(dataModel) {};

/**
 * 以 json 的方式配置属性(新增)，内部调用 getPropertyView().addProperties(properties)
 * @param {Array} properties json 对象
 * @see {@link ht.ui.PropertyView#addProperties addProperties}
 */
ht.ui.PropertyPane.prototype.addProperties = function(properties) {}

/**
 * 获取属性头文字颜色
 * @return {color} 文字颜色
 */
ht.ui.PropertyPane.prototype.getHeaderLabelColor = function() {}

/**
 * 获取属性头文字字体
 * @return {String} 文字字体
 */
ht.ui.PropertyPane.prototype.getHeaderLabelFont = function() {}

/**
 * 获取属性头文字对齐方式
 * @return {String} 对齐方式，值可能为：'left'|'center'|'right'
 */
ht.ui.PropertyPane.prototype.getHeaderLabelAlign = function() {}

/**
 * 获取属性头文字内容
 * @return {Array} 属性头文字内容，默认为 ['Property', 'Value']
 */
ht.ui.PropertyPane.prototype.getHeaderLabels = function() {}

/**
 * 获取输入过滤时，是否忽略大小写
 * @return {Boolean} 是否忽略大小写
 */
ht.ui.PropertyPane.prototype.isCaseSensitive = function() {}

/**
 * 获取工具条高度
 * @return {Number} 高度值
 */
ht.ui.PropertyPane.prototype.getToolbarHeight = function() {}

/**
 * 获取工具条内边距
 * @return {Number|Array} 内边距
 */
ht.ui.PropertyPane.prototype.getToolbarPadding = function() {}


/**
 * 获取 header 背景，可以是颜色或者图片等
 * @return {Object} header 背景
 * @see {@link ht.ui.PropertyPane#getHeaderBackgroundDrawable getHeaderBackgroundDrawable}
 */
ht.ui.PropertyPane.prototype.getHeaderBackground = function() {}

/**
 * 获取 header 背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} header 背景
 */
ht.ui.PropertyPane.prototype.getHeaderBackgroundDrawable = function() {}


/**
 * 获取属性头高度
 * @return {Number} 高度值
 */
ht.ui.PropertyPane.prototype.getHeaderHeight = function() {}

/**
 * 获取排序函数
 * @return {Function} 排序函数
 */
ht.ui.PropertyPane.prototype.getSortFunc = function() {}

/**
 * 获取属性页组件
 * @return {ht.ui.PropertyView} 属性页组件
 */
ht.ui.PropertyPane.prototype.getPropertyView = function() {}

/**
 * 获取分组开关按钮
 * @return {ht.ui.ToggleButton} 分组开关按钮
 */
ht.ui.PropertyPane.prototype.getCategoryButton = function() {}

/**
 * 获取排序开关按钮
 * @return {ht.ui.ToggleButton} 排序开关按钮
 */
ht.ui.PropertyPane.prototype.getSortButton = function() {}

/**
 * 获取搜索框
 * @return {ht.ui.TextField} 搜索框
 */
ht.ui.PropertyPane.prototype.getFilterInput = function() {}

/**
 * 创建分组开关按钮
 * @return {ht.ui.ToggleButton} 按钮实例
 */
ht.ui.PropertyPane.prototype.createCategoryButton = function() {}

/**
 * 创建排序开关按钮
 * @return {ht.ui.ToggleButton} 按钮实例
 */
ht.ui.PropertyPane.prototype.createSortButton = function() {}

/**
 * 创建排序开关按钮
 * @return {ht.ui.ToggleButton} 按钮实例
 */
ht.ui.PropertyPane.prototype.createSortButton = function() {}

/**
 * 创建搜索框
 * @return {ht.ui.TextField} 文本框实例
 */
ht.ui.PropertyPane.prototype.createFilerInput = function() {}

/**
 * 绘制属性头文本
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} label 文本
 * @param {Number} x 绘制范围 x 坐标
 * @param {Number} y 绘制范围 y 坐标
 * @param {Number} w 绘制范围的宽度
 * @param {Number} h 绘制范围的高度
 */
ht.ui.PropertyPane.prototype.drawHeaderLabel = function(g, label, x, y, w, h) {}

/**
 * 设置属性头文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.PropertyPane.prototype.setHeaderLabelColor = function(color) {}

/**
 * 设置属性头文字字体
 * @param {String} font 文字字体
 */
ht.ui.PropertyPane.prototype.setHeaderLabelFont = function(font) {}

/**
 * 设置属性头文字对齐方式
 * @param {String} align 对齐方式，值可能为：'left'|'center'|'right'
 */
ht.ui.PropertyPane.prototype.setHeaderLabelAlign = function(align) {}

/**
 * 设置属性头文字内容
 * @param {Array} labels 属性头文字内容，默认为 ['Property', 'Value']
 */
ht.ui.PropertyPane.prototype.setHeaderLabels = function(labels) {}

/**
 * 设置输入过滤时，是否忽略大小写
 * @param {Boolean} caseSensitive 是否忽略大小写
 */
ht.ui.PropertyPane.prototype.setCaseSensitive = function(caseSensitive) {}

/**
 * 设置工具条高度
 * @param {Number} toolbarHeight 高度值
 */
ht.ui.PropertyPane.prototype.setToolbarHeight = function(toolbarHeight) {}


/**
 * 设置工具条内边距
 * @param {Number|Array} padding 内边距，如果为数组则表示：[上内边距、右内边距、下内边距、左内边距]
 */
ht.ui.PropertyPane.prototype.setToolbarPadding = function(padding) {}

/**
 * 设置属性头高度
 * @param {Number} headerHeight 高度值
 */
ht.ui.PropertyPane.prototype.setHeaderHeight = function(headerHeight) {}


/**
 * 设置 header 背景，可以是颜色或者图片等
 * @param {Object} background header 背景
 * @see {@link ht.ui.PropertyPane#setHeaderBackgroundDrawable setHeaderBackgroundDrawable}
 */
ht.ui.PropertyPane.prototype.setHeaderBackground = function(background) {}

/**
 * 设置 header 背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable header 背景
 */
ht.ui.PropertyPane.prototype.setHeaderBackgroundDrawable = function(drawable) {}

/**
 * 设置排序函数
 * @param {Function} sortFunc 排序函数
 */
ht.ui.PropertyPane.prototype.setSortFunc = function(sortFunc) {}
/**
 * HTML 内容组件，用于展示 HTML 内容，也可以用来嵌套第三方组件，如各种 charts 图表<br><br>
 * 样式属性(不含从父类继承)：autoRefreshPreferredSize, scrollBarColor, scrollBarSize, scrollBarTimeout, scrollBarMinLength, scrollBarActiveSize, scrollBarMode
 * @param {String|HTMLElement|Object} content HTML 内容，支持文本和 DOM 对象或者是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 * @example
 * var htmlView = new ht.ui.HtmlView();
 * htmlVew.setContent('<div> This is a div </div>');
 *
 * vBox.addView(htmlView);
 */
ht.ui.HtmlView = function(content) {};

/**
 * 获取滚动条颜色
 * @return {color} 颜色值
 */
ht.ui.HtmlView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @return {Number} 滚动条大小
 */
ht.ui.HtmlView.prototype.getScrollBarSize = function (){};

/**
 * 获取滚动条显示时间，超过时间后滚动条将隐藏
 * @return {Number} 滚动条显示时间
 */
ht.ui.HtmlView.prototype.getScrollBarTimeout = function (){};

/**
 * 获取滚动条最小长度
 * @return {Number} 滚动条最小长度
 */
ht.ui.HtmlView.prototype.getScrollBarMinLength = function (){};

/**
 * 获取滚动条感应区域的大小
 * @return {Number} 滚动条感应区域的大小
 */
ht.ui.HtmlView.prototype.getScrollBarActiveSize = function (){};

/**
 * 获取滚动条模式，支持 'on'|'off'|'auto'
 * @return {String} 滚动条模式
 */
ht.ui.HtmlView.prototype.getScrollBarMode = function (){};

/**
 * 获取水平滚动值
 * @return {Number} 水平滚动值
 */
ht.ui.HtmlView.prototype.getTranslateX = function (){};

/**
 * 获取垂直滚动值
 * @return {Number} 垂直滚动值
 */
ht.ui.HtmlView.prototype.getTranslateY = function (){};


/**
 * 获取内容文字颜色
 * @return {color} 文字颜色
 */
ht.ui.HtmlView.prototype.getContentColor = function (){};

/**
 * 获取内容文字字体
 * @return {String} 文字字体
 */
ht.ui.HtmlView.prototype.getContentFont = function (){};


/**
 * 显示滚动条，内部会调用 showVScrollBar() 和 showHScrollBar()
 */
ht.ui.HtmlView.prototype.showScrollBar = function (){};

/**
 * 显示水平滚动条
 */
ht.ui.HtmlView.prototype.showHScrollBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.ui.HtmlView.prototype.showVScrollBar = function (){};

/**
 * 获取或设置水平滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateX()；如果不为空，相当于 setTranslateX(value)
 */
ht.ui.HtmlView.prototype.tx = function (value){};

/**
 * 获取或设置垂直滚动值
 * @param {Number} [value] 如果为空，相当于 getTranslateY()；如果不为空，相当于 setTranslateY(value)
 */
ht.ui.HtmlView.prototype.ty = function (value){};

/**
 * 水平滚动值增加 x，垂直滚动值增加 y
 * @param {Number} x 水平滚动值增量
 * @param {Number} y 垂直滚动值增量
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.HtmlView.prototype.translate = function (x, y, anim){};

/**
 * 事件的坐标是否接近水平滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.HtmlView.prototype.isCloseToHScrollBar = function (e){};

/**
 * 事件的坐标是否接近垂直滚动条(接近的范围由 scrollBarActiveSize 决定)
 * @param {Event} e 鼠标或 Touch 事件对象
 */
ht.ui.HtmlView.prototype.isCloseToVScrollBar = function (e){};

/**
 * 调用 setTranslateX 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.HtmlView.prototype.adjustTranslateX = function (value){};

/**
 * 调用 setTranslateY 之前调用此函数确保滚动值是合理范围内，如果滚动值不合理，将会被调整并返回
 * @param {Number} value 调整之前的滚动值
 * @return {Number} 调整后的滚动值
 */
ht.ui.HtmlView.prototype.adjustTranslateY = function (value){};

/**
 * 获取视窗范围，即可视区域
 * @return {Object} 可见区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.HtmlView.prototype.getViewRect = function (value){};

/**
 * 获取滚动范围，即内容区域
 * @return {Object} 内容区域，格式为：{x: x, y: y, width: width, height: height}
 */
ht.ui.HtmlView.prototype.getScrollRect = function (value){};

/**
 * 判断组件是否可以垂直滚动(即 scrollRect.height > viewRect.height)
 * @return {Boolean} 是否可以垂直滚动
 */
ht.ui.HtmlView.prototype.isVScrollable = function (){};

/**
 * 判断组件是否可以水平滚动(即 scrollRect.width > viewRect.width)
 * @return {Boolean} 是否可以水平滚动
 */
ht.ui.HtmlView.prototype.isHScrollable = function (){};

/**
 * 设置水平滚动值
 * @param {Number} translateX 水平滚动值
 */
ht.ui.HtmlView.prototype.setTranslateX = function (translateX) {};

/**
 * 设置垂直滚动值
 * @param {Number} translateY 垂直滚动值
 */
ht.ui.HtmlView.prototype.setTranslateY = function (translateY) {};

/**
 * 设置水平和垂直滚动值
 * @param {Number} translateX 水平滚动值
 * @param {Number} translateY 垂直滚动值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.ui.HtmlView.prototype.setTranslate = function (translateX, translateY, anim) {};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.ui.HtmlView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条大小(横向滚动条的高度，纵向滚动条的宽度)
 * @param {Number} size 滚动条大小
 */
ht.ui.HtmlView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条显示时间，超过时间后滚动条将隐藏
 * @param {Number} timeout 滚动条显示时间
 */
ht.ui.HtmlView.prototype.setScrollBarTimeout = function (timeout){};

/**
 * 设置滚动条最小长度
 * @param {Number} length 滚动条最小长度
 */
ht.ui.HtmlView.prototype.setScrollBarMinLength = function (length){};

/**
 * 设置滚动条感应区域的大小
 * @param {Number} activeSize 滚动条感应区域的大小
 */
ht.ui.HtmlView.prototype.setScrollBarActiveSize = function (activeSize){};

/**
 * 设置滚动条模式
 * @param {String} mode 滚动条模式，可选值为：'on'|'off'|'auto'
 */
ht.ui.HtmlView.prototype.setScrollBarMode = function (mode){};

/**
 * 获取 HTML 内容
 * @return {String|HTMLElement} HTML 内容，值可能为文本或 DOM 对象
 */
ht.ui.HtmlView.prototype.getContent = function (){};

/**
 * 判断是否自动刷新 preferredSize
 * @return {Boolean} 自动刷新 preferredSize
 */
ht.ui.HtmlView.prototype.getAutoRefreshPreferredSize = function (){};

/**
 * 设置 HTML 内容
 * @param {String|HTMLElement} content HTML 内容，支持文本和 DOM 对象
 */
ht.ui.HtmlView.prototype.setContent = function (content){};

/**
 * 设置自动刷新 preferredSize；如果设置为 true，组件每次 validate 的时候都会去检查更新 preferredSize
 * @param {Boolean} autoRefreshPreferredSize 自动刷新 preferredSize
 */
ht.ui.HtmlView.prototype.setAutoRefreshPreferredSize = function (autoRefreshPreferredSize){};

/**
 * 设置内容文字颜色；此颜色值会被设置到组件 contentDiv 的 CSS 样式(color)上
 * @param {color} color 文字颜色
 */
ht.ui.HtmlView.prototype.setContentColor = function (color){};

/**
 * 设置内容文字字体；此字体会被设置到组件 contentDiv 的 CSS 样式(font)上
 * @param {String} font 字体，如 12px arial
 */
ht.ui.HtmlView.prototype.setContentFont = function (font){};

/**
 * HT 组件包装器，如果需要将 HT 核心包内的组件放到 UI 库的容器中展示，需要用此包装器进行包装
 * @param {HTView|Object} content HT 组件或是属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 * @example
 * var hBox = new ht.ui.HBoxLayout();
 * var htView = new ht.ui.HTView();
 * var graphView = new ht.graph.GraphView();
 *
 * htView.setContent(graphView);
 *
 * // 将包装器加到布局器中
 * hBox.addView(htView);
 */
ht.ui.HTView = function(content) {};

/**
 * 获取 HT 组件
 * @return {HTView} HT 组件
 */
ht.ui.HtmlView.prototype.getContent = function (){};

/**
 * 设置 HT 组件
 * @param {HTView} content HT 组件
 */
ht.ui.HtmlView.prototype.setContent = function (content){};

/**
 * 
 * 弹出框容器；在宿主组件周围显示一个弹框，弹框内可以显示任意 UI 组件或 HTML 内容<br>
 * 使用此容器需要注意，不要再用 addView 增加子组件，而是使用 setContentView<br>
 * 子组件可用的布局参数(layoutParams)：
 * <ul>
 * <li> marginLeft 指定组件左侧外边距 </li>
 * <li> marginRight 指定组件右侧外边距 </li>
 * <li> marginTop 指定组件顶部外边距 </li>
 * <li> marginBottom 指定组件底部外边距 </li>
 * </ul>
 * 可以看到 layoutParams 中不支持设置 width 和 height 的参数，因为面板布局时会把 contentView 填满自身(周围根据 margin 留空白空间)，
 * 因此也不支持设置滚动条（可以在 contentView 上设置显示滚动条）<br><br>
 * 组件在交互过程中经常派发出一些事件，可以通过 addViewListener 监听，常见事件如下(不含从父类继承)：
 * <table class="params table table-striped">
 * <thead>
 * <th>事件名</th>
 * <th>事件对象</th>
 * <th>描述</th>
 * </thead>
 * <tbody>
 * <tr>
 * <td class="name"><code>show</code></td>
 * <td>
 * <pre>
 * {
 *       kind: 'show', // 事件种类
 * }
 * </pre>
 * </td>
 * <td>弹出框显示时派发</td>
 * </tr>
 * <tr>
 * <td class="name"><code>hide</code></td>
 * <td>
 * <pre>
 * {
 *       kind: 'hide', // 事件种类
 * }
 * </pre>
 * </td>
 * <td>弹出框隐藏时派发</td>
 * </tr>
 * </tbody>
 * </table>
 * 样式属性(不含从父类继承)：placements, arrowBackgroundColor, 
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 * @example
 * // 这个例子中演示了创建一个 Popover 显示在按钮周围
 * 
 * // 宿主按钮
 * button = new ht.ui.Button();
 * button.setText('click me');
 * 
 * // 弹出框 (popover) 中的内容组件
 * htmlView = new ht.ui.HtmlView();
 * htmlView.setContent('<iframe border="0" style="width: 400px; height: 200px; margin: 0; padding: 0; border: 0;" src="http://www.hightopo.com"></iframe>');
 * popover = new ht.ui.Popover();
 * popover.setContentView(htmlView);
 * 
 * // 设置按钮的弹出组件及弹出方式
 * button.setPopover(popover, 'click');
 * button.setBackground('orange');
 * button.addToDOM(window, { x: 500, y: 200, width: 80, height: 24 });
 */
ht.ui.Popover = function(properties) {};

/**
 * 获取弹出框位置；弹出框显示以后才可以获取到值
 * @return {String} 弹出框位置，值为：topLeft|top|topRight|rightTop|right|rightBottom|bottomRight|bottom|bottomLeft|leftBottom|left|leftTop
 */
ht.ui.Popover.prototype.getPlacement = function (){};

/**
 * 获取可用的弹出框位置；显示弹出框时遍历此数组寻找合适的显示位置
 * @return {Array} 弹出框位置数组，默认值为：['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']
 */
ht.ui.Popover.prototype.getPlacements = function (){};

/**
 * 设置可用的弹出框位置；显示弹出框时遍历此数组寻找合适的显示位置
 * @param {Array} placements 弹出框位置数组，默认值为：['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']
 */
ht.ui.Popover.prototype.setPlacements = function (placements){};

/**
 * 获取箭头区域的填充颜色
 * @return {color} 颜色值
 */
ht.ui.Popover.prototype.getArrowBackgroundColor = function (){};

/**
 * 设置箭头区域的填充颜色
 * @param {color} color 颜色值
 */
ht.ui.Popover.prototype.setArrowBackgroundColor = function (color){};

/**
 * 获取容器中的子组件
 * @return {ht.ui.View} 子组件
 */
ht.ui.Popover.prototype.getContentView = function (){};

/**
 * 设置容器中的子组件
 * @param {ht.ui.View} view 子组件
 * @param {Object} [layoutParams] 布局参数；可通过 childView.setLayoutPrams({...}) 提前设置并省略此参数
 */
ht.ui.Popover.prototype.setContentView = function (view, layoutParams){};

/**
 * 获取宿主组件
 * @return {ht.ui.View} 宿主组件
 */
ht.ui.Popover.prototype.getMaster = function (){};

/**
 * 显示弹框组件；注意：如果弹框有宿主组件，请调用宿主组件上的 showPopover() 和 hidePopover() 实现弹框显示和隐藏
 */
ht.ui.Popover.prototype.show = function (){};


/**
 * 隐藏弹框组件；注意：如果弹框有宿主组件，请调用宿主组件上的 showPopover() 和 hidePopover() 实现弹框显示和隐藏
 */
ht.ui.Popover.prototype.hide = function (){};
/**
 * 消息提醒组件；显示图标、标题、文字内容和关闭按钮；
 * 本组件虽然是个容器(从 ht.ui.ViewGroup 继承)，但是无需调用布局器的相关函数，只设置消息相关属性即可，如标题、内容文本<br>
 * 样式属性(不含从父类继承)：title, titleFont, titleColor, content, contentColor, contentFont, icon, iconDrawable, closeIcon, closeIconDrawable, fixedWidth
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.ViewGroup}
 */
ht.ui.Message = function(properties) {};

/**
 * 获取标题
 * @return {String} 标题文本
 */
ht.ui.Message.prototype.getTitle = function (){};

/**
 * 设置标题
 * @param {String} title 标题文本
 */
ht.ui.Message.prototype.setTitle = function (title){};


/**
 * 获取标题字体
 * @return {String} 标题字体
 */
ht.ui.Message.prototype.getTitleFont = function (){};

/**
 * 设置标题字体
 * @param {String} font 标题字体
 */
ht.ui.Message.prototype.setTitleFont = function (font){};


/**
 * 获取标题文本颜色
 * @return {color} 颜色值
 */
ht.ui.Message.prototype.getTitleColor = function (){};

/**
 * 设置标题文本颜色
 * @param {color} color 颜色值
 */
ht.ui.Message.prototype.setTitleColor = function (color){};


/**
 * 获取消息内容
 * @return {String} 消息内容文本
 */
ht.ui.Message.prototype.getContent = function (){};

/**
 * 设置消息内容
 * @param {String} content 消息内容文本
 */
ht.ui.Message.prototype.setContent = function (content){};


/**
 * 获取消息内容字体
 * @return {String} 消息内容字体
 */
ht.ui.Message.prototype.getContentFont = function (){};

/**
 * 设置消息内容字体
 * @param {String} font 标题字体
 */
ht.ui.Message.prototype.setContentFont = function (font){};

/**
 * 获取消息内容文本颜色
 * @return {color} 颜色值
 */
ht.ui.Message.prototype.getContentColor = function (){};

/**
 * 设置消息内容文本颜色
 * @param {color} color 颜色值
 */
ht.ui.Message.prototype.setContentColor = function (color){};


/**
 * 设置图标，可以是颜色或者图片等
 * @param {Object} icon 图标，可以是颜色值、图片名、图片路径、矢量对象等
 * @see {@link ht.ui.Message#setIconDrawable setIconDrawable}
 */
ht.ui.Message.prototype.setIcon = function (icon){};

/**
 * 设置图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 图标
 */
ht.ui.Message.prototype.setIconDrawable = function (drawable){};

/**
 * 获取图标，可以是颜色或者图片等
 * @return {Object} 图标
 * @see {@link ht.ui.Message#getIconDrawable getIconDrawable}
 */
ht.ui.Message.prototype.getIcon = function (){};

/**
 * 获取图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 图标
 */
ht.ui.Message.prototype.getIconDrawable = function (){};


/**
 * 设置关闭图标
 * @param {Object} icon 关闭图标，可以是颜色或者图片等
 * @see {@link ht.ui.Message#setCloseIconDrawable setCloseIconDrawable}
 */
ht.ui.Message.prototype.setCloseIcon = function (icon){};

/**
 * 设置关闭图标的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 关闭图标
 */
ht.ui.Message.prototype.setCloseIconDrawable = function (drawable){};

/**
 * 获取关闭图标，可以是颜色或者图片等
 * @return {Object} 关闭图标
 * @see {@link ht.ui.Message#getCloseIconDrawable getCloseIconDrawable}
 */
ht.ui.Message.prototype.getCloseIcon = function (){};

/**
 * 获取关闭图标的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 关闭图标
 */
ht.ui.Message.prototype.getCloseIconDrawable = function (){};

/**
 * 获取固定宽度；消息组件的宽度会尽量以此宽度为准，高度自适应
 * @return {Number} 宽度值
 */
ht.ui.Message.prototype.getFixedWidth = function (){};

/**
 * 设置固定宽度；消息组件的宽度会尽量以此宽度为准，高度自适应
 * @param {Number} width 宽度值
 */
ht.ui.Message.prototype.setFixedWidth = function (width){};
/**
 * 消息框组件；在页面中心弹出对话框，增加了直接设置内容文本的功能，并且可以通过限制文本宽度实现高度自适应<br>
 * 样式属性(不含从父类继承)：contentText, contentPadding, contentIcon, contentTextColor, contentTextFont, fixedWith
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.Dialog}
 */
ht.ui.Alert = function(properties) {};

/**
 * 获取内容文本
 * @return {String} 内容文本
 */
ht.ui.Alert.prototype.getContentText = function (){};

/**
 * 设置内容文本
 * @param {String} text 内容文本
 */
ht.ui.Alert.prototype.setContentText = function (text){};


/**
 * 获取内容区域的内边距
 * @return {Number|Array} 内边距
 */
ht.ui.Alert.prototype.getContentPadding = function (){};

/**
 * 设置内容区域的内边距
 * @param {Number|Array} padding 内边距
 */
ht.ui.Alert.prototype.setContentPadding = function (padding){};

/**
 * 获取内容区域的图标
 * @return {String} 图标名称
 */
ht.ui.Alert.prototype.getContentIcon = function (){};

/**
 * 设置内容区域的图标
 * @param {String} icon 图标名称
 */
ht.ui.Alert.prototype.setContentIcon = function (icon){};

/**
 * 获取内容文本的颜色值
 * @return {color} 颜色值
 */
ht.ui.Alert.prototype.getContentTextColor = function (){};

/**
 * 设置内容文本的颜色值
 * @param {color} color 颜色值
 */
ht.ui.Alert.prototype.setContentTextColor = function (color){};

/**
 * 获取内容文本的字体
 * @return {String} 字体
 */
ht.ui.Alert.prototype.getContentTextFont = function (){};

/**
 * 设置内容文本的字体
 * @param {String} font 字体
 */
ht.ui.Alert.prototype.setContentTextFont = function (font){};

/**
 * 获取固定宽度；提示框的宽度会尽量以此宽度为准，高度自适应
 * @return {Number} 宽度值
 */
ht.ui.Alert.prototype.getFixedWidth = function (){};

/**
 * 设置固定宽度；提示框的宽度会尽量以此宽度为准，高度自适应
 * @param {Number} width 宽度值
 */
ht.ui.Alert.prototype.setFixedWidth = function (width){};

/**
 * 内容区域的输入组件，显示在 contentText 下方
 * @return {ht.ui.View} 组件
 */
ht.ui.Alert.prototype.getContentInput = function (){};

/**
 * 设置内容区域的输入组件，显示在 contentText 下方
 * @param {ht.ui.View} view 输入组件
 */
ht.ui.Alert.prototype.setContentInput = function (view){};

/**
 * 获取用户按下 `Esc` 时要触发的事件处理器函数
 * @return {Function} 
 */
ht.ui.Alert.prototype.getEscHandler = function (){};

/**
 * 设置用户按下 `Esc` 时要触发的事件处理器函数
 * @param {Function} handler
 */
ht.ui.Alert.prototype.setEscHandler = function (handler){};


/**
 * 获取用户按下 `Enter` 时要触发的事件处理器函数
 * @return {Function} 
 */
ht.ui.Alert.prototype.getEnterHandler = function (){};

/**
 * 设置用户按下 `Enter` 时要触发的事件处理器函数
 * @param {Function} handler
 */
ht.ui.Alert.prototype.setEnterHandler = function (handler){};
/**
 * 面包屑导航组件，可以将当前所在位置显示给用户，允许用户点击跳转到其它位置<br><br>
 * 样式属性(不含从父类继承)：items, itemGap, separator, separatorDrawable, separatorWidth, separatorHeight,
 *      itemBackground, itemBackgroundDrawable, hoverItemBackground, hoverItemBackgroundDrawable, activeItemBackground, activeItemBackgroundDrawable, selectItemBackground, selectItemBackgroundDrawable,
 *      itemTextColor, hoverItemTextColor, activeItemTextColor, selectItemTextColor,
 *      itemTextFont, itemIconWidth, itemIconHeight, itemIconTextGap, itemPadding
 * @param {Object} [properties] 属性配置对象
 * @constructor
 * @extends {ht.ui.View}
 */
ht.ui.Breadcrumb = function(properties) {};

/**
 * 获取导航配置 json
 * @return {Array} json
 */
ht.ui.Breadcrumb.prototype.getItems = function() {};


/**
 * 设置菜单配置 json
 * @param {Array} json 格式：[{icon: 'a', hoverIcon: 'b', 'activeIcon': 'c', 'selectIcon': 'd', text: 'text'}]
 */
ht.ui.Breadcrumb.prototype.setItems = function(json) {};

/**
 * 获取导航按钮之间的间距
 * @return {Number} 距离值
 */
ht.ui.Breadcrumb.prototype.getItemGap = function() {};


/**
 * 设置导航按钮之间间距
 * @param {Number} gap 距离值
 */
ht.ui.Breadcrumb.prototype.setItemGap = function(gap) {};


/**
 * 获取导航按钮之间的分隔符，这是个 Drawable 类型，因此可以使用颜色值、图片名等
 * @return {Object}
 * @see {@link ht.ui.Breadcrumb#getSeparatorDrawable getSeparatorDrawable}
 */
ht.ui.Breadcrumb.prototype.getSeparator = function() {};


/**
 * 设置导航按钮之间的分隔符
 * @param {Object} separator 颜色值、图片名等
 */
ht.ui.Breadcrumb.prototype.setSeparator = function(separator) {};


/**
 * 获取导航按钮之间的分隔符的 Drawable 对象
 * @return {ht.ui.drawable.Drawable}
 */
ht.ui.Breadcrumb.prototype.getSeparatorDrawable = function() {};


/**
 * 设置导航按钮之间的分隔符的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 
 */
ht.ui.Breadcrumb.prototype.setSeparatorDrawable = function(separator) {};


/**
 * 获取导航按钮之间的分隔符的宽度
 * @return {Number} 宽度值
 */
ht.ui.Breadcrumb.prototype.getSeparatorWidth = function() {};


/**
 * 设置导航按钮之间的分隔符的宽度
 * @param {Number} width 宽度值 
 */
ht.ui.Breadcrumb.prototype.setSeparatorWidth = function(width) {};


/**
 * 获取导航按钮之间的分隔符的高度
 * @return {Number} 高度值
 */
ht.ui.Breadcrumb.prototype.getSeparatorHeight = function() {};


/**
 * 设置导航按钮之间的分隔符的高度
 * @param {Number} height 高度值 
 */
ht.ui.Breadcrumb.prototype.setSeparatorHeight = function(height) {};


/**
 * 获取导航按钮的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Breadcrumb#getItemBackgroundDrawable getItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.getItemBackground = function (){};

/**
 * 获取导航按钮在 hover 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Breadcrumb#getHoverItemBackgroundDrawable getHoverItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.getHoverItemBackground = function (){};


/**
 * 获取导航按钮在 active 状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Breadcrumb#getActiveItemBackgroundDrawable getActiveItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.getActiveItemBackground = function (){};

/**
 * 获取导航按钮在选中状态下的背景；可以是颜色或者图片等
 * @return {Object} 背景
 * @see {@link ht.ui.Breadcrumb#getSelectItemBackgroundDrawable getSelectItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.getSelectItemBackground = function (){};

/**
 * 获取导航按钮背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Breadcrumb.prototype.getItemBackgroundDrawable = function (){};

/**
 * 获取导航按钮在 hover 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Breadcrumb.prototype.getHoverItemBackgroundDrawable = function (){};

/**
 * 获取导航按钮在 active 状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Breadcrumb.prototype.getActiveItemBackgroundDrawable = function (){};


/**
 * 获取导航按钮在选中状态下背景的 Drawable 对象
 * @return {ht.ui.drawable.Drawable} 背景
 */
ht.ui.Breadcrumb.prototype.getSelectItemBackgroundDrawable = function (){};


/**
 * 设置导航按钮的背景
 * @param {Object} background 背景，可以是颜色或者图片等
 * @see {@link ht.ui.Breadcrumb#setItemBackgroundDrawable setItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.setItemBackground = function (background){};

/**
 * 设置导航按钮在 hover 状态下的背景
 * @param {Object} background 背景，可以是颜色或者图片等
 * @see {@link ht.ui.Breadcrumb#setHoverItemBackgroundDrawable setHoverItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.setHoverItemBackground = function (background){};


/**
 * 设置导航按钮在 active 状态下的背景；
 * @param {Object} background 背景，可以是颜色或者图片等
 * @see {@link ht.ui.Breadcrumb#setActiveItemBackgroundDrawable setActiveItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.setActiveItemBackground = function (background){};


/**
 * 设置导航按钮在选中状态下的背景；
 * @param {Object} background 背景，可以是颜色或者图片等
 * @see {@link ht.ui.Breadcrumb#setSelectItemBackgroundDrawable setSelectItemBackgroundDrawable}
 */
ht.ui.Breadcrumb.prototype.setSelectItemBackground = function (background){};

/**
 * 设置导航按钮背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Breadcrumb.prototype.setItemBackgroundDrawable = function (drawable){};

/**
 * 设置导航按钮在 hover 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Breadcrumb.prototype.setHoverItemBackgroundDrawable = function (drawable){};

/**
 * 设置导航按钮在 active 状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Breadcrumb.prototype.setActiveItemBackgroundDrawable = function (drawable){};


/**
 * 设置导航按钮在选中状态下背景的 Drawable 对象
 * @param {ht.ui.drawable.Drawable} drawable 背景
 */
ht.ui.Breadcrumb.prototype.setSelectItemBackgroundDrawable = function (drawable){};


/**
 * 获取导航按钮文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Breadcrumb.prototype.getItemTextColor = function (){};

/**
 * 获取导航按钮在 hover 状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Breadcrumb.prototype.getHoverItemTextColor = function (){};

/**
 * 获取导航按钮在 active 状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Breadcrumb.prototype.getActiveItemTextColor = function (){};

/**
 * 获取导航按钮在选中状态下文字颜色
 * @return {color} 文字颜色
 */
ht.ui.Breadcrumb.prototype.getSelectItemTextColor = function (){};

/**
 * 设置导航按钮文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Breadcrumb.prototype.setItemTextColor = function (color){};

/**
 * 设置导航按钮在 hover 状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Breadcrumb.prototype.setHoverItemTextColor = function (color){};

/**
 * 设置导航按钮在 active 状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Breadcrumb.prototype.setActiveItemTextColor = function (color){};

/**
 * 设置导航按钮在选中状态下文字颜色
 * @param {color} color 文字颜色
 */
ht.ui.Breadcrumb.prototype.setSelectItemTextColor = function (color){};

/**
 * 获取导航按钮文字的字体
 * @return {String} 字体
 */
ht.ui.Breadcrumb.prototype.getItemTextFont = function (){};

/**
 * 设置导航按钮文字的字体
 * @param {String} font 字体
 */
ht.ui.Breadcrumb.prototype.setItemTextFont = function (font){};


/**
 * 获取导航按钮图标的宽度
 * @return {Number} 宽度值
 */
ht.ui.Breadcrumb.prototype.getItemIconWidth = function (){};

/**
 * 设置导航按钮图标的宽度
 * @param {Number} width 宽度值
 */
ht.ui.Breadcrumb.prototype.setItemIconWidth = function (width){};


/**
 * 获取导航按钮图标的高度
 * @return {Number} 高度值
 */
ht.ui.Breadcrumb.prototype.getItemIconHeight = function (){};

/**
 * 设置导航按钮图标的高度
 * @param {Number} height 高度值
 */
ht.ui.Breadcrumb.prototype.setItemIconHeight = function (height){};


/**
 * 获取导航按钮图标和文字之间的距离
 * @return {Number} 距离
 */
ht.ui.Breadcrumb.prototype.getItemIconTextGap = function (){};

/**
 * 设置导航按钮图标和文字之间的距离
 * @param {Number} gap 距离
 */
ht.ui.Breadcrumb.prototype.setItemIconTextGap = function (gap){};

/**
 * 获取导航按钮内边距；如果是数字，说明四边使用相同的内边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 * @return {Number|Array} 内边距
 */
ht.ui.Breadcrumb.prototype.getItemPadding = function (){};

/**
 * 设置导航按钮内边距
 * @param {Number|Array} padding 内边距；如果是数字，说明四边使用相同的内边距；如果是数组，则格式为：[上边距, 右边距, 下边距, 左边距]
 */
ht.ui.Breadcrumb.prototype.setItemPadding = function (padding){};


/**
 * 获取鼠标下的导航按钮
 * @param {Event} event 鼠标事件
 * @return {Object} 导航按钮 JSON
 */
ht.ui.Breadcrumb.prototype.getItemAt = function (event){};


/**
 * 删除指定下标之后的导航按钮
 * @param {Number} index 按钮下标，此下标之后的导航按钮被删除
 */
ht.ui.Breadcrumb.prototype.truncate = function (index){};

/**
 * 增加导航按钮
 * @param {Object} item 导航按钮的配置
 * @param {Number} [index] 插入位置
 */
ht.ui.Breadcrumb.prototype.addItem = function (item, index){};

/**
 * 获取当前选中的导航按钮下标
 * @return {Number} 
 */
ht.ui.Breadcrumb.prototype.getSelectItemIndex = function (){};


/**
 * 设置当前选中的导航按钮下标
 * @param {Number} index
 */
ht.ui.Breadcrumb.prototype.setSelectItemIndex = function (index){};