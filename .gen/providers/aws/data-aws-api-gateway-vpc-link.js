"use strict";
// https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html
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
exports.DataAwsApiGatewayVpcLink = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link}
*/
var DataAwsApiGatewayVpcLink = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayVpcLink, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayVpcLinkConfig
    */
    function DataAwsApiGatewayVpcLink(scope, id, config) {
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
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "description", {
        // ==========
        // ATTRIBUTES
        // ==========
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "statusMessage", {
        // status_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApiGatewayVpcLink.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayVpcLink.prototype, "targetArns", {
        // target_arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_arns');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsApiGatewayVpcLink.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApiGatewayVpcLink.tfResourceType = "aws_api_gateway_vpc_link";
    return DataAwsApiGatewayVpcLink;
}(cdktf.TerraformDataSource));
exports.DataAwsApiGatewayVpcLink = DataAwsApiGatewayVpcLink;
