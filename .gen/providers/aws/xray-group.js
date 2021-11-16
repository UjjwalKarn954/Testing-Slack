"use strict";
// https://www.terraform.io/docs/providers/aws/r/xray_group.html
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
exports.XrayGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html aws_xray_group}
*/
var XrayGroup = /** @class */ (function (_super) {
    __extends(XrayGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_group.html aws_xray_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XrayGroupConfig
    */
    function XrayGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_xray_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._filterExpression = config.filterExpression;
        _this._groupName = config.groupName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(XrayGroup.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "filterExpression", {
        get: function () {
            return this.getStringAttribute('filter_expression');
        },
        set: function (value) {
            this._filterExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "filterExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filterExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    XrayGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(XrayGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XrayGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    XrayGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(XrayGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    XrayGroup.prototype.synthesizeAttributes = function () {
        return {
            filter_expression: cdktf.stringToTerraform(this._filterExpression),
            group_name: cdktf.stringToTerraform(this._groupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    XrayGroup.tfResourceType = "aws_xray_group";
    return XrayGroup;
}(cdktf.TerraformResource));
exports.XrayGroup = XrayGroup;
