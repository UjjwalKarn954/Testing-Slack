"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_group.html
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
exports.DataAwsIamGroup = exports.DataAwsIamGroupUsers = void 0;
var cdktf = require("cdktf");
var DataAwsIamGroupUsers = /** @class */ (function (_super) {
    __extends(DataAwsIamGroupUsers, _super);
    function DataAwsIamGroupUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsIamGroupUsers.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroupUsers.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroupUsers.prototype, "userId", {
        // user_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroupUsers.prototype, "userName", {
        // user_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsIamGroupUsers;
}(cdktf.ComplexComputedList));
exports.DataAwsIamGroupUsers = DataAwsIamGroupUsers;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group}
*/
var DataAwsIamGroup = /** @class */ (function (_super) {
    __extends(DataAwsIamGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_group.html aws_iam_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamGroupConfig
    */
    function DataAwsIamGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groupName = config.groupName;
        return _this;
    }
    Object.defineProperty(DataAwsIamGroup.prototype, "arn", {
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
    Object.defineProperty(DataAwsIamGroup.prototype, "groupId", {
        // group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroup.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroup.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamGroup.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    // users - computed: true, optional: false, required: false
    DataAwsIamGroup.prototype.users = function (index) {
        return new DataAwsIamGroupUsers(this, 'users', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamGroup.prototype.synthesizeAttributes = function () {
        return {
            group_name: cdktf.stringToTerraform(this._groupName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamGroup.tfResourceType = "aws_iam_group";
    return DataAwsIamGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsIamGroup = DataAwsIamGroup;
