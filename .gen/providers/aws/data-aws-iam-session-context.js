"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_session_context.html
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
exports.DataAwsIamSessionContext = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context}
*/
var DataAwsIamSessionContext = /** @class */ (function (_super) {
    __extends(DataAwsIamSessionContext, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_session_context.html aws_iam_session_context} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamSessionContextConfig
    */
    function DataAwsIamSessionContext(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_session_context',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        return _this;
    }
    Object.defineProperty(DataAwsIamSessionContext.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "issuerArn", {
        // issuer_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "issuerId", {
        // issuer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "issuerName", {
        // issuer_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamSessionContext.prototype, "sessionName", {
        // session_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIamSessionContext.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamSessionContext.tfResourceType = "aws_iam_session_context";
    return DataAwsIamSessionContext;
}(cdktf.TerraformDataSource));
exports.DataAwsIamSessionContext = DataAwsIamSessionContext;
