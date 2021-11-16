"use strict";
// https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html
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
exports.MediaStoreContainerPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html aws_media_store_container_policy}
*/
var MediaStoreContainerPolicy = /** @class */ (function (_super) {
    __extends(MediaStoreContainerPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_store_container_policy.html aws_media_store_container_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaStoreContainerPolicyConfig
    */
    function MediaStoreContainerPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_media_store_container_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._containerName = config.containerName;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(MediaStoreContainerPolicy.prototype, "containerName", {
        get: function () {
            return this.getStringAttribute('container_name');
        },
        set: function (value) {
            this._containerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaStoreContainerPolicy.prototype, "containerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaStoreContainerPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaStoreContainerPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaStoreContainerPolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MediaStoreContainerPolicy.prototype.synthesizeAttributes = function () {
        return {
            container_name: cdktf.stringToTerraform(this._containerName),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MediaStoreContainerPolicy.tfResourceType = "aws_media_store_container_policy";
    return MediaStoreContainerPolicy;
}(cdktf.TerraformResource));
exports.MediaStoreContainerPolicy = MediaStoreContainerPolicy;
