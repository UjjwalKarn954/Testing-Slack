"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html
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
exports.DataAwsIamAccountAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias}
*/
var DataAwsIamAccountAlias = /** @class */ (function (_super) {
    __extends(DataAwsIamAccountAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamAccountAliasConfig = {}
    */
    function DataAwsIamAccountAlias(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_account_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    Object.defineProperty(DataAwsIamAccountAlias.prototype, "accountAlias", {
        // ==========
        // ATTRIBUTES
        // ==========
        // account_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamAccountAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamAccountAlias.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamAccountAlias.tfResourceType = "aws_iam_account_alias";
    return DataAwsIamAccountAlias;
}(cdktf.TerraformDataSource));
exports.DataAwsIamAccountAlias = DataAwsIamAccountAlias;
