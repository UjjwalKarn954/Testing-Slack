"use strict";
// https://www.terraform.io/docs/providers/aws/d/caller_identity.html
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
exports.DataAwsCallerIdentity = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity}
*/
var DataAwsCallerIdentity = /** @class */ (function (_super) {
    __extends(DataAwsCallerIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCallerIdentityConfig = {}
    */
    function DataAwsCallerIdentity(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_caller_identity',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    Object.defineProperty(DataAwsCallerIdentity.prototype, "accountId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCallerIdentity.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCallerIdentity.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCallerIdentity.prototype, "userId", {
        // user_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCallerIdentity.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCallerIdentity.tfResourceType = "aws_caller_identity";
    return DataAwsCallerIdentity;
}(cdktf.TerraformDataSource));
exports.DataAwsCallerIdentity = DataAwsCallerIdentity;
