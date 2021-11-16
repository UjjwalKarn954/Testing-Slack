"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html
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
exports.DataAwsCloudfrontFunction = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function}
*/
var DataAwsCloudfrontFunction = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontFunctionConfig
    */
    function DataAwsCloudfrontFunction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_function',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._stage = config.stage;
        return _this;
    }
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "arn", {
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
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "lastModifiedTime", {
        // last_modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "runtime", {
        // runtime - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('runtime');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "stage", {
        get: function () {
            return this.getStringAttribute('stage');
        },
        set: function (value) {
            this._stage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "stageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontFunction.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudfrontFunction.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            stage: cdktf.stringToTerraform(this._stage)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudfrontFunction.tfResourceType = "aws_cloudfront_function";
    return DataAwsCloudfrontFunction;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudfrontFunction = DataAwsCloudfrontFunction;
