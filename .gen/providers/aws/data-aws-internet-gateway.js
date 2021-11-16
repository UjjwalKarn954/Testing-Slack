"use strict";
// https://www.terraform.io/docs/providers/aws/d/internet_gateway.html
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
exports.DataAwsInternetGateway = exports.DataAwsInternetGatewayAttachments = void 0;
var cdktf = require("cdktf");
var DataAwsInternetGatewayAttachments = /** @class */ (function (_super) {
    __extends(DataAwsInternetGatewayAttachments, _super);
    function DataAwsInternetGatewayAttachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInternetGatewayAttachments.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInternetGatewayAttachments.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInternetGatewayAttachments;
}(cdktf.ComplexComputedList));
exports.DataAwsInternetGatewayAttachments = DataAwsInternetGatewayAttachments;
function dataAwsInternetGatewayFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway}
*/
var DataAwsInternetGateway = /** @class */ (function (_super) {
    __extends(DataAwsInternetGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/internet_gateway.html aws_internet_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInternetGatewayConfig = {}
    */
    function DataAwsInternetGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_internet_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._internetGatewayId = config.internetGatewayId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsInternetGateway.prototype, "arn", {
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
    // attachments - computed: true, optional: false, required: false
    DataAwsInternetGateway.prototype.attachments = function (index) {
        return new DataAwsInternetGatewayAttachments(this, 'attachments', index);
    };
    Object.defineProperty(DataAwsInternetGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInternetGateway.prototype, "internetGatewayId", {
        get: function () {
            return this.getStringAttribute('internet_gateway_id');
        },
        set: function (value) {
            this._internetGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInternetGateway.prototype.resetInternetGatewayId = function () {
        this._internetGatewayId = undefined;
    };
    Object.defineProperty(DataAwsInternetGateway.prototype, "internetGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internetGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInternetGateway.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInternetGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInternetGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsInternetGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInternetGateway.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInternetGateway.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsInternetGateway.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsInternetGateway.prototype.synthesizeAttributes = function () {
        return {
            internet_gateway_id: cdktf.stringToTerraform(this._internetGatewayId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsInternetGatewayFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsInternetGateway.tfResourceType = "aws_internet_gateway";
    return DataAwsInternetGateway;
}(cdktf.TerraformDataSource));
exports.DataAwsInternetGateway = DataAwsInternetGateway;
