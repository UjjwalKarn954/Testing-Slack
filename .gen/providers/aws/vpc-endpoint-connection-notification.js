"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html
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
exports.VpcEndpointConnectionNotification = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification}
*/
var VpcEndpointConnectionNotification = /** @class */ (function (_super) {
    __extends(VpcEndpointConnectionNotification, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConnectionNotificationConfig
    */
    function VpcEndpointConnectionNotification(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_connection_notification',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionEvents = config.connectionEvents;
        _this._connectionNotificationArn = config.connectionNotificationArn;
        _this._vpcEndpointId = config.vpcEndpointId;
        _this._vpcEndpointServiceId = config.vpcEndpointServiceId;
        return _this;
    }
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionEvents", {
        get: function () {
            return this.getListAttribute('connection_events');
        },
        set: function (value) {
            this._connectionEvents = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionEventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionEvents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionNotificationArn", {
        get: function () {
            return this.getStringAttribute('connection_notification_arn');
        },
        set: function (value) {
            this._connectionNotificationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "connectionNotificationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionNotificationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "notificationType", {
        // notification_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notification_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_id');
        },
        set: function (value) {
            this._vpcEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointConnectionNotification.prototype.resetVpcEndpointId = function () {
        this._vpcEndpointId = undefined;
    };
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointServiceId", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_service_id');
        },
        set: function (value) {
            this._vpcEndpointServiceId = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointConnectionNotification.prototype.resetVpcEndpointServiceId = function () {
        this._vpcEndpointServiceId = undefined;
    };
    Object.defineProperty(VpcEndpointConnectionNotification.prototype, "vpcEndpointServiceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointServiceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcEndpointConnectionNotification.prototype.synthesizeAttributes = function () {
        return {
            connection_events: cdktf.listMapper(cdktf.stringToTerraform)(this._connectionEvents),
            connection_notification_arn: cdktf.stringToTerraform(this._connectionNotificationArn),
            vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
            vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpointConnectionNotification.tfResourceType = "aws_vpc_endpoint_connection_notification";
    return VpcEndpointConnectionNotification;
}(cdktf.TerraformResource));
exports.VpcEndpointConnectionNotification = VpcEndpointConnectionNotification;
