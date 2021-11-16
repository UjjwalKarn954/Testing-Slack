"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html
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
exports.ApiGatewayVpcLink = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link}
*/
var ApiGatewayVpcLink = /** @class */ (function (_super) {
    __extends(ApiGatewayVpcLink, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayVpcLinkConfig
    */
    function ApiGatewayVpcLink(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_vpc_link',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetArns = config.targetArns;
        return _this;
    }
    Object.defineProperty(ApiGatewayVpcLink.prototype, "arn", {
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
    Object.defineProperty(ApiGatewayVpcLink.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayVpcLink.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayVpcLink.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayVpcLink.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApiGatewayVpcLink.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayVpcLink.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApiGatewayVpcLink.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "targetArns", {
        get: function () {
            return this.getListAttribute('target_arns');
        },
        set: function (value) {
            this._targetArns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayVpcLink.prototype, "targetArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetArns;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayVpcLink.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetArns)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayVpcLink.tfResourceType = "aws_api_gateway_vpc_link";
    return ApiGatewayVpcLink;
}(cdktf.TerraformResource));
exports.ApiGatewayVpcLink = ApiGatewayVpcLink;