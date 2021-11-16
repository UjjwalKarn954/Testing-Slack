"use strict";
// https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DynamodbTableItem = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item}
*/
var DynamodbTableItem = /** @class */ (function (_super) {
    __extends(DynamodbTableItem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableItemConfig
    */
    function DynamodbTableItem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dynamodb_table_item',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._hashKey = config.hashKey;
        _this._item = config.item;
        _this._rangeKey = config.rangeKey;
        _this._tableName = config.tableName;
        return _this;
    }
    Object.defineProperty(DynamodbTableItem.prototype, "hashKey", {
        get: function () {
            return this.getStringAttribute('hash_key');
        },
        set: function (value) {
            this._hashKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "hashKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hashKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "item", {
        get: function () {
            return this.getStringAttribute('item');
        },
        set: function (value) {
            this._item = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "itemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "rangeKey", {
        get: function () {
            return this.getStringAttribute('range_key');
        },
        set: function (value) {
            this._rangeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTableItem.prototype.resetRangeKey = function () {
        this._rangeKey = undefined;
    };
    Object.defineProperty(DynamodbTableItem.prototype, "rangeKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rangeKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTableItem.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamodbTableItem.prototype.synthesizeAttributes = function () {
        return {
            hash_key: cdktf.stringToTerraform(this._hashKey),
            item: cdktf.stringToTerraform(this._item),
            range_key: cdktf.stringToTerraform(this._rangeKey),
            table_name: cdktf.stringToTerraform(this._tableName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DynamodbTableItem.tfResourceType = "aws_dynamodb_table_item";
    return DynamodbTableItem;
}(cdktf.TerraformResource));
exports.DynamodbTableItem = DynamodbTableItem;
