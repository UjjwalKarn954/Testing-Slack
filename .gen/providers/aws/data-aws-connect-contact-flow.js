"use strict";
// https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html
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
exports.DataAwsConnectContactFlow = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow}
*/
var DataAwsConnectContactFlow = /** @class */ (function (_super) {
    __extends(DataAwsConnectContactFlow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectContactFlowConfig
    */
    function DataAwsConnectContactFlow(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_connect_contact_flow',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._contactFlowId = config.contactFlowId;
        _this._instanceId = config.instanceId;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "arn", {
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
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "contactFlowId", {
        get: function () {
            return this.getStringAttribute('contact_flow_id');
        },
        set: function (value) {
            this._contactFlowId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectContactFlow.prototype.resetContactFlowId = function () {
        this._contactFlowId = undefined;
    };
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "contactFlowIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contactFlowId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectContactFlow.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectContactFlow.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsConnectContactFlow.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataAwsConnectContactFlow.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsConnectContactFlow.prototype.synthesizeAttributes = function () {
        return {
            contact_flow_id: cdktf.stringToTerraform(this._contactFlowId),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsConnectContactFlow.tfResourceType = "aws_connect_contact_flow";
    return DataAwsConnectContactFlow;
}(cdktf.TerraformDataSource));
exports.DataAwsConnectContactFlow = DataAwsConnectContactFlow;
