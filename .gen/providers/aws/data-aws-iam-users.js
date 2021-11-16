"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_users.html
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
exports.DataAwsIamUsers = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html aws_iam_users}
*/
var DataAwsIamUsers = /** @class */ (function (_super) {
    __extends(DataAwsIamUsers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_users.html aws_iam_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamUsersConfig = {}
    */
    function DataAwsIamUsers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_users',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._nameRegex = config.nameRegex;
        _this._pathPrefix = config.pathPrefix;
        return _this;
    }
    Object.defineProperty(DataAwsIamUsers.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamUsers.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamUsers.prototype, "nameRegex", {
        get: function () {
            return this.getStringAttribute('name_regex');
        },
        set: function (value) {
            this._nameRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamUsers.prototype.resetNameRegex = function () {
        this._nameRegex = undefined;
    };
    Object.defineProperty(DataAwsIamUsers.prototype, "nameRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamUsers.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamUsers.prototype, "pathPrefix", {
        get: function () {
            return this.getStringAttribute('path_prefix');
        },
        set: function (value) {
            this._pathPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamUsers.prototype.resetPathPrefix = function () {
        this._pathPrefix = undefined;
    };
    Object.defineProperty(DataAwsIamUsers.prototype, "pathPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathPrefix;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamUsers.prototype.synthesizeAttributes = function () {
        return {
            name_regex: cdktf.stringToTerraform(this._nameRegex),
            path_prefix: cdktf.stringToTerraform(this._pathPrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamUsers.tfResourceType = "aws_iam_users";
    return DataAwsIamUsers;
}(cdktf.TerraformDataSource));
exports.DataAwsIamUsers = DataAwsIamUsers;
