"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html
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
exports.CloudfrontFunction = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function}
*/
var CloudfrontFunction = /** @class */ (function (_super) {
    __extends(CloudfrontFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    function CloudfrontFunction(scope, id, config) {
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
        _this._code = config.code;
        _this._comment = config.comment;
        _this._name = config.name;
        _this._publish = config.publish;
        _this._runtime = config.runtime;
        return _this;
    }
    Object.defineProperty(CloudfrontFunction.prototype, "arn", {
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
    Object.defineProperty(CloudfrontFunction.prototype, "code", {
        get: function () {
            return this.getStringAttribute('code');
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "codeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontFunction.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontFunction.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "liveStageEtag", {
        // live_stage_etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('live_stage_etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "publish", {
        get: function () {
            return this.getBooleanAttribute('publish');
        },
        set: function (value) {
            this._publish = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontFunction.prototype.resetPublish = function () {
        this._publish = undefined;
    };
    Object.defineProperty(CloudfrontFunction.prototype, "publishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "runtime", {
        get: function () {
            return this.getStringAttribute('runtime');
        },
        set: function (value) {
            this._runtime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "runtimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFunction.prototype, "status", {
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
    CloudfrontFunction.prototype.synthesizeAttributes = function () {
        return {
            code: cdktf.stringToTerraform(this._code),
            comment: cdktf.stringToTerraform(this._comment),
            name: cdktf.stringToTerraform(this._name),
            publish: cdktf.booleanToTerraform(this._publish),
            runtime: cdktf.stringToTerraform(this._runtime)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontFunction.tfResourceType = "aws_cloudfront_function";
    return CloudfrontFunction;
}(cdktf.TerraformResource));
exports.CloudfrontFunction = CloudfrontFunction;
