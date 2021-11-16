"use strict";
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
exports.ELB = void 0;
var cdktf = require("cdktf");
/**
* AWS Elastic Load Balancer
*/
var ELB;
(function (ELB) {
    function albAccessLogsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            bucket: cdktf.stringToTerraform(struct.bucket),
            enabled: cdktf.booleanToTerraform(struct.enabled),
            prefix: cdktf.stringToTerraform(struct.prefix)
        };
    }
    var AlbAccessLogsOutputReference = /** @class */ (function (_super) {
        __extends(AlbAccessLogsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbAccessLogsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "bucket", {
            get: function () {
                return this.getStringAttribute('bucket');
            },
            set: function (value) {
                this._bucket = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "bucketInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._bucket;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbAccessLogsOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "prefix", {
            get: function () {
                return this.getStringAttribute('prefix');
            },
            set: function (value) {
                this._prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbAccessLogsOutputReference.prototype.resetPrefix = function () {
            this._prefix = undefined;
        };
        Object.defineProperty(AlbAccessLogsOutputReference.prototype, "prefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._prefix;
            },
            enumerable: false,
            configurable: true
        });
        return AlbAccessLogsOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbAccessLogsOutputReference = AlbAccessLogsOutputReference;
    function albSubnetMappingToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allocation_id: cdktf.stringToTerraform(struct.allocationId),
            ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
            private_ipv4_address: cdktf.stringToTerraform(struct.privateIpv4Address),
            subnet_id: cdktf.stringToTerraform(struct.subnetId)
        };
    }
    function albTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var AlbTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(AlbTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(AlbTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return AlbTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbTimeoutsOutputReference = AlbTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb}
    */
    var Alb = /** @class */ (function (_super) {
        __extends(Alb, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbConfig = {}
        */
        function Alb(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__accessLogsOutput = new AlbAccessLogsOutputReference(_this, "access_logs", true);
            _this.__timeoutsOutput = new AlbTimeoutsOutputReference(_this, "timeouts", true);
            _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
            _this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
            _this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
            _this._enableDeletionProtection = config.enableDeletionProtection;
            _this._enableHttp2 = config.enableHttp2;
            _this._idleTimeout = config.idleTimeout;
            _this._internal = config.internal;
            _this._ipAddressType = config.ipAddressType;
            _this._loadBalancerType = config.loadBalancerType;
            _this._name = config.name;
            _this._namePrefix = config.namePrefix;
            _this._securityGroups = config.securityGroups;
            _this._subnets = config.subnets;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._accessLogs = config.accessLogs;
            _this._subnetMapping = config.subnetMapping;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(Alb.prototype, "arn", {
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
        Object.defineProperty(Alb.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "customerOwnedIpv4Pool", {
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            set: function (value) {
                this._customerOwnedIpv4Pool = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetCustomerOwnedIpv4Pool = function () {
            this._customerOwnedIpv4Pool = undefined;
        };
        Object.defineProperty(Alb.prototype, "customerOwnedIpv4PoolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._customerOwnedIpv4Pool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "dropInvalidHeaderFields", {
            get: function () {
                return this.getBooleanAttribute('drop_invalid_header_fields');
            },
            set: function (value) {
                this._dropInvalidHeaderFields = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetDropInvalidHeaderFields = function () {
            this._dropInvalidHeaderFields = undefined;
        };
        Object.defineProperty(Alb.prototype, "dropInvalidHeaderFieldsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._dropInvalidHeaderFields;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "enableCrossZoneLoadBalancing", {
            get: function () {
                return this.getBooleanAttribute('enable_cross_zone_load_balancing');
            },
            set: function (value) {
                this._enableCrossZoneLoadBalancing = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetEnableCrossZoneLoadBalancing = function () {
            this._enableCrossZoneLoadBalancing = undefined;
        };
        Object.defineProperty(Alb.prototype, "enableCrossZoneLoadBalancingInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableCrossZoneLoadBalancing;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "enableDeletionProtection", {
            get: function () {
                return this.getBooleanAttribute('enable_deletion_protection');
            },
            set: function (value) {
                this._enableDeletionProtection = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetEnableDeletionProtection = function () {
            this._enableDeletionProtection = undefined;
        };
        Object.defineProperty(Alb.prototype, "enableDeletionProtectionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDeletionProtection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "enableHttp2", {
            get: function () {
                return this.getBooleanAttribute('enable_http2');
            },
            set: function (value) {
                this._enableHttp2 = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetEnableHttp2 = function () {
            this._enableHttp2 = undefined;
        };
        Object.defineProperty(Alb.prototype, "enableHttp2Input", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableHttp2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "idleTimeout", {
            get: function () {
                return this.getNumberAttribute('idle_timeout');
            },
            set: function (value) {
                this._idleTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetIdleTimeout = function () {
            this._idleTimeout = undefined;
        };
        Object.defineProperty(Alb.prototype, "idleTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._idleTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "internal", {
            get: function () {
                return this.getBooleanAttribute('internal');
            },
            set: function (value) {
                this._internal = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetInternal = function () {
            this._internal = undefined;
        };
        Object.defineProperty(Alb.prototype, "internalInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._internal;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "ipAddressType", {
            get: function () {
                return this.getStringAttribute('ip_address_type');
            },
            set: function (value) {
                this._ipAddressType = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetIpAddressType = function () {
            this._ipAddressType = undefined;
        };
        Object.defineProperty(Alb.prototype, "ipAddressTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipAddressType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "loadBalancerType", {
            get: function () {
                return this.getStringAttribute('load_balancer_type');
            },
            set: function (value) {
                this._loadBalancerType = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetLoadBalancerType = function () {
            this._loadBalancerType = undefined;
        };
        Object.defineProperty(Alb.prototype, "loadBalancerTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(Alb.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "namePrefix", {
            get: function () {
                return this.getStringAttribute('name_prefix');
            },
            set: function (value) {
                this._namePrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetNamePrefix = function () {
            this._namePrefix = undefined;
        };
        Object.defineProperty(Alb.prototype, "namePrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "securityGroups", {
            get: function () {
                return this.getListAttribute('security_groups');
            },
            set: function (value) {
                this._securityGroups = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetSecurityGroups = function () {
            this._securityGroups = undefined;
        };
        Object.defineProperty(Alb.prototype, "securityGroupsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroups;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "subnets", {
            get: function () {
                return this.getListAttribute('subnets');
            },
            set: function (value) {
                this._subnets = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetSubnets = function () {
            this._subnets = undefined;
        };
        Object.defineProperty(Alb.prototype, "subnetsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnets;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Alb.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Alb.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "zoneId", {
            // zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('zone_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "accessLogs", {
            get: function () {
                return this.__accessLogsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.putAccessLogs = function (value) {
            this._accessLogs = value;
        };
        Alb.prototype.resetAccessLogs = function () {
            this._accessLogs = undefined;
        };
        Object.defineProperty(Alb.prototype, "accessLogsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._accessLogs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "subnetMapping", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('subnet_mapping');
            },
            set: function (value) {
                this._subnetMapping = value;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.resetSubnetMapping = function () {
            this._subnetMapping = undefined;
        };
        Object.defineProperty(Alb.prototype, "subnetMappingInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetMapping;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Alb.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Alb.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        Alb.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(Alb.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Alb.prototype.synthesizeAttributes = function () {
            return {
                customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
                drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
                enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
                enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
                enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
                idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
                internal: cdktf.booleanToTerraform(this._internal),
                ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
                load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
                name: cdktf.stringToTerraform(this._name),
                name_prefix: cdktf.stringToTerraform(this._namePrefix),
                security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
                subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                access_logs: albAccessLogsToTerraform(this._accessLogs),
                subnet_mapping: cdktf.listMapper(albSubnetMappingToTerraform)(this._subnetMapping),
                timeouts: albTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Alb.tfResourceType = "aws_alb";
        return Alb;
    }(cdktf.TerraformResource));
    ELB.Alb = Alb;
    function albListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
            user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
            user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain)
        };
    }
    var AlbListenerDefaultActionAuthenticateCognitoOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionAuthenticateCognitoOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolArn", {
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            set: function (value) {
                this._userPoolArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolClientId", {
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            set: function (value) {
                this._userPoolClientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolClientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolClientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolDomain", {
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            set: function (value) {
                this._userPoolDomain = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolDomainInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolDomain;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionAuthenticateCognitoOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionAuthenticateCognitoOutputReference = AlbListenerDefaultActionAuthenticateCognitoOutputReference;
    function albListenerDefaultActionAuthenticateOidcToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
            client_id: cdktf.stringToTerraform(struct.clientId),
            client_secret: cdktf.stringToTerraform(struct.clientSecret),
            issuer: cdktf.stringToTerraform(struct.issuer),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
            user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
        };
    }
    var AlbListenerDefaultActionAuthenticateOidcOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionAuthenticateOidcOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authorizationEndpoint", {
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            set: function (value) {
                this._authorizationEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authorizationEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authorizationEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientId", {
            get: function () {
                return this.getStringAttribute('client_id');
            },
            set: function (value) {
                this._clientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientSecret", {
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            set: function (value) {
                this._clientSecret = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientSecretInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientSecret;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "issuer", {
            get: function () {
                return this.getStringAttribute('issuer');
            },
            set: function (value) {
                this._issuer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "issuerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._issuer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "tokenEndpoint", {
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            set: function (value) {
                this._tokenEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "tokenEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tokenEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "userInfoEndpoint", {
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            set: function (value) {
                this._userInfoEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "userInfoEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userInfoEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionAuthenticateOidcOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionAuthenticateOidcOutputReference = AlbListenerDefaultActionAuthenticateOidcOutputReference;
    function albListenerDefaultActionFixedResponseToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            content_type: cdktf.stringToTerraform(struct.contentType),
            message_body: cdktf.stringToTerraform(struct.messageBody),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var AlbListenerDefaultActionFixedResponseOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionFixedResponseOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionFixedResponseOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "contentType", {
            get: function () {
                return this.getStringAttribute('content_type');
            },
            set: function (value) {
                this._contentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "contentTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._contentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "messageBody", {
            get: function () {
                return this.getStringAttribute('message_body');
            },
            set: function (value) {
                this._messageBody = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionFixedResponseOutputReference.prototype.resetMessageBody = function () {
            this._messageBody = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "messageBodyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._messageBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionFixedResponseOutputReference.prototype.resetStatusCode = function () {
            this._statusCode = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionFixedResponseOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionFixedResponseOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionFixedResponseOutputReference = AlbListenerDefaultActionFixedResponseOutputReference;
    function albListenerDefaultActionForwardStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            duration: cdktf.numberToTerraform(struct.duration),
            enabled: cdktf.booleanToTerraform(struct.enabled)
        };
    }
    var AlbListenerDefaultActionForwardStickinessOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionForwardStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionForwardStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerDefaultActionForwardStickinessOutputReference.prototype, "duration", {
            get: function () {
                return this.getNumberAttribute('duration');
            },
            set: function (value) {
                this._duration = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionForwardStickinessOutputReference.prototype, "durationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionForwardStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionForwardStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionForwardStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionForwardStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionForwardStickinessOutputReference = AlbListenerDefaultActionForwardStickinessOutputReference;
    function albListenerDefaultActionForwardTargetGroupToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            arn: cdktf.stringToTerraform(struct.arn),
            weight: cdktf.numberToTerraform(struct.weight)
        };
    }
    function albListenerDefaultActionForwardToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            stickiness: albListenerDefaultActionForwardStickinessToTerraform(struct.stickiness),
            target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct.targetGroup)
        };
    }
    var AlbListenerDefaultActionForwardOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionForwardOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionForwardOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            var _this = _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
            _this.__stickinessOutput = new AlbListenerDefaultActionForwardStickinessOutputReference(_this, "stickiness", true);
            return _this;
        }
        Object.defineProperty(AlbListenerDefaultActionForwardOutputReference.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionForwardOutputReference.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        AlbListenerDefaultActionForwardOutputReference.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionForwardOutputReference.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionForwardOutputReference.prototype, "targetGroup", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            set: function (value) {
                this._targetGroup = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionForwardOutputReference.prototype, "targetGroupInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroup;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionForwardOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionForwardOutputReference = AlbListenerDefaultActionForwardOutputReference;
    function albListenerDefaultActionRedirectToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host: cdktf.stringToTerraform(struct.host),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            query: cdktf.stringToTerraform(struct.query),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var AlbListenerDefaultActionRedirectOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerDefaultActionRedirectOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerDefaultActionRedirectOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "host", {
            get: function () {
                return this.getStringAttribute('host');
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionRedirectOutputReference.prototype.resetHost = function () {
            this._host = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "hostInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._host;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionRedirectOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionRedirectOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionRedirectOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "query", {
            get: function () {
                return this.getStringAttribute('query');
            },
            set: function (value) {
                this._query = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerDefaultActionRedirectOutputReference.prototype.resetQuery = function () {
            this._query = undefined;
        };
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "queryInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._query;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerDefaultActionRedirectOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerDefaultActionRedirectOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerDefaultActionRedirectOutputReference = AlbListenerDefaultActionRedirectOutputReference;
    function albListenerDefaultActionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            order: cdktf.numberToTerraform(struct.order),
            target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
            type: cdktf.stringToTerraform(struct.type),
            authenticate_cognito: albListenerDefaultActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
            authenticate_oidc: albListenerDefaultActionAuthenticateOidcToTerraform(struct.authenticateOidc),
            fixed_response: albListenerDefaultActionFixedResponseToTerraform(struct.fixedResponse),
            forward: albListenerDefaultActionForwardToTerraform(struct.forward),
            redirect: albListenerDefaultActionRedirectToTerraform(struct.redirect)
        };
    }
    function albListenerTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            read: cdktf.stringToTerraform(struct.read)
        };
    }
    var AlbListenerTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerTimeoutsOutputReference.prototype, "read", {
            get: function () {
                return this.getStringAttribute('read');
            },
            set: function (value) {
                this._read = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerTimeoutsOutputReference.prototype.resetRead = function () {
            this._read = undefined;
        };
        Object.defineProperty(AlbListenerTimeoutsOutputReference.prototype, "readInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._read;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerTimeoutsOutputReference = AlbListenerTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}
    */
    var AlbListener = /** @class */ (function (_super) {
        __extends(AlbListener, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbListenerConfig
        */
        function AlbListener(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_listener',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new AlbListenerTimeoutsOutputReference(_this, "timeouts", true);
            _this._alpnPolicy = config.alpnPolicy;
            _this._certificateArn = config.certificateArn;
            _this._loadBalancerArn = config.loadBalancerArn;
            _this._port = config.port;
            _this._protocol = config.protocol;
            _this._sslPolicy = config.sslPolicy;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._defaultAction = config.defaultAction;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(AlbListener.prototype, "alpnPolicy", {
            get: function () {
                return this.getStringAttribute('alpn_policy');
            },
            set: function (value) {
                this._alpnPolicy = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetAlpnPolicy = function () {
            this._alpnPolicy = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "alpnPolicyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._alpnPolicy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "certificateArn", {
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            set: function (value) {
                this._certificateArn = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetCertificateArn = function () {
            this._certificateArn = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "certificateArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._certificateArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "loadBalancerArn", {
            get: function () {
                return this.getStringAttribute('load_balancer_arn');
            },
            set: function (value) {
                this._loadBalancerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "loadBalancerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "sslPolicy", {
            get: function () {
                return this.getStringAttribute('ssl_policy');
            },
            set: function (value) {
                this._sslPolicy = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetSslPolicy = function () {
            this._sslPolicy = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "sslPolicyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sslPolicy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "defaultAction", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('default_action');
            },
            set: function (value) {
                this._defaultAction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "defaultActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._defaultAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListener.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        AlbListener.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        AlbListener.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(AlbListener.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AlbListener.prototype.synthesizeAttributes = function () {
            return {
                alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
                certificate_arn: cdktf.stringToTerraform(this._certificateArn),
                load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
                port: cdktf.numberToTerraform(this._port),
                protocol: cdktf.stringToTerraform(this._protocol),
                ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
                timeouts: albListenerTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AlbListener.tfResourceType = "aws_alb_listener";
        return AlbListener;
    }(cdktf.TerraformResource));
    ELB.AlbListener = AlbListener;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html aws_alb_listener_certificate}
    */
    var AlbListenerCertificate = /** @class */ (function (_super) {
        __extends(AlbListenerCertificate, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html aws_alb_listener_certificate} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbListenerCertificateConfig
        */
        function AlbListenerCertificate(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_listener_certificate',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._certificateArn = config.certificateArn;
            _this._listenerArn = config.listenerArn;
            return _this;
        }
        Object.defineProperty(AlbListenerCertificate.prototype, "certificateArn", {
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            set: function (value) {
                this._certificateArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerCertificate.prototype, "certificateArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._certificateArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerCertificate.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerCertificate.prototype, "listenerArn", {
            get: function () {
                return this.getStringAttribute('listener_arn');
            },
            set: function (value) {
                this._listenerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerCertificate.prototype, "listenerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._listenerArn;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AlbListenerCertificate.prototype.synthesizeAttributes = function () {
            return {
                certificate_arn: cdktf.stringToTerraform(this._certificateArn),
                listener_arn: cdktf.stringToTerraform(this._listenerArn)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AlbListenerCertificate.tfResourceType = "aws_alb_listener_certificate";
        return AlbListenerCertificate;
    }(cdktf.TerraformResource));
    ELB.AlbListenerCertificate = AlbListenerCertificate;
    function albListenerRuleActionAuthenticateCognitoToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
            user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
            user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain)
        };
    }
    var AlbListenerRuleActionAuthenticateCognitoOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionAuthenticateCognitoOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolArn", {
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            set: function (value) {
                this._userPoolArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolClientId", {
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            set: function (value) {
                this._userPoolClientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolClientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolClientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolDomain", {
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            set: function (value) {
                this._userPoolDomain = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolDomainInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolDomain;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionAuthenticateCognitoOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionAuthenticateCognitoOutputReference = AlbListenerRuleActionAuthenticateCognitoOutputReference;
    function albListenerRuleActionAuthenticateOidcToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
            client_id: cdktf.stringToTerraform(struct.clientId),
            client_secret: cdktf.stringToTerraform(struct.clientSecret),
            issuer: cdktf.stringToTerraform(struct.issuer),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
            user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
        };
    }
    var AlbListenerRuleActionAuthenticateOidcOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionAuthenticateOidcOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionAuthenticateOidcOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authorizationEndpoint", {
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            set: function (value) {
                this._authorizationEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authorizationEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authorizationEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientId", {
            get: function () {
                return this.getStringAttribute('client_id');
            },
            set: function (value) {
                this._clientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientSecret", {
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            set: function (value) {
                this._clientSecret = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientSecretInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientSecret;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "issuer", {
            get: function () {
                return this.getStringAttribute('issuer');
            },
            set: function (value) {
                this._issuer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "issuerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._issuer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "tokenEndpoint", {
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            set: function (value) {
                this._tokenEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "tokenEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tokenEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "userInfoEndpoint", {
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            set: function (value) {
                this._userInfoEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionAuthenticateOidcOutputReference.prototype, "userInfoEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userInfoEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionAuthenticateOidcOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionAuthenticateOidcOutputReference = AlbListenerRuleActionAuthenticateOidcOutputReference;
    function albListenerRuleActionFixedResponseToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            content_type: cdktf.stringToTerraform(struct.contentType),
            message_body: cdktf.stringToTerraform(struct.messageBody),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var AlbListenerRuleActionFixedResponseOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionFixedResponseOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionFixedResponseOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "contentType", {
            get: function () {
                return this.getStringAttribute('content_type');
            },
            set: function (value) {
                this._contentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "contentTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._contentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "messageBody", {
            get: function () {
                return this.getStringAttribute('message_body');
            },
            set: function (value) {
                this._messageBody = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionFixedResponseOutputReference.prototype.resetMessageBody = function () {
            this._messageBody = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "messageBodyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._messageBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionFixedResponseOutputReference.prototype.resetStatusCode = function () {
            this._statusCode = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionFixedResponseOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionFixedResponseOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionFixedResponseOutputReference = AlbListenerRuleActionFixedResponseOutputReference;
    function albListenerRuleActionForwardStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            duration: cdktf.numberToTerraform(struct.duration),
            enabled: cdktf.booleanToTerraform(struct.enabled)
        };
    }
    var AlbListenerRuleActionForwardStickinessOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionForwardStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionForwardStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleActionForwardStickinessOutputReference.prototype, "duration", {
            get: function () {
                return this.getNumberAttribute('duration');
            },
            set: function (value) {
                this._duration = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionForwardStickinessOutputReference.prototype, "durationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionForwardStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionForwardStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionForwardStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionForwardStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionForwardStickinessOutputReference = AlbListenerRuleActionForwardStickinessOutputReference;
    function albListenerRuleActionForwardTargetGroupToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            arn: cdktf.stringToTerraform(struct.arn),
            weight: cdktf.numberToTerraform(struct.weight)
        };
    }
    function albListenerRuleActionForwardToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            stickiness: albListenerRuleActionForwardStickinessToTerraform(struct.stickiness),
            target_group: cdktf.listMapper(albListenerRuleActionForwardTargetGroupToTerraform)(struct.targetGroup)
        };
    }
    var AlbListenerRuleActionForwardOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionForwardOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionForwardOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            var _this = _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
            _this.__stickinessOutput = new AlbListenerRuleActionForwardStickinessOutputReference(_this, "stickiness", true);
            return _this;
        }
        Object.defineProperty(AlbListenerRuleActionForwardOutputReference.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionForwardOutputReference.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        AlbListenerRuleActionForwardOutputReference.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionForwardOutputReference.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionForwardOutputReference.prototype, "targetGroup", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            set: function (value) {
                this._targetGroup = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionForwardOutputReference.prototype, "targetGroupInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroup;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionForwardOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionForwardOutputReference = AlbListenerRuleActionForwardOutputReference;
    function albListenerRuleActionRedirectToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host: cdktf.stringToTerraform(struct.host),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            query: cdktf.stringToTerraform(struct.query),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var AlbListenerRuleActionRedirectOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleActionRedirectOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleActionRedirectOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "host", {
            get: function () {
                return this.getStringAttribute('host');
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionRedirectOutputReference.prototype.resetHost = function () {
            this._host = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "hostInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._host;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionRedirectOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionRedirectOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionRedirectOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "query", {
            get: function () {
                return this.getStringAttribute('query');
            },
            set: function (value) {
                this._query = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRuleActionRedirectOutputReference.prototype.resetQuery = function () {
            this._query = undefined;
        };
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "queryInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._query;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleActionRedirectOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleActionRedirectOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleActionRedirectOutputReference = AlbListenerRuleActionRedirectOutputReference;
    function albListenerRuleActionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            order: cdktf.numberToTerraform(struct.order),
            target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
            type: cdktf.stringToTerraform(struct.type),
            authenticate_cognito: albListenerRuleActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
            authenticate_oidc: albListenerRuleActionAuthenticateOidcToTerraform(struct.authenticateOidc),
            fixed_response: albListenerRuleActionFixedResponseToTerraform(struct.fixedResponse),
            forward: albListenerRuleActionForwardToTerraform(struct.forward),
            redirect: albListenerRuleActionRedirectToTerraform(struct.redirect)
        };
    }
    function albListenerRuleConditionHostHeaderToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var AlbListenerRuleConditionHostHeaderOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleConditionHostHeaderOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleConditionHostHeaderOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleConditionHostHeaderOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionHostHeaderOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleConditionHostHeaderOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleConditionHostHeaderOutputReference = AlbListenerRuleConditionHostHeaderOutputReference;
    function albListenerRuleConditionHttpHeaderToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            http_header_name: cdktf.stringToTerraform(struct.httpHeaderName),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var AlbListenerRuleConditionHttpHeaderOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleConditionHttpHeaderOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleConditionHttpHeaderOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleConditionHttpHeaderOutputReference.prototype, "httpHeaderName", {
            get: function () {
                return this.getStringAttribute('http_header_name');
            },
            set: function (value) {
                this._httpHeaderName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionHttpHeaderOutputReference.prototype, "httpHeaderNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._httpHeaderName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionHttpHeaderOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionHttpHeaderOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleConditionHttpHeaderOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleConditionHttpHeaderOutputReference = AlbListenerRuleConditionHttpHeaderOutputReference;
    function albListenerRuleConditionHttpRequestMethodToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var AlbListenerRuleConditionHttpRequestMethodOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleConditionHttpRequestMethodOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleConditionHttpRequestMethodOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionHttpRequestMethodOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleConditionHttpRequestMethodOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleConditionHttpRequestMethodOutputReference = AlbListenerRuleConditionHttpRequestMethodOutputReference;
    function albListenerRuleConditionPathPatternToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var AlbListenerRuleConditionPathPatternOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleConditionPathPatternOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleConditionPathPatternOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleConditionPathPatternOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionPathPatternOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleConditionPathPatternOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleConditionPathPatternOutputReference = AlbListenerRuleConditionPathPatternOutputReference;
    function albListenerRuleConditionQueryStringToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            key: cdktf.stringToTerraform(struct.key),
            value: cdktf.stringToTerraform(struct.value)
        };
    }
    function albListenerRuleConditionSourceIpToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var AlbListenerRuleConditionSourceIpOutputReference = /** @class */ (function (_super) {
        __extends(AlbListenerRuleConditionSourceIpOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbListenerRuleConditionSourceIpOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbListenerRuleConditionSourceIpOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRuleConditionSourceIpOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return AlbListenerRuleConditionSourceIpOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbListenerRuleConditionSourceIpOutputReference = AlbListenerRuleConditionSourceIpOutputReference;
    function albListenerRuleConditionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host_header: albListenerRuleConditionHostHeaderToTerraform(struct.hostHeader),
            http_header: albListenerRuleConditionHttpHeaderToTerraform(struct.httpHeader),
            http_request_method: albListenerRuleConditionHttpRequestMethodToTerraform(struct.httpRequestMethod),
            path_pattern: albListenerRuleConditionPathPatternToTerraform(struct.pathPattern),
            query_string: cdktf.listMapper(albListenerRuleConditionQueryStringToTerraform)(struct.queryString),
            source_ip: albListenerRuleConditionSourceIpToTerraform(struct.sourceIp)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}
    */
    var AlbListenerRule = /** @class */ (function (_super) {
        __extends(AlbListenerRule, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbListenerRuleConfig
        */
        function AlbListenerRule(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_listener_rule',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._listenerArn = config.listenerArn;
            _this._priority = config.priority;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._action = config.action;
            _this._condition = config.condition;
            return _this;
        }
        Object.defineProperty(AlbListenerRule.prototype, "arn", {
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
        Object.defineProperty(AlbListenerRule.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "listenerArn", {
            get: function () {
                return this.getStringAttribute('listener_arn');
            },
            set: function (value) {
                this._listenerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "listenerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._listenerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "priority", {
            get: function () {
                return this.getNumberAttribute('priority');
            },
            set: function (value) {
                this._priority = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRule.prototype.resetPriority = function () {
            this._priority = undefined;
        };
        Object.defineProperty(AlbListenerRule.prototype, "priorityInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._priority;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRule.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(AlbListenerRule.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbListenerRule.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(AlbListenerRule.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "action", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('action');
            },
            set: function (value) {
                this._action = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "actionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._action;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "condition", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('condition');
            },
            set: function (value) {
                this._condition = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbListenerRule.prototype, "conditionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._condition;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AlbListenerRule.prototype.synthesizeAttributes = function () {
            return {
                listener_arn: cdktf.stringToTerraform(this._listenerArn),
                priority: cdktf.numberToTerraform(this._priority),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                action: cdktf.listMapper(albListenerRuleActionToTerraform)(this._action),
                condition: cdktf.listMapper(albListenerRuleConditionToTerraform)(this._condition)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AlbListenerRule.tfResourceType = "aws_alb_listener_rule";
        return AlbListenerRule;
    }(cdktf.TerraformResource));
    ELB.AlbListenerRule = AlbListenerRule;
    function albTargetGroupHealthCheckToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            enabled: cdktf.booleanToTerraform(struct.enabled),
            healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
            interval: cdktf.numberToTerraform(struct.interval),
            matcher: cdktf.stringToTerraform(struct.matcher),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            timeout: cdktf.numberToTerraform(struct.timeout),
            unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
        };
    }
    var AlbTargetGroupHealthCheckOutputReference = /** @class */ (function (_super) {
        __extends(AlbTargetGroupHealthCheckOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbTargetGroupHealthCheckOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "healthyThreshold", {
            get: function () {
                return this.getNumberAttribute('healthy_threshold');
            },
            set: function (value) {
                this._healthyThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetHealthyThreshold = function () {
            this._healthyThreshold = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "healthyThresholdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._healthyThreshold;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "interval", {
            get: function () {
                return this.getNumberAttribute('interval');
            },
            set: function (value) {
                this._interval = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetInterval = function () {
            this._interval = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "intervalInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._interval;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "matcher", {
            get: function () {
                return this.getStringAttribute('matcher');
            },
            set: function (value) {
                this._matcher = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetMatcher = function () {
            this._matcher = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "matcherInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._matcher;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "timeout", {
            get: function () {
                return this.getNumberAttribute('timeout');
            },
            set: function (value) {
                this._timeout = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetTimeout = function () {
            this._timeout = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "timeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "unhealthyThreshold", {
            get: function () {
                return this.getNumberAttribute('unhealthy_threshold');
            },
            set: function (value) {
                this._unhealthyThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupHealthCheckOutputReference.prototype.resetUnhealthyThreshold = function () {
            this._unhealthyThreshold = undefined;
        };
        Object.defineProperty(AlbTargetGroupHealthCheckOutputReference.prototype, "unhealthyThresholdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._unhealthyThreshold;
            },
            enumerable: false,
            configurable: true
        });
        return AlbTargetGroupHealthCheckOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbTargetGroupHealthCheckOutputReference = AlbTargetGroupHealthCheckOutputReference;
    function albTargetGroupStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cookie_duration: cdktf.numberToTerraform(struct.cookieDuration),
            cookie_name: cdktf.stringToTerraform(struct.cookieName),
            enabled: cdktf.booleanToTerraform(struct.enabled),
            type: cdktf.stringToTerraform(struct.type)
        };
    }
    var AlbTargetGroupStickinessOutputReference = /** @class */ (function (_super) {
        __extends(AlbTargetGroupStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function AlbTargetGroupStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "cookieDuration", {
            get: function () {
                return this.getNumberAttribute('cookie_duration');
            },
            set: function (value) {
                this._cookieDuration = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupStickinessOutputReference.prototype.resetCookieDuration = function () {
            this._cookieDuration = undefined;
        };
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "cookieDurationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieDuration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "cookieName", {
            get: function () {
                return this.getStringAttribute('cookie_name');
            },
            set: function (value) {
                this._cookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupStickinessOutputReference.prototype.resetCookieName = function () {
            this._cookieName = undefined;
        };
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "cookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupStickinessOutputReference.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        return AlbTargetGroupStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.AlbTargetGroupStickinessOutputReference = AlbTargetGroupStickinessOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group}
    */
    var AlbTargetGroup = /** @class */ (function (_super) {
        __extends(AlbTargetGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbTargetGroupConfig = {}
        */
        function AlbTargetGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_target_group',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__healthCheckOutput = new AlbTargetGroupHealthCheckOutputReference(_this, "health_check", true);
            _this.__stickinessOutput = new AlbTargetGroupStickinessOutputReference(_this, "stickiness", true);
            _this._deregistrationDelay = config.deregistrationDelay;
            _this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
            _this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
            _this._name = config.name;
            _this._namePrefix = config.namePrefix;
            _this._port = config.port;
            _this._preserveClientIp = config.preserveClientIp;
            _this._protocol = config.protocol;
            _this._protocolVersion = config.protocolVersion;
            _this._proxyProtocolV2 = config.proxyProtocolV2;
            _this._slowStart = config.slowStart;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._targetType = config.targetType;
            _this._vpcId = config.vpcId;
            _this._healthCheck = config.healthCheck;
            _this._stickiness = config.stickiness;
            return _this;
        }
        Object.defineProperty(AlbTargetGroup.prototype, "arn", {
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
        Object.defineProperty(AlbTargetGroup.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "deregistrationDelay", {
            get: function () {
                return this.getStringAttribute('deregistration_delay');
            },
            set: function (value) {
                this._deregistrationDelay = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetDeregistrationDelay = function () {
            this._deregistrationDelay = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "deregistrationDelayInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._deregistrationDelay;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
            get: function () {
                return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
            },
            set: function (value) {
                this._lambdaMultiValueHeadersEnabled = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetLambdaMultiValueHeadersEnabled = function () {
            this._lambdaMultiValueHeadersEnabled = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "lambdaMultiValueHeadersEnabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._lambdaMultiValueHeadersEnabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "loadBalancingAlgorithmType", {
            get: function () {
                return this.getStringAttribute('load_balancing_algorithm_type');
            },
            set: function (value) {
                this._loadBalancingAlgorithmType = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetLoadBalancingAlgorithmType = function () {
            this._loadBalancingAlgorithmType = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "loadBalancingAlgorithmTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancingAlgorithmType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "namePrefix", {
            get: function () {
                return this.getStringAttribute('name_prefix');
            },
            set: function (value) {
                this._namePrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetNamePrefix = function () {
            this._namePrefix = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "namePrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "preserveClientIp", {
            get: function () {
                return this.getStringAttribute('preserve_client_ip');
            },
            set: function (value) {
                this._preserveClientIp = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetPreserveClientIp = function () {
            this._preserveClientIp = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "preserveClientIpInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._preserveClientIp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "protocolVersion", {
            get: function () {
                return this.getStringAttribute('protocol_version');
            },
            set: function (value) {
                this._protocolVersion = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetProtocolVersion = function () {
            this._protocolVersion = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "protocolVersionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocolVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "proxyProtocolV2", {
            get: function () {
                return this.getBooleanAttribute('proxy_protocol_v2');
            },
            set: function (value) {
                this._proxyProtocolV2 = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetProxyProtocolV2 = function () {
            this._proxyProtocolV2 = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "proxyProtocolV2Input", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._proxyProtocolV2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "slowStart", {
            get: function () {
                return this.getNumberAttribute('slow_start');
            },
            set: function (value) {
                this._slowStart = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetSlowStart = function () {
            this._slowStart = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "slowStartInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._slowStart;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "targetType", {
            get: function () {
                return this.getStringAttribute('target_type');
            },
            set: function (value) {
                this._targetType = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetTargetType = function () {
            this._targetType = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "targetTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "healthCheck", {
            get: function () {
                return this.__healthCheckOutput;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.putHealthCheck = function (value) {
            this._healthCheck = value;
        };
        AlbTargetGroup.prototype.resetHealthCheck = function () {
            this._healthCheck = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "healthCheckInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._healthCheck;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroup.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroup.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        AlbTargetGroup.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(AlbTargetGroup.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AlbTargetGroup.prototype.synthesizeAttributes = function () {
            return {
                deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
                lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
                load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
                name: cdktf.stringToTerraform(this._name),
                name_prefix: cdktf.stringToTerraform(this._namePrefix),
                port: cdktf.numberToTerraform(this._port),
                preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
                protocol: cdktf.stringToTerraform(this._protocol),
                protocol_version: cdktf.stringToTerraform(this._protocolVersion),
                proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
                slow_start: cdktf.numberToTerraform(this._slowStart),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                target_type: cdktf.stringToTerraform(this._targetType),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                health_check: albTargetGroupHealthCheckToTerraform(this._healthCheck),
                stickiness: albTargetGroupStickinessToTerraform(this._stickiness)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AlbTargetGroup.tfResourceType = "aws_alb_target_group";
        return AlbTargetGroup;
    }(cdktf.TerraformResource));
    ELB.AlbTargetGroup = AlbTargetGroup;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment}
    */
    var AlbTargetGroupAttachment = /** @class */ (function (_super) {
        __extends(AlbTargetGroupAttachment, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AlbTargetGroupAttachmentConfig
        */
        function AlbTargetGroupAttachment(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_target_group_attachment',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._availabilityZone = config.availabilityZone;
            _this._port = config.port;
            _this._targetGroupArn = config.targetGroupArn;
            _this._targetId = config.targetId;
            return _this;
        }
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupAttachment.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        AlbTargetGroupAttachment.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetGroupArn", {
            get: function () {
                return this.getStringAttribute('target_group_arn');
            },
            set: function (value) {
                this._targetGroupArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetGroupArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroupArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetId", {
            get: function () {
                return this.getStringAttribute('target_id');
            },
            set: function (value) {
                this._targetId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlbTargetGroupAttachment.prototype, "targetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AlbTargetGroupAttachment.prototype.synthesizeAttributes = function () {
            return {
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                port: cdktf.numberToTerraform(this._port),
                target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
                target_id: cdktf.stringToTerraform(this._targetId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AlbTargetGroupAttachment.tfResourceType = "aws_alb_target_group_attachment";
        return AlbTargetGroupAttachment;
    }(cdktf.TerraformResource));
    ELB.AlbTargetGroupAttachment = AlbTargetGroupAttachment;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy}
    */
    var AppCookieStickinessPolicy = /** @class */ (function (_super) {
        __extends(AppCookieStickinessPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options AppCookieStickinessPolicyConfig
        */
        function AppCookieStickinessPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_app_cookie_stickiness_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cookieName = config.cookieName;
            _this._lbPort = config.lbPort;
            _this._loadBalancer = config.loadBalancer;
            _this._name = config.name;
            return _this;
        }
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "cookieName", {
            get: function () {
                return this.getStringAttribute('cookie_name');
            },
            set: function (value) {
                this._cookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "cookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "lbPort", {
            get: function () {
                return this.getNumberAttribute('lb_port');
            },
            set: function (value) {
                this._lbPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "lbPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._lbPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "loadBalancer", {
            get: function () {
                return this.getStringAttribute('load_balancer');
            },
            set: function (value) {
                this._loadBalancer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "loadBalancerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppCookieStickinessPolicy.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        AppCookieStickinessPolicy.prototype.synthesizeAttributes = function () {
            return {
                cookie_name: cdktf.stringToTerraform(this._cookieName),
                lb_port: cdktf.numberToTerraform(this._lbPort),
                load_balancer: cdktf.stringToTerraform(this._loadBalancer),
                name: cdktf.stringToTerraform(this._name)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        AppCookieStickinessPolicy.tfResourceType = "aws_app_cookie_stickiness_policy";
        return AppCookieStickinessPolicy;
    }(cdktf.TerraformResource));
    ELB.AppCookieStickinessPolicy = AppCookieStickinessPolicy;
    function lbAccessLogsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            bucket: cdktf.stringToTerraform(struct.bucket),
            enabled: cdktf.booleanToTerraform(struct.enabled),
            prefix: cdktf.stringToTerraform(struct.prefix)
        };
    }
    var LbAccessLogsOutputReference = /** @class */ (function (_super) {
        __extends(LbAccessLogsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbAccessLogsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "bucket", {
            get: function () {
                return this.getStringAttribute('bucket');
            },
            set: function (value) {
                this._bucket = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "bucketInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._bucket;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbAccessLogsOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "prefix", {
            get: function () {
                return this.getStringAttribute('prefix');
            },
            set: function (value) {
                this._prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        LbAccessLogsOutputReference.prototype.resetPrefix = function () {
            this._prefix = undefined;
        };
        Object.defineProperty(LbAccessLogsOutputReference.prototype, "prefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._prefix;
            },
            enumerable: false,
            configurable: true
        });
        return LbAccessLogsOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbAccessLogsOutputReference = LbAccessLogsOutputReference;
    function lbSubnetMappingToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allocation_id: cdktf.stringToTerraform(struct.allocationId),
            ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
            private_ipv4_address: cdktf.stringToTerraform(struct.privateIpv4Address),
            subnet_id: cdktf.stringToTerraform(struct.subnetId)
        };
    }
    function lbTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            create: cdktf.stringToTerraform(struct.create),
            "delete": cdktf.stringToTerraform(struct["delete"]),
            update: cdktf.stringToTerraform(struct.update)
        };
    }
    var LbTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(LbTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "create", {
            get: function () {
                return this.getStringAttribute('create');
            },
            set: function (value) {
                this._create = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTimeoutsOutputReference.prototype.resetCreate = function () {
            this._create = undefined;
        };
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "createInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._create;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "delete", {
            get: function () {
                return this.getStringAttribute('delete');
            },
            set: function (value) {
                this._delete = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTimeoutsOutputReference.prototype.resetDelete = function () {
            this._delete = undefined;
        };
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "deleteInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._delete;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "update", {
            get: function () {
                return this.getStringAttribute('update');
            },
            set: function (value) {
                this._update = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTimeoutsOutputReference.prototype.resetUpdate = function () {
            this._update = undefined;
        };
        Object.defineProperty(LbTimeoutsOutputReference.prototype, "updateInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._update;
            },
            enumerable: false,
            configurable: true
        });
        return LbTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbTimeoutsOutputReference = LbTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}
    */
    var Lb = /** @class */ (function (_super) {
        __extends(Lb, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbConfig = {}
        */
        function Lb(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__accessLogsOutput = new LbAccessLogsOutputReference(_this, "access_logs", true);
            _this.__timeoutsOutput = new LbTimeoutsOutputReference(_this, "timeouts", true);
            _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
            _this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
            _this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
            _this._enableDeletionProtection = config.enableDeletionProtection;
            _this._enableHttp2 = config.enableHttp2;
            _this._idleTimeout = config.idleTimeout;
            _this._internal = config.internal;
            _this._ipAddressType = config.ipAddressType;
            _this._loadBalancerType = config.loadBalancerType;
            _this._name = config.name;
            _this._namePrefix = config.namePrefix;
            _this._securityGroups = config.securityGroups;
            _this._subnets = config.subnets;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._accessLogs = config.accessLogs;
            _this._subnetMapping = config.subnetMapping;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(Lb.prototype, "arn", {
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
        Object.defineProperty(Lb.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "customerOwnedIpv4Pool", {
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            set: function (value) {
                this._customerOwnedIpv4Pool = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetCustomerOwnedIpv4Pool = function () {
            this._customerOwnedIpv4Pool = undefined;
        };
        Object.defineProperty(Lb.prototype, "customerOwnedIpv4PoolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._customerOwnedIpv4Pool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "dropInvalidHeaderFields", {
            get: function () {
                return this.getBooleanAttribute('drop_invalid_header_fields');
            },
            set: function (value) {
                this._dropInvalidHeaderFields = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetDropInvalidHeaderFields = function () {
            this._dropInvalidHeaderFields = undefined;
        };
        Object.defineProperty(Lb.prototype, "dropInvalidHeaderFieldsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._dropInvalidHeaderFields;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "enableCrossZoneLoadBalancing", {
            get: function () {
                return this.getBooleanAttribute('enable_cross_zone_load_balancing');
            },
            set: function (value) {
                this._enableCrossZoneLoadBalancing = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetEnableCrossZoneLoadBalancing = function () {
            this._enableCrossZoneLoadBalancing = undefined;
        };
        Object.defineProperty(Lb.prototype, "enableCrossZoneLoadBalancingInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableCrossZoneLoadBalancing;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "enableDeletionProtection", {
            get: function () {
                return this.getBooleanAttribute('enable_deletion_protection');
            },
            set: function (value) {
                this._enableDeletionProtection = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetEnableDeletionProtection = function () {
            this._enableDeletionProtection = undefined;
        };
        Object.defineProperty(Lb.prototype, "enableDeletionProtectionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableDeletionProtection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "enableHttp2", {
            get: function () {
                return this.getBooleanAttribute('enable_http2');
            },
            set: function (value) {
                this._enableHttp2 = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetEnableHttp2 = function () {
            this._enableHttp2 = undefined;
        };
        Object.defineProperty(Lb.prototype, "enableHttp2Input", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enableHttp2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "idleTimeout", {
            get: function () {
                return this.getNumberAttribute('idle_timeout');
            },
            set: function (value) {
                this._idleTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetIdleTimeout = function () {
            this._idleTimeout = undefined;
        };
        Object.defineProperty(Lb.prototype, "idleTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._idleTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "internal", {
            get: function () {
                return this.getBooleanAttribute('internal');
            },
            set: function (value) {
                this._internal = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetInternal = function () {
            this._internal = undefined;
        };
        Object.defineProperty(Lb.prototype, "internalInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._internal;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "ipAddressType", {
            get: function () {
                return this.getStringAttribute('ip_address_type');
            },
            set: function (value) {
                this._ipAddressType = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetIpAddressType = function () {
            this._ipAddressType = undefined;
        };
        Object.defineProperty(Lb.prototype, "ipAddressTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._ipAddressType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "loadBalancerType", {
            get: function () {
                return this.getStringAttribute('load_balancer_type');
            },
            set: function (value) {
                this._loadBalancerType = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetLoadBalancerType = function () {
            this._loadBalancerType = undefined;
        };
        Object.defineProperty(Lb.prototype, "loadBalancerTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(Lb.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "namePrefix", {
            get: function () {
                return this.getStringAttribute('name_prefix');
            },
            set: function (value) {
                this._namePrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetNamePrefix = function () {
            this._namePrefix = undefined;
        };
        Object.defineProperty(Lb.prototype, "namePrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "securityGroups", {
            get: function () {
                return this.getListAttribute('security_groups');
            },
            set: function (value) {
                this._securityGroups = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetSecurityGroups = function () {
            this._securityGroups = undefined;
        };
        Object.defineProperty(Lb.prototype, "securityGroupsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._securityGroups;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "subnets", {
            get: function () {
                return this.getListAttribute('subnets');
            },
            set: function (value) {
                this._subnets = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetSubnets = function () {
            this._subnets = undefined;
        };
        Object.defineProperty(Lb.prototype, "subnetsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnets;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Lb.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Lb.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "zoneId", {
            // zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('zone_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "accessLogs", {
            get: function () {
                return this.__accessLogsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.putAccessLogs = function (value) {
            this._accessLogs = value;
        };
        Lb.prototype.resetAccessLogs = function () {
            this._accessLogs = undefined;
        };
        Object.defineProperty(Lb.prototype, "accessLogsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._accessLogs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "subnetMapping", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('subnet_mapping');
            },
            set: function (value) {
                this._subnetMapping = value;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.resetSubnetMapping = function () {
            this._subnetMapping = undefined;
        };
        Object.defineProperty(Lb.prototype, "subnetMappingInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._subnetMapping;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Lb.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        Lb.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        Lb.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(Lb.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Lb.prototype.synthesizeAttributes = function () {
            return {
                customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
                drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
                enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
                enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
                enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
                idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
                internal: cdktf.booleanToTerraform(this._internal),
                ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
                load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
                name: cdktf.stringToTerraform(this._name),
                name_prefix: cdktf.stringToTerraform(this._namePrefix),
                security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
                subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                access_logs: lbAccessLogsToTerraform(this._accessLogs),
                subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform)(this._subnetMapping),
                timeouts: lbTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Lb.tfResourceType = "aws_lb";
        return Lb;
    }(cdktf.TerraformResource));
    ELB.Lb = Lb;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy}
    */
    var LbCookieStickinessPolicy = /** @class */ (function (_super) {
        __extends(LbCookieStickinessPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbCookieStickinessPolicyConfig
        */
        function LbCookieStickinessPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_cookie_stickiness_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._cookieExpirationPeriod = config.cookieExpirationPeriod;
            _this._lbPort = config.lbPort;
            _this._loadBalancer = config.loadBalancer;
            _this._name = config.name;
            return _this;
        }
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "cookieExpirationPeriod", {
            get: function () {
                return this.getNumberAttribute('cookie_expiration_period');
            },
            set: function (value) {
                this._cookieExpirationPeriod = value;
            },
            enumerable: false,
            configurable: true
        });
        LbCookieStickinessPolicy.prototype.resetCookieExpirationPeriod = function () {
            this._cookieExpirationPeriod = undefined;
        };
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "cookieExpirationPeriodInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieExpirationPeriod;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "lbPort", {
            get: function () {
                return this.getNumberAttribute('lb_port');
            },
            set: function (value) {
                this._lbPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "lbPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._lbPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "loadBalancer", {
            get: function () {
                return this.getStringAttribute('load_balancer');
            },
            set: function (value) {
                this._loadBalancer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "loadBalancerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbCookieStickinessPolicy.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbCookieStickinessPolicy.prototype.synthesizeAttributes = function () {
            return {
                cookie_expiration_period: cdktf.numberToTerraform(this._cookieExpirationPeriod),
                lb_port: cdktf.numberToTerraform(this._lbPort),
                load_balancer: cdktf.stringToTerraform(this._loadBalancer),
                name: cdktf.stringToTerraform(this._name)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbCookieStickinessPolicy.tfResourceType = "aws_lb_cookie_stickiness_policy";
        return LbCookieStickinessPolicy;
    }(cdktf.TerraformResource));
    ELB.LbCookieStickinessPolicy = LbCookieStickinessPolicy;
    function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
            user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
            user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain)
        };
    }
    var LbListenerDefaultActionAuthenticateCognitoOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionAuthenticateCognitoOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionAuthenticateCognitoOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolArn", {
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            set: function (value) {
                this._userPoolArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolClientId", {
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            set: function (value) {
                this._userPoolClientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolClientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolClientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolDomain", {
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            set: function (value) {
                this._userPoolDomain = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateCognitoOutputReference.prototype, "userPoolDomainInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolDomain;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionAuthenticateCognitoOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionAuthenticateCognitoOutputReference = LbListenerDefaultActionAuthenticateCognitoOutputReference;
    function lbListenerDefaultActionAuthenticateOidcToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
            client_id: cdktf.stringToTerraform(struct.clientId),
            client_secret: cdktf.stringToTerraform(struct.clientSecret),
            issuer: cdktf.stringToTerraform(struct.issuer),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
            user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
        };
    }
    var LbListenerDefaultActionAuthenticateOidcOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionAuthenticateOidcOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionAuthenticateOidcOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authorizationEndpoint", {
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            set: function (value) {
                this._authorizationEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "authorizationEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authorizationEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientId", {
            get: function () {
                return this.getStringAttribute('client_id');
            },
            set: function (value) {
                this._clientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientSecret", {
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            set: function (value) {
                this._clientSecret = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "clientSecretInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientSecret;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "issuer", {
            get: function () {
                return this.getStringAttribute('issuer');
            },
            set: function (value) {
                this._issuer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "issuerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._issuer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionAuthenticateOidcOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "tokenEndpoint", {
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            set: function (value) {
                this._tokenEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "tokenEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tokenEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "userInfoEndpoint", {
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            set: function (value) {
                this._userInfoEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionAuthenticateOidcOutputReference.prototype, "userInfoEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userInfoEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionAuthenticateOidcOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionAuthenticateOidcOutputReference = LbListenerDefaultActionAuthenticateOidcOutputReference;
    function lbListenerDefaultActionFixedResponseToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            content_type: cdktf.stringToTerraform(struct.contentType),
            message_body: cdktf.stringToTerraform(struct.messageBody),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var LbListenerDefaultActionFixedResponseOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionFixedResponseOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionFixedResponseOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "contentType", {
            get: function () {
                return this.getStringAttribute('content_type');
            },
            set: function (value) {
                this._contentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "contentTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._contentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "messageBody", {
            get: function () {
                return this.getStringAttribute('message_body');
            },
            set: function (value) {
                this._messageBody = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionFixedResponseOutputReference.prototype.resetMessageBody = function () {
            this._messageBody = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "messageBodyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._messageBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionFixedResponseOutputReference.prototype.resetStatusCode = function () {
            this._statusCode = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionFixedResponseOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionFixedResponseOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionFixedResponseOutputReference = LbListenerDefaultActionFixedResponseOutputReference;
    function lbListenerDefaultActionForwardStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            duration: cdktf.numberToTerraform(struct.duration),
            enabled: cdktf.booleanToTerraform(struct.enabled)
        };
    }
    var LbListenerDefaultActionForwardStickinessOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionForwardStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionForwardStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerDefaultActionForwardStickinessOutputReference.prototype, "duration", {
            get: function () {
                return this.getNumberAttribute('duration');
            },
            set: function (value) {
                this._duration = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionForwardStickinessOutputReference.prototype, "durationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionForwardStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionForwardStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionForwardStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionForwardStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionForwardStickinessOutputReference = LbListenerDefaultActionForwardStickinessOutputReference;
    function lbListenerDefaultActionForwardTargetGroupToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            arn: cdktf.stringToTerraform(struct.arn),
            weight: cdktf.numberToTerraform(struct.weight)
        };
    }
    function lbListenerDefaultActionForwardToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            stickiness: lbListenerDefaultActionForwardStickinessToTerraform(struct.stickiness),
            target_group: cdktf.listMapper(lbListenerDefaultActionForwardTargetGroupToTerraform)(struct.targetGroup)
        };
    }
    var LbListenerDefaultActionForwardOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionForwardOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionForwardOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            var _this = _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
            _this.__stickinessOutput = new LbListenerDefaultActionForwardStickinessOutputReference(_this, "stickiness", true);
            return _this;
        }
        Object.defineProperty(LbListenerDefaultActionForwardOutputReference.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionForwardOutputReference.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        LbListenerDefaultActionForwardOutputReference.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionForwardOutputReference.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionForwardOutputReference.prototype, "targetGroup", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            set: function (value) {
                this._targetGroup = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionForwardOutputReference.prototype, "targetGroupInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroup;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionForwardOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionForwardOutputReference = LbListenerDefaultActionForwardOutputReference;
    function lbListenerDefaultActionRedirectToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host: cdktf.stringToTerraform(struct.host),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            query: cdktf.stringToTerraform(struct.query),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var LbListenerDefaultActionRedirectOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerDefaultActionRedirectOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerDefaultActionRedirectOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "host", {
            get: function () {
                return this.getStringAttribute('host');
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionRedirectOutputReference.prototype.resetHost = function () {
            this._host = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "hostInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._host;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionRedirectOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionRedirectOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionRedirectOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "query", {
            get: function () {
                return this.getStringAttribute('query');
            },
            set: function (value) {
                this._query = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerDefaultActionRedirectOutputReference.prototype.resetQuery = function () {
            this._query = undefined;
        };
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "queryInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._query;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerDefaultActionRedirectOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerDefaultActionRedirectOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerDefaultActionRedirectOutputReference = LbListenerDefaultActionRedirectOutputReference;
    function lbListenerDefaultActionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            order: cdktf.numberToTerraform(struct.order),
            target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
            type: cdktf.stringToTerraform(struct.type),
            authenticate_cognito: lbListenerDefaultActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
            authenticate_oidc: lbListenerDefaultActionAuthenticateOidcToTerraform(struct.authenticateOidc),
            fixed_response: lbListenerDefaultActionFixedResponseToTerraform(struct.fixedResponse),
            forward: lbListenerDefaultActionForwardToTerraform(struct.forward),
            redirect: lbListenerDefaultActionRedirectToTerraform(struct.redirect)
        };
    }
    function lbListenerTimeoutsToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            read: cdktf.stringToTerraform(struct.read)
        };
    }
    var LbListenerTimeoutsOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerTimeoutsOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerTimeoutsOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerTimeoutsOutputReference.prototype, "read", {
            get: function () {
                return this.getStringAttribute('read');
            },
            set: function (value) {
                this._read = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerTimeoutsOutputReference.prototype.resetRead = function () {
            this._read = undefined;
        };
        Object.defineProperty(LbListenerTimeoutsOutputReference.prototype, "readInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._read;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerTimeoutsOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerTimeoutsOutputReference = LbListenerTimeoutsOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}
    */
    var LbListener = /** @class */ (function (_super) {
        __extends(LbListener, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbListenerConfig
        */
        function LbListener(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_listener',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__timeoutsOutput = new LbListenerTimeoutsOutputReference(_this, "timeouts", true);
            _this._alpnPolicy = config.alpnPolicy;
            _this._certificateArn = config.certificateArn;
            _this._loadBalancerArn = config.loadBalancerArn;
            _this._port = config.port;
            _this._protocol = config.protocol;
            _this._sslPolicy = config.sslPolicy;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._defaultAction = config.defaultAction;
            _this._timeouts = config.timeouts;
            return _this;
        }
        Object.defineProperty(LbListener.prototype, "alpnPolicy", {
            get: function () {
                return this.getStringAttribute('alpn_policy');
            },
            set: function (value) {
                this._alpnPolicy = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetAlpnPolicy = function () {
            this._alpnPolicy = undefined;
        };
        Object.defineProperty(LbListener.prototype, "alpnPolicyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._alpnPolicy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "certificateArn", {
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            set: function (value) {
                this._certificateArn = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetCertificateArn = function () {
            this._certificateArn = undefined;
        };
        Object.defineProperty(LbListener.prototype, "certificateArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._certificateArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "loadBalancerArn", {
            get: function () {
                return this.getStringAttribute('load_balancer_arn');
            },
            set: function (value) {
                this._loadBalancerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "loadBalancerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbListener.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(LbListener.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "sslPolicy", {
            get: function () {
                return this.getStringAttribute('ssl_policy');
            },
            set: function (value) {
                this._sslPolicy = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetSslPolicy = function () {
            this._sslPolicy = undefined;
        };
        Object.defineProperty(LbListener.prototype, "sslPolicyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sslPolicy;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(LbListener.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(LbListener.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "defaultAction", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('default_action');
            },
            set: function (value) {
                this._defaultAction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "defaultActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._defaultAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListener.prototype, "timeouts", {
            get: function () {
                return this.__timeoutsOutput;
            },
            enumerable: false,
            configurable: true
        });
        LbListener.prototype.putTimeouts = function (value) {
            this._timeouts = value;
        };
        LbListener.prototype.resetTimeouts = function () {
            this._timeouts = undefined;
        };
        Object.defineProperty(LbListener.prototype, "timeoutsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeouts;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbListener.prototype.synthesizeAttributes = function () {
            return {
                alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
                certificate_arn: cdktf.stringToTerraform(this._certificateArn),
                load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
                port: cdktf.numberToTerraform(this._port),
                protocol: cdktf.stringToTerraform(this._protocol),
                ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform)(this._defaultAction),
                timeouts: lbListenerTimeoutsToTerraform(this._timeouts)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbListener.tfResourceType = "aws_lb_listener";
        return LbListener;
    }(cdktf.TerraformResource));
    ELB.LbListener = LbListener;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate}
    */
    var LbListenerCertificate = /** @class */ (function (_super) {
        __extends(LbListenerCertificate, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbListenerCertificateConfig
        */
        function LbListenerCertificate(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_listener_certificate',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._certificateArn = config.certificateArn;
            _this._listenerArn = config.listenerArn;
            return _this;
        }
        Object.defineProperty(LbListenerCertificate.prototype, "certificateArn", {
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            set: function (value) {
                this._certificateArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerCertificate.prototype, "certificateArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._certificateArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerCertificate.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerCertificate.prototype, "listenerArn", {
            get: function () {
                return this.getStringAttribute('listener_arn');
            },
            set: function (value) {
                this._listenerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerCertificate.prototype, "listenerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._listenerArn;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbListenerCertificate.prototype.synthesizeAttributes = function () {
            return {
                certificate_arn: cdktf.stringToTerraform(this._certificateArn),
                listener_arn: cdktf.stringToTerraform(this._listenerArn)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbListenerCertificate.tfResourceType = "aws_lb_listener_certificate";
        return LbListenerCertificate;
    }(cdktf.TerraformResource));
    ELB.LbListenerCertificate = LbListenerCertificate;
    function lbListenerRuleActionAuthenticateCognitoToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
            user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
            user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain)
        };
    }
    var LbListenerRuleActionAuthenticateCognitoOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionAuthenticateCognitoOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateCognitoOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolArn", {
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            set: function (value) {
                this._userPoolArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolClientId", {
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            set: function (value) {
                this._userPoolClientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolClientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolClientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolDomain", {
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            set: function (value) {
                this._userPoolDomain = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateCognitoOutputReference.prototype, "userPoolDomainInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userPoolDomain;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionAuthenticateCognitoOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionAuthenticateCognitoOutputReference = LbListenerRuleActionAuthenticateCognitoOutputReference;
    function lbListenerRuleActionAuthenticateOidcToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
            authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
            client_id: cdktf.stringToTerraform(struct.clientId),
            client_secret: cdktf.stringToTerraform(struct.clientSecret),
            issuer: cdktf.stringToTerraform(struct.issuer),
            on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
            scope: cdktf.stringToTerraform(struct.scope),
            session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
            session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
            token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
            user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
        };
    }
    var LbListenerRuleActionAuthenticateOidcOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionAuthenticateOidcOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionAuthenticateOidcOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParams", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            set: function (value) {
                this._authenticationRequestExtraParams = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetAuthenticationRequestExtraParams = function () {
            this._authenticationRequestExtraParams = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authenticationRequestExtraParamsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationRequestExtraParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authorizationEndpoint", {
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            set: function (value) {
                this._authorizationEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "authorizationEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authorizationEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientId", {
            get: function () {
                return this.getStringAttribute('client_id');
            },
            set: function (value) {
                this._clientId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientSecret", {
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            set: function (value) {
                this._clientSecret = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "clientSecretInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._clientSecret;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "issuer", {
            get: function () {
                return this.getStringAttribute('issuer');
            },
            set: function (value) {
                this._issuer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "issuerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._issuer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequest", {
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            set: function (value) {
                this._onUnauthenticatedRequest = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetOnUnauthenticatedRequest = function () {
            this._onUnauthenticatedRequest = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "onUnauthenticatedRequestInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._onUnauthenticatedRequest;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "scope", {
            get: function () {
                return this.getStringAttribute('scope');
            },
            set: function (value) {
                this._scope = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetScope = function () {
            this._scope = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "scopeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionCookieName", {
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            set: function (value) {
                this._sessionCookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetSessionCookieName = function () {
            this._sessionCookieName = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionCookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionCookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionTimeout", {
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            set: function (value) {
                this._sessionTimeout = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionAuthenticateOidcOutputReference.prototype.resetSessionTimeout = function () {
            this._sessionTimeout = undefined;
        };
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "sessionTimeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._sessionTimeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "tokenEndpoint", {
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            set: function (value) {
                this._tokenEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "tokenEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tokenEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "userInfoEndpoint", {
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            set: function (value) {
                this._userInfoEndpoint = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionAuthenticateOidcOutputReference.prototype, "userInfoEndpointInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._userInfoEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionAuthenticateOidcOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionAuthenticateOidcOutputReference = LbListenerRuleActionAuthenticateOidcOutputReference;
    function lbListenerRuleActionFixedResponseToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            content_type: cdktf.stringToTerraform(struct.contentType),
            message_body: cdktf.stringToTerraform(struct.messageBody),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var LbListenerRuleActionFixedResponseOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionFixedResponseOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionFixedResponseOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "contentType", {
            get: function () {
                return this.getStringAttribute('content_type');
            },
            set: function (value) {
                this._contentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "contentTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._contentType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "messageBody", {
            get: function () {
                return this.getStringAttribute('message_body');
            },
            set: function (value) {
                this._messageBody = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionFixedResponseOutputReference.prototype.resetMessageBody = function () {
            this._messageBody = undefined;
        };
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "messageBodyInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._messageBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionFixedResponseOutputReference.prototype.resetStatusCode = function () {
            this._statusCode = undefined;
        };
        Object.defineProperty(LbListenerRuleActionFixedResponseOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionFixedResponseOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionFixedResponseOutputReference = LbListenerRuleActionFixedResponseOutputReference;
    function lbListenerRuleActionForwardStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            duration: cdktf.numberToTerraform(struct.duration),
            enabled: cdktf.booleanToTerraform(struct.enabled)
        };
    }
    var LbListenerRuleActionForwardStickinessOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionForwardStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionForwardStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleActionForwardStickinessOutputReference.prototype, "duration", {
            get: function () {
                return this.getNumberAttribute('duration');
            },
            set: function (value) {
                this._duration = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionForwardStickinessOutputReference.prototype, "durationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionForwardStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionForwardStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(LbListenerRuleActionForwardStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionForwardStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionForwardStickinessOutputReference = LbListenerRuleActionForwardStickinessOutputReference;
    function lbListenerRuleActionForwardTargetGroupToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            arn: cdktf.stringToTerraform(struct.arn),
            weight: cdktf.numberToTerraform(struct.weight)
        };
    }
    function lbListenerRuleActionForwardToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            stickiness: lbListenerRuleActionForwardStickinessToTerraform(struct.stickiness),
            target_group: cdktf.listMapper(lbListenerRuleActionForwardTargetGroupToTerraform)(struct.targetGroup)
        };
    }
    var LbListenerRuleActionForwardOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionForwardOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionForwardOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            var _this = _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
            _this.__stickinessOutput = new LbListenerRuleActionForwardStickinessOutputReference(_this, "stickiness", true);
            return _this;
        }
        Object.defineProperty(LbListenerRuleActionForwardOutputReference.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionForwardOutputReference.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        LbListenerRuleActionForwardOutputReference.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(LbListenerRuleActionForwardOutputReference.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionForwardOutputReference.prototype, "targetGroup", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            set: function (value) {
                this._targetGroup = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionForwardOutputReference.prototype, "targetGroupInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroup;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionForwardOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionForwardOutputReference = LbListenerRuleActionForwardOutputReference;
    function lbListenerRuleActionRedirectToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host: cdktf.stringToTerraform(struct.host),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            query: cdktf.stringToTerraform(struct.query),
            status_code: cdktf.stringToTerraform(struct.statusCode)
        };
    }
    var LbListenerRuleActionRedirectOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleActionRedirectOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleActionRedirectOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "host", {
            get: function () {
                return this.getStringAttribute('host');
            },
            set: function (value) {
                this._host = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionRedirectOutputReference.prototype.resetHost = function () {
            this._host = undefined;
        };
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "hostInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._host;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionRedirectOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionRedirectOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionRedirectOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "query", {
            get: function () {
                return this.getStringAttribute('query');
            },
            set: function (value) {
                this._query = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRuleActionRedirectOutputReference.prototype.resetQuery = function () {
            this._query = undefined;
        };
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "queryInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._query;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "statusCode", {
            get: function () {
                return this.getStringAttribute('status_code');
            },
            set: function (value) {
                this._statusCode = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleActionRedirectOutputReference.prototype, "statusCodeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._statusCode;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleActionRedirectOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleActionRedirectOutputReference = LbListenerRuleActionRedirectOutputReference;
    function lbListenerRuleActionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            order: cdktf.numberToTerraform(struct.order),
            target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
            type: cdktf.stringToTerraform(struct.type),
            authenticate_cognito: lbListenerRuleActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
            authenticate_oidc: lbListenerRuleActionAuthenticateOidcToTerraform(struct.authenticateOidc),
            fixed_response: lbListenerRuleActionFixedResponseToTerraform(struct.fixedResponse),
            forward: lbListenerRuleActionForwardToTerraform(struct.forward),
            redirect: lbListenerRuleActionRedirectToTerraform(struct.redirect)
        };
    }
    function lbListenerRuleConditionHostHeaderToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var LbListenerRuleConditionHostHeaderOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleConditionHostHeaderOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleConditionHostHeaderOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleConditionHostHeaderOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionHostHeaderOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleConditionHostHeaderOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleConditionHostHeaderOutputReference = LbListenerRuleConditionHostHeaderOutputReference;
    function lbListenerRuleConditionHttpHeaderToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            http_header_name: cdktf.stringToTerraform(struct.httpHeaderName),
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var LbListenerRuleConditionHttpHeaderOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleConditionHttpHeaderOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleConditionHttpHeaderOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleConditionHttpHeaderOutputReference.prototype, "httpHeaderName", {
            get: function () {
                return this.getStringAttribute('http_header_name');
            },
            set: function (value) {
                this._httpHeaderName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionHttpHeaderOutputReference.prototype, "httpHeaderNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._httpHeaderName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionHttpHeaderOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionHttpHeaderOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleConditionHttpHeaderOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleConditionHttpHeaderOutputReference = LbListenerRuleConditionHttpHeaderOutputReference;
    function lbListenerRuleConditionHttpRequestMethodToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var LbListenerRuleConditionHttpRequestMethodOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleConditionHttpRequestMethodOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleConditionHttpRequestMethodOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionHttpRequestMethodOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleConditionHttpRequestMethodOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleConditionHttpRequestMethodOutputReference = LbListenerRuleConditionHttpRequestMethodOutputReference;
    function lbListenerRuleConditionPathPatternToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var LbListenerRuleConditionPathPatternOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleConditionPathPatternOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleConditionPathPatternOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleConditionPathPatternOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionPathPatternOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleConditionPathPatternOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleConditionPathPatternOutputReference = LbListenerRuleConditionPathPatternOutputReference;
    function lbListenerRuleConditionQueryStringToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            key: cdktf.stringToTerraform(struct.key),
            value: cdktf.stringToTerraform(struct.value)
        };
    }
    function lbListenerRuleConditionSourceIpToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
        };
    }
    var LbListenerRuleConditionSourceIpOutputReference = /** @class */ (function (_super) {
        __extends(LbListenerRuleConditionSourceIpOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbListenerRuleConditionSourceIpOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbListenerRuleConditionSourceIpOutputReference.prototype, "values", {
            get: function () {
                return this.getListAttribute('values');
            },
            set: function (value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRuleConditionSourceIpOutputReference.prototype, "valuesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        return LbListenerRuleConditionSourceIpOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbListenerRuleConditionSourceIpOutputReference = LbListenerRuleConditionSourceIpOutputReference;
    function lbListenerRuleConditionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            host_header: lbListenerRuleConditionHostHeaderToTerraform(struct.hostHeader),
            http_header: lbListenerRuleConditionHttpHeaderToTerraform(struct.httpHeader),
            http_request_method: lbListenerRuleConditionHttpRequestMethodToTerraform(struct.httpRequestMethod),
            path_pattern: lbListenerRuleConditionPathPatternToTerraform(struct.pathPattern),
            query_string: cdktf.listMapper(lbListenerRuleConditionQueryStringToTerraform)(struct.queryString),
            source_ip: lbListenerRuleConditionSourceIpToTerraform(struct.sourceIp)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule}
    */
    var LbListenerRule = /** @class */ (function (_super) {
        __extends(LbListenerRule, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbListenerRuleConfig
        */
        function LbListenerRule(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_listener_rule',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._listenerArn = config.listenerArn;
            _this._priority = config.priority;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._action = config.action;
            _this._condition = config.condition;
            return _this;
        }
        Object.defineProperty(LbListenerRule.prototype, "arn", {
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
        Object.defineProperty(LbListenerRule.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "listenerArn", {
            get: function () {
                return this.getStringAttribute('listener_arn');
            },
            set: function (value) {
                this._listenerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "listenerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._listenerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "priority", {
            get: function () {
                return this.getNumberAttribute('priority');
            },
            set: function (value) {
                this._priority = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRule.prototype.resetPriority = function () {
            this._priority = undefined;
        };
        Object.defineProperty(LbListenerRule.prototype, "priorityInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._priority;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRule.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(LbListenerRule.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        LbListenerRule.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(LbListenerRule.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "action", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('action');
            },
            set: function (value) {
                this._action = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "actionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._action;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "condition", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('condition');
            },
            set: function (value) {
                this._condition = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbListenerRule.prototype, "conditionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._condition;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbListenerRule.prototype.synthesizeAttributes = function () {
            return {
                listener_arn: cdktf.stringToTerraform(this._listenerArn),
                priority: cdktf.numberToTerraform(this._priority),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                action: cdktf.listMapper(lbListenerRuleActionToTerraform)(this._action),
                condition: cdktf.listMapper(lbListenerRuleConditionToTerraform)(this._condition)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbListenerRule.tfResourceType = "aws_lb_listener_rule";
        return LbListenerRule;
    }(cdktf.TerraformResource));
    ELB.LbListenerRule = LbListenerRule;
    function lbSslNegotiationPolicyAttributeToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            value: cdktf.stringToTerraform(struct.value)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy}
    */
    var LbSslNegotiationPolicy = /** @class */ (function (_super) {
        __extends(LbSslNegotiationPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbSslNegotiationPolicyConfig
        */
        function LbSslNegotiationPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_ssl_negotiation_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._lbPort = config.lbPort;
            _this._loadBalancer = config.loadBalancer;
            _this._name = config.name;
            _this._attribute = config.attribute;
            return _this;
        }
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "lbPort", {
            get: function () {
                return this.getNumberAttribute('lb_port');
            },
            set: function (value) {
                this._lbPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "lbPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._lbPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "loadBalancer", {
            get: function () {
                return this.getStringAttribute('load_balancer');
            },
            set: function (value) {
                this._loadBalancer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "loadBalancerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "attribute", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('attribute');
            },
            set: function (value) {
                this._attribute = value;
            },
            enumerable: false,
            configurable: true
        });
        LbSslNegotiationPolicy.prototype.resetAttribute = function () {
            this._attribute = undefined;
        };
        Object.defineProperty(LbSslNegotiationPolicy.prototype, "attributeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._attribute;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbSslNegotiationPolicy.prototype.synthesizeAttributes = function () {
            return {
                lb_port: cdktf.numberToTerraform(this._lbPort),
                load_balancer: cdktf.stringToTerraform(this._loadBalancer),
                name: cdktf.stringToTerraform(this._name),
                attribute: cdktf.listMapper(lbSslNegotiationPolicyAttributeToTerraform)(this._attribute)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbSslNegotiationPolicy.tfResourceType = "aws_lb_ssl_negotiation_policy";
        return LbSslNegotiationPolicy;
    }(cdktf.TerraformResource));
    ELB.LbSslNegotiationPolicy = LbSslNegotiationPolicy;
    function lbTargetGroupHealthCheckToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            enabled: cdktf.booleanToTerraform(struct.enabled),
            healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
            interval: cdktf.numberToTerraform(struct.interval),
            matcher: cdktf.stringToTerraform(struct.matcher),
            path: cdktf.stringToTerraform(struct.path),
            port: cdktf.stringToTerraform(struct.port),
            protocol: cdktf.stringToTerraform(struct.protocol),
            timeout: cdktf.numberToTerraform(struct.timeout),
            unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
        };
    }
    var LbTargetGroupHealthCheckOutputReference = /** @class */ (function (_super) {
        __extends(LbTargetGroupHealthCheckOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbTargetGroupHealthCheckOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "healthyThreshold", {
            get: function () {
                return this.getNumberAttribute('healthy_threshold');
            },
            set: function (value) {
                this._healthyThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetHealthyThreshold = function () {
            this._healthyThreshold = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "healthyThresholdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._healthyThreshold;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "interval", {
            get: function () {
                return this.getNumberAttribute('interval');
            },
            set: function (value) {
                this._interval = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetInterval = function () {
            this._interval = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "intervalInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._interval;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "matcher", {
            get: function () {
                return this.getStringAttribute('matcher');
            },
            set: function (value) {
                this._matcher = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetMatcher = function () {
            this._matcher = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "matcherInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._matcher;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "path", {
            get: function () {
                return this.getStringAttribute('path');
            },
            set: function (value) {
                this._path = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetPath = function () {
            this._path = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "pathInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._path;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "port", {
            get: function () {
                return this.getStringAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "timeout", {
            get: function () {
                return this.getNumberAttribute('timeout');
            },
            set: function (value) {
                this._timeout = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetTimeout = function () {
            this._timeout = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "timeoutInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._timeout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "unhealthyThreshold", {
            get: function () {
                return this.getNumberAttribute('unhealthy_threshold');
            },
            set: function (value) {
                this._unhealthyThreshold = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupHealthCheckOutputReference.prototype.resetUnhealthyThreshold = function () {
            this._unhealthyThreshold = undefined;
        };
        Object.defineProperty(LbTargetGroupHealthCheckOutputReference.prototype, "unhealthyThresholdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._unhealthyThreshold;
            },
            enumerable: false,
            configurable: true
        });
        return LbTargetGroupHealthCheckOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbTargetGroupHealthCheckOutputReference = LbTargetGroupHealthCheckOutputReference;
    function lbTargetGroupStickinessToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            cookie_duration: cdktf.numberToTerraform(struct.cookieDuration),
            cookie_name: cdktf.stringToTerraform(struct.cookieName),
            enabled: cdktf.booleanToTerraform(struct.enabled),
            type: cdktf.stringToTerraform(struct.type)
        };
    }
    var LbTargetGroupStickinessOutputReference = /** @class */ (function (_super) {
        __extends(LbTargetGroupStickinessOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function LbTargetGroupStickinessOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "cookieDuration", {
            get: function () {
                return this.getNumberAttribute('cookie_duration');
            },
            set: function (value) {
                this._cookieDuration = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupStickinessOutputReference.prototype.resetCookieDuration = function () {
            this._cookieDuration = undefined;
        };
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "cookieDurationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieDuration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "cookieName", {
            get: function () {
                return this.getStringAttribute('cookie_name');
            },
            set: function (value) {
                this._cookieName = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupStickinessOutputReference.prototype.resetCookieName = function () {
            this._cookieName = undefined;
        };
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "cookieNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._cookieName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "enabled", {
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            set: function (value) {
                this._enabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupStickinessOutputReference.prototype.resetEnabled = function () {
            this._enabled = undefined;
        };
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "enabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._enabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupStickinessOutputReference.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        return LbTargetGroupStickinessOutputReference;
    }(cdktf.ComplexObject));
    ELB.LbTargetGroupStickinessOutputReference = LbTargetGroupStickinessOutputReference;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}
    */
    var LbTargetGroup = /** @class */ (function (_super) {
        __extends(LbTargetGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbTargetGroupConfig = {}
        */
        function LbTargetGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_target_group',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__healthCheckOutput = new LbTargetGroupHealthCheckOutputReference(_this, "health_check", true);
            _this.__stickinessOutput = new LbTargetGroupStickinessOutputReference(_this, "stickiness", true);
            _this._deregistrationDelay = config.deregistrationDelay;
            _this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
            _this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
            _this._name = config.name;
            _this._namePrefix = config.namePrefix;
            _this._port = config.port;
            _this._preserveClientIp = config.preserveClientIp;
            _this._protocol = config.protocol;
            _this._protocolVersion = config.protocolVersion;
            _this._proxyProtocolV2 = config.proxyProtocolV2;
            _this._slowStart = config.slowStart;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._targetType = config.targetType;
            _this._vpcId = config.vpcId;
            _this._healthCheck = config.healthCheck;
            _this._stickiness = config.stickiness;
            return _this;
        }
        Object.defineProperty(LbTargetGroup.prototype, "arn", {
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
        Object.defineProperty(LbTargetGroup.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "deregistrationDelay", {
            get: function () {
                return this.getStringAttribute('deregistration_delay');
            },
            set: function (value) {
                this._deregistrationDelay = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetDeregistrationDelay = function () {
            this._deregistrationDelay = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "deregistrationDelayInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._deregistrationDelay;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
            get: function () {
                return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
            },
            set: function (value) {
                this._lambdaMultiValueHeadersEnabled = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetLambdaMultiValueHeadersEnabled = function () {
            this._lambdaMultiValueHeadersEnabled = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "lambdaMultiValueHeadersEnabledInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._lambdaMultiValueHeadersEnabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "loadBalancingAlgorithmType", {
            get: function () {
                return this.getStringAttribute('load_balancing_algorithm_type');
            },
            set: function (value) {
                this._loadBalancingAlgorithmType = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetLoadBalancingAlgorithmType = function () {
            this._loadBalancingAlgorithmType = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "loadBalancingAlgorithmTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancingAlgorithmType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "namePrefix", {
            get: function () {
                return this.getStringAttribute('name_prefix');
            },
            set: function (value) {
                this._namePrefix = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetNamePrefix = function () {
            this._namePrefix = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "namePrefixInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._namePrefix;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "preserveClientIp", {
            get: function () {
                return this.getStringAttribute('preserve_client_ip');
            },
            set: function (value) {
                this._preserveClientIp = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetPreserveClientIp = function () {
            this._preserveClientIp = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "preserveClientIpInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._preserveClientIp;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "protocol", {
            get: function () {
                return this.getStringAttribute('protocol');
            },
            set: function (value) {
                this._protocol = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetProtocol = function () {
            this._protocol = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "protocolInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "protocolVersion", {
            get: function () {
                return this.getStringAttribute('protocol_version');
            },
            set: function (value) {
                this._protocolVersion = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetProtocolVersion = function () {
            this._protocolVersion = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "protocolVersionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._protocolVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "proxyProtocolV2", {
            get: function () {
                return this.getBooleanAttribute('proxy_protocol_v2');
            },
            set: function (value) {
                this._proxyProtocolV2 = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetProxyProtocolV2 = function () {
            this._proxyProtocolV2 = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "proxyProtocolV2Input", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._proxyProtocolV2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "slowStart", {
            get: function () {
                return this.getNumberAttribute('slow_start');
            },
            set: function (value) {
                this._slowStart = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetSlowStart = function () {
            this._slowStart = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "slowStartInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._slowStart;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "targetType", {
            get: function () {
                return this.getStringAttribute('target_type');
            },
            set: function (value) {
                this._targetType = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetTargetType = function () {
            this._targetType = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "targetTypeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "vpcId", {
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            set: function (value) {
                this._vpcId = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.resetVpcId = function () {
            this._vpcId = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "vpcIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._vpcId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "healthCheck", {
            get: function () {
                return this.__healthCheckOutput;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.putHealthCheck = function (value) {
            this._healthCheck = value;
        };
        LbTargetGroup.prototype.resetHealthCheck = function () {
            this._healthCheck = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "healthCheckInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._healthCheck;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroup.prototype, "stickiness", {
            get: function () {
                return this.__stickinessOutput;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroup.prototype.putStickiness = function (value) {
            this._stickiness = value;
        };
        LbTargetGroup.prototype.resetStickiness = function () {
            this._stickiness = undefined;
        };
        Object.defineProperty(LbTargetGroup.prototype, "stickinessInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stickiness;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbTargetGroup.prototype.synthesizeAttributes = function () {
            return {
                deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
                lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
                load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
                name: cdktf.stringToTerraform(this._name),
                name_prefix: cdktf.stringToTerraform(this._namePrefix),
                port: cdktf.numberToTerraform(this._port),
                preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
                protocol: cdktf.stringToTerraform(this._protocol),
                protocol_version: cdktf.stringToTerraform(this._protocolVersion),
                proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
                slow_start: cdktf.numberToTerraform(this._slowStart),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                target_type: cdktf.stringToTerraform(this._targetType),
                vpc_id: cdktf.stringToTerraform(this._vpcId),
                health_check: lbTargetGroupHealthCheckToTerraform(this._healthCheck),
                stickiness: lbTargetGroupStickinessToTerraform(this._stickiness)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbTargetGroup.tfResourceType = "aws_lb_target_group";
        return LbTargetGroup;
    }(cdktf.TerraformResource));
    ELB.LbTargetGroup = LbTargetGroup;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment}
    */
    var LbTargetGroupAttachment = /** @class */ (function (_super) {
        __extends(LbTargetGroupAttachment, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LbTargetGroupAttachmentConfig
        */
        function LbTargetGroupAttachment(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_target_group_attachment',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._availabilityZone = config.availabilityZone;
            _this._port = config.port;
            _this._targetGroupArn = config.targetGroupArn;
            _this._targetId = config.targetId;
            return _this;
        }
        Object.defineProperty(LbTargetGroupAttachment.prototype, "availabilityZone", {
            get: function () {
                return this.getStringAttribute('availability_zone');
            },
            set: function (value) {
                this._availabilityZone = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupAttachment.prototype.resetAvailabilityZone = function () {
            this._availabilityZone = undefined;
        };
        Object.defineProperty(LbTargetGroupAttachment.prototype, "availabilityZoneInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._availabilityZone;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        LbTargetGroupAttachment.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(LbTargetGroupAttachment.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "targetGroupArn", {
            get: function () {
                return this.getStringAttribute('target_group_arn');
            },
            set: function (value) {
                this._targetGroupArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "targetGroupArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetGroupArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "targetId", {
            get: function () {
                return this.getStringAttribute('target_id');
            },
            set: function (value) {
                this._targetId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LbTargetGroupAttachment.prototype, "targetIdInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetId;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LbTargetGroupAttachment.prototype.synthesizeAttributes = function () {
            return {
                availability_zone: cdktf.stringToTerraform(this._availabilityZone),
                port: cdktf.numberToTerraform(this._port),
                target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
                target_id: cdktf.stringToTerraform(this._targetId)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LbTargetGroupAttachment.tfResourceType = "aws_lb_target_group_attachment";
        return LbTargetGroupAttachment;
    }(cdktf.TerraformResource));
    ELB.LbTargetGroupAttachment = LbTargetGroupAttachment;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy}
    */
    var LoadBalancerBackendServerPolicy = /** @class */ (function (_super) {
        __extends(LoadBalancerBackendServerPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LoadBalancerBackendServerPolicyConfig
        */
        function LoadBalancerBackendServerPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_load_balancer_backend_server_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._instancePort = config.instancePort;
            _this._loadBalancerName = config.loadBalancerName;
            _this._policyNames = config.policyNames;
            return _this;
        }
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "instancePort", {
            get: function () {
                return this.getNumberAttribute('instance_port');
            },
            set: function (value) {
                this._instancePort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "instancePortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instancePort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "loadBalancerName", {
            get: function () {
                return this.getStringAttribute('load_balancer_name');
            },
            set: function (value) {
                this._loadBalancerName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "loadBalancerNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "policyNames", {
            get: function () {
                return this.getListAttribute('policy_names');
            },
            set: function (value) {
                this._policyNames = value;
            },
            enumerable: false,
            configurable: true
        });
        LoadBalancerBackendServerPolicy.prototype.resetPolicyNames = function () {
            this._policyNames = undefined;
        };
        Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "policyNamesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policyNames;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LoadBalancerBackendServerPolicy.prototype.synthesizeAttributes = function () {
            return {
                instance_port: cdktf.numberToTerraform(this._instancePort),
                load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
                policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LoadBalancerBackendServerPolicy.tfResourceType = "aws_load_balancer_backend_server_policy";
        return LoadBalancerBackendServerPolicy;
    }(cdktf.TerraformResource));
    ELB.LoadBalancerBackendServerPolicy = LoadBalancerBackendServerPolicy;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy}
    */
    var LoadBalancerListenerPolicy = /** @class */ (function (_super) {
        __extends(LoadBalancerListenerPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LoadBalancerListenerPolicyConfig
        */
        function LoadBalancerListenerPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_load_balancer_listener_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._loadBalancerName = config.loadBalancerName;
            _this._loadBalancerPort = config.loadBalancerPort;
            _this._policyNames = config.policyNames;
            return _this;
        }
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerName", {
            get: function () {
                return this.getStringAttribute('load_balancer_name');
            },
            set: function (value) {
                this._loadBalancerName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerPort", {
            get: function () {
                return this.getNumberAttribute('load_balancer_port');
            },
            set: function (value) {
                this._loadBalancerPort = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerPortInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerPort;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "policyNames", {
            get: function () {
                return this.getListAttribute('policy_names');
            },
            set: function (value) {
                this._policyNames = value;
            },
            enumerable: false,
            configurable: true
        });
        LoadBalancerListenerPolicy.prototype.resetPolicyNames = function () {
            this._policyNames = undefined;
        };
        Object.defineProperty(LoadBalancerListenerPolicy.prototype, "policyNamesInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policyNames;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LoadBalancerListenerPolicy.prototype.synthesizeAttributes = function () {
            return {
                load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
                load_balancer_port: cdktf.numberToTerraform(this._loadBalancerPort),
                policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LoadBalancerListenerPolicy.tfResourceType = "aws_load_balancer_listener_policy";
        return LoadBalancerListenerPolicy;
    }(cdktf.TerraformResource));
    ELB.LoadBalancerListenerPolicy = LoadBalancerListenerPolicy;
    function loadBalancerPolicyPolicyAttributeToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            value: cdktf.stringToTerraform(struct.value)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy}
    */
    var LoadBalancerPolicy = /** @class */ (function (_super) {
        __extends(LoadBalancerPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options LoadBalancerPolicyConfig
        */
        function LoadBalancerPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_load_balancer_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._loadBalancerName = config.loadBalancerName;
            _this._policyName = config.policyName;
            _this._policyTypeName = config.policyTypeName;
            _this._policyAttribute = config.policyAttribute;
            return _this;
        }
        Object.defineProperty(LoadBalancerPolicy.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "loadBalancerName", {
            get: function () {
                return this.getStringAttribute('load_balancer_name');
            },
            set: function (value) {
                this._loadBalancerName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "loadBalancerNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyName", {
            get: function () {
                return this.getStringAttribute('policy_name');
            },
            set: function (value) {
                this._policyName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policyName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyTypeName", {
            get: function () {
                return this.getStringAttribute('policy_type_name');
            },
            set: function (value) {
                this._policyTypeName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyTypeNameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policyTypeName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyAttribute", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('policy_attribute');
            },
            set: function (value) {
                this._policyAttribute = value;
            },
            enumerable: false,
            configurable: true
        });
        LoadBalancerPolicy.prototype.resetPolicyAttribute = function () {
            this._policyAttribute = undefined;
        };
        Object.defineProperty(LoadBalancerPolicy.prototype, "policyAttributeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._policyAttribute;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        LoadBalancerPolicy.prototype.synthesizeAttributes = function () {
            return {
                load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
                policy_name: cdktf.stringToTerraform(this._policyName),
                policy_type_name: cdktf.stringToTerraform(this._policyTypeName),
                policy_attribute: cdktf.listMapper(loadBalancerPolicyPolicyAttributeToTerraform)(this._policyAttribute)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        LoadBalancerPolicy.tfResourceType = "aws_load_balancer_policy";
        return LoadBalancerPolicy;
    }(cdktf.TerraformResource));
    ELB.LoadBalancerPolicy = LoadBalancerPolicy;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy}
    */
    var ProxyProtocolPolicy = /** @class */ (function (_super) {
        __extends(ProxyProtocolPolicy, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options ProxyProtocolPolicyConfig
        */
        function ProxyProtocolPolicy(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_proxy_protocol_policy',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._instancePorts = config.instancePorts;
            _this._loadBalancer = config.loadBalancer;
            return _this;
        }
        Object.defineProperty(ProxyProtocolPolicy.prototype, "id", {
            // ==========
            // ATTRIBUTES
            // ==========
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProxyProtocolPolicy.prototype, "instancePorts", {
            get: function () {
                return this.getListAttribute('instance_ports');
            },
            set: function (value) {
                this._instancePorts = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProxyProtocolPolicy.prototype, "instancePortsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._instancePorts;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProxyProtocolPolicy.prototype, "loadBalancer", {
            get: function () {
                return this.getStringAttribute('load_balancer');
            },
            set: function (value) {
                this._loadBalancer = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProxyProtocolPolicy.prototype, "loadBalancerInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancer;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        ProxyProtocolPolicy.prototype.synthesizeAttributes = function () {
            return {
                instance_ports: cdktf.listMapper(cdktf.stringToTerraform)(this._instancePorts),
                load_balancer: cdktf.stringToTerraform(this._loadBalancer)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        ProxyProtocolPolicy.tfResourceType = "aws_proxy_protocol_policy";
        return ProxyProtocolPolicy;
    }(cdktf.TerraformResource));
    ELB.ProxyProtocolPolicy = ProxyProtocolPolicy;
    var DataAwsAlbAccessLogs = /** @class */ (function (_super) {
        __extends(DataAwsAlbAccessLogs, _super);
        function DataAwsAlbAccessLogs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbAccessLogs.prototype, "bucket", {
            // bucket - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('bucket');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbAccessLogs.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbAccessLogs.prototype, "prefix", {
            // prefix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('prefix');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbAccessLogs;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbAccessLogs = DataAwsAlbAccessLogs;
    var DataAwsAlbSubnetMapping = /** @class */ (function (_super) {
        __extends(DataAwsAlbSubnetMapping, _super);
        function DataAwsAlbSubnetMapping() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "allocationId", {
            // allocation_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('allocation_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "ipv6Address", {
            // ipv6_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "outpostId", {
            // outpost_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outpost_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "privateIpv4Address", {
            // private_ipv4_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_ipv4_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "subnetId", {
            // subnet_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbSubnetMapping;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbSubnetMapping = DataAwsAlbSubnetMapping;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}
    */
    var DataAwsAlb = /** @class */ (function (_super) {
        __extends(DataAwsAlb, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsAlbConfig = {}
        */
        function DataAwsAlb(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // access_logs - computed: true, optional: false, required: false
        DataAwsAlb.prototype.accessLogs = function (index) {
            return new DataAwsAlbAccessLogs(this, 'access_logs', index);
        };
        Object.defineProperty(DataAwsAlb.prototype, "arn", {
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "customerOwnedIpv4Pool", {
            // customer_owned_ipv4_pool - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "dropInvalidHeaderFields", {
            // drop_invalid_header_fields - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('drop_invalid_header_fields');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "enableDeletionProtection", {
            // enable_deletion_protection - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_deletion_protection');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "enableHttp2", {
            // enable_http2 - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_http2');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "idleTimeout", {
            // idle_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('idle_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "internal", {
            // internal - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('internal');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "ipAddressType", {
            // ip_address_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ip_address_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "loadBalancerType", {
            // load_balancer_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('load_balancer_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlb.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(DataAwsAlb.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "securityGroups", {
            // security_groups - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('security_groups');
            },
            enumerable: false,
            configurable: true
        });
        // subnet_mapping - computed: true, optional: false, required: false
        DataAwsAlb.prototype.subnetMapping = function (index) {
            return new DataAwsAlbSubnetMapping(this, 'subnet_mapping', index);
        };
        Object.defineProperty(DataAwsAlb.prototype, "subnets", {
            // subnets - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('subnets');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlb.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsAlb.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlb.prototype, "zoneId", {
            // zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('zone_id');
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsAlb.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsAlb.tfResourceType = "aws_alb";
        return DataAwsAlb;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsAlb = DataAwsAlb;
    var DataAwsAlbListenerDefaultActionAuthenticateCognito = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionAuthenticateCognito, _super);
        function DataAwsAlbListenerDefaultActionAuthenticateCognito() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "authenticationRequestExtraParams", {
            // authentication_request_extra_params - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "onUnauthenticatedRequest", {
            // on_unauthenticated_request - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "scope", {
            // scope - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('scope');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "sessionCookieName", {
            // session_cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "sessionTimeout", {
            // session_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolArn", {
            // user_pool_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolClientId", {
            // user_pool_client_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolDomain", {
            // user_pool_domain - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionAuthenticateCognito;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionAuthenticateCognito = DataAwsAlbListenerDefaultActionAuthenticateCognito;
    var DataAwsAlbListenerDefaultActionAuthenticateOidc = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionAuthenticateOidc, _super);
        function DataAwsAlbListenerDefaultActionAuthenticateOidc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "authenticationRequestExtraParams", {
            // authentication_request_extra_params - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "authorizationEndpoint", {
            // authorization_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "clientId", {
            // client_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('client_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "clientSecret", {
            // client_secret - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "issuer", {
            // issuer - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('issuer');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "onUnauthenticatedRequest", {
            // on_unauthenticated_request - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "scope", {
            // scope - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('scope');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "sessionCookieName", {
            // session_cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "sessionTimeout", {
            // session_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "tokenEndpoint", {
            // token_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "userInfoEndpoint", {
            // user_info_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionAuthenticateOidc;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionAuthenticateOidc = DataAwsAlbListenerDefaultActionAuthenticateOidc;
    var DataAwsAlbListenerDefaultActionFixedResponse = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionFixedResponse, _super);
        function DataAwsAlbListenerDefaultActionFixedResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "contentType", {
            // content_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('content_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "messageBody", {
            // message_body - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('message_body');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "statusCode", {
            // status_code - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status_code');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionFixedResponse;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionFixedResponse = DataAwsAlbListenerDefaultActionFixedResponse;
    var DataAwsAlbListenerDefaultActionForwardStickiness = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionForwardStickiness, _super);
        function DataAwsAlbListenerDefaultActionForwardStickiness() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionForwardStickiness.prototype, "duration", {
            // duration - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('duration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionForwardStickiness.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionForwardStickiness;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionForwardStickiness = DataAwsAlbListenerDefaultActionForwardStickiness;
    var DataAwsAlbListenerDefaultActionForwardTargetGroup = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionForwardTargetGroup, _super);
        function DataAwsAlbListenerDefaultActionForwardTargetGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionForwardTargetGroup.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionForwardTargetGroup.prototype, "weight", {
            // weight - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('weight');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionForwardTargetGroup;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionForwardTargetGroup = DataAwsAlbListenerDefaultActionForwardTargetGroup;
    var DataAwsAlbListenerDefaultActionForward = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionForward, _super);
        function DataAwsAlbListenerDefaultActionForward() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionForward.prototype, "stickiness", {
            // stickiness - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('stickiness');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionForward.prototype, "targetGroup", {
            // target_group - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionForward;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionForward = DataAwsAlbListenerDefaultActionForward;
    var DataAwsAlbListenerDefaultActionRedirect = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultActionRedirect, _super);
        function DataAwsAlbListenerDefaultActionRedirect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "host", {
            // host - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('host');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "path", {
            // path - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('path');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "query", {
            // query - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('query');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "statusCode", {
            // status_code - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status_code');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultActionRedirect;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultActionRedirect = DataAwsAlbListenerDefaultActionRedirect;
    var DataAwsAlbListenerDefaultAction = /** @class */ (function (_super) {
        __extends(DataAwsAlbListenerDefaultAction, _super);
        function DataAwsAlbListenerDefaultAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "authenticateCognito", {
            // authenticate_cognito - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authenticate_cognito');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "authenticateOidc", {
            // authenticate_oidc - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authenticate_oidc');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "fixedResponse", {
            // fixed_response - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('fixed_response');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "forward", {
            // forward - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('forward');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "order", {
            // order - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('order');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "redirect", {
            // redirect - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('redirect');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "targetGroupArn", {
            // target_group_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('target_group_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbListenerDefaultAction;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbListenerDefaultAction = DataAwsAlbListenerDefaultAction;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener}
    */
    var DataAwsAlbListener = /** @class */ (function (_super) {
        __extends(DataAwsAlbListener, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsAlbListenerConfig = {}
        */
        function DataAwsAlbListener(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_listener',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._loadBalancerArn = config.loadBalancerArn;
            _this._port = config.port;
            _this._tags = config.tags;
            return _this;
        }
        Object.defineProperty(DataAwsAlbListener.prototype, "alpnPolicy", {
            // ==========
            // ATTRIBUTES
            // ==========
            // alpn_policy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('alpn_policy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "arn", {
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "certificateArn", {
            // certificate_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            enumerable: false,
            configurable: true
        });
        // default_action - computed: true, optional: false, required: false
        DataAwsAlbListener.prototype.defaultAction = function (index) {
            return new DataAwsAlbListenerDefaultAction(this, 'default_action', index);
        };
        Object.defineProperty(DataAwsAlbListener.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "loadBalancerArn", {
            get: function () {
                return this.getStringAttribute('load_balancer_arn');
            },
            set: function (value) {
                this._loadBalancerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlbListener.prototype.resetLoadBalancerArn = function () {
            this._loadBalancerArn = undefined;
        };
        Object.defineProperty(DataAwsAlbListener.prototype, "loadBalancerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlbListener.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(DataAwsAlbListener.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "sslPolicy", {
            // ssl_policy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ssl_policy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbListener.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlbListener.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsAlbListener.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsAlbListener.prototype.synthesizeAttributes = function () {
            return {
                load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
                port: cdktf.numberToTerraform(this._port),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsAlbListener.tfResourceType = "aws_alb_listener";
        return DataAwsAlbListener;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsAlbListener = DataAwsAlbListener;
    var DataAwsAlbTargetGroupHealthCheck = /** @class */ (function (_super) {
        __extends(DataAwsAlbTargetGroupHealthCheck, _super);
        function DataAwsAlbTargetGroupHealthCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "healthyThreshold", {
            // healthy_threshold - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('healthy_threshold');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "interval", {
            // interval - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('interval');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "matcher", {
            // matcher - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('matcher');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "path", {
            // path - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('path');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "timeout", {
            // timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupHealthCheck.prototype, "unhealthyThreshold", {
            // unhealthy_threshold - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('unhealthy_threshold');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbTargetGroupHealthCheck;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbTargetGroupHealthCheck = DataAwsAlbTargetGroupHealthCheck;
    var DataAwsAlbTargetGroupStickiness = /** @class */ (function (_super) {
        __extends(DataAwsAlbTargetGroupStickiness, _super);
        function DataAwsAlbTargetGroupStickiness() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "cookieDuration", {
            // cookie_duration - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('cookie_duration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "cookieName", {
            // cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroupStickiness.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsAlbTargetGroupStickiness;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsAlbTargetGroupStickiness = DataAwsAlbTargetGroupStickiness;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group}
    */
    var DataAwsAlbTargetGroup = /** @class */ (function (_super) {
        __extends(DataAwsAlbTargetGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsAlbTargetGroupConfig = {}
        */
        function DataAwsAlbTargetGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_alb_target_group',
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
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "deregistrationDelay", {
            // deregistration_delay - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('deregistration_delay');
            },
            enumerable: false,
            configurable: true
        });
        // health_check - computed: true, optional: false, required: false
        DataAwsAlbTargetGroup.prototype.healthCheck = function (index) {
            return new DataAwsAlbTargetGroupHealthCheck(this, 'health_check', index);
        };
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
            // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "loadBalancingAlgorithmType", {
            // load_balancing_algorithm_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('load_balancing_algorithm_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlbTargetGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "preserveClientIp", {
            // preserve_client_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('preserve_client_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "protocolVersion", {
            // protocol_version - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol_version');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "proxyProtocolV2", {
            // proxy_protocol_v2 - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('proxy_protocol_v2');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "slowStart", {
            // slow_start - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('slow_start');
            },
            enumerable: false,
            configurable: true
        });
        // stickiness - computed: true, optional: false, required: false
        DataAwsAlbTargetGroup.prototype.stickiness = function (index) {
            return new DataAwsAlbTargetGroupStickiness(this, 'stickiness', index);
        };
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsAlbTargetGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "targetType", {
            // target_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('target_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsAlbTargetGroup.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsAlbTargetGroup.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsAlbTargetGroup.tfResourceType = "aws_alb_target_group";
        return DataAwsAlbTargetGroup;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsAlbTargetGroup = DataAwsAlbTargetGroup;
    var DataAwsLbAccessLogs = /** @class */ (function (_super) {
        __extends(DataAwsLbAccessLogs, _super);
        function DataAwsLbAccessLogs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbAccessLogs.prototype, "bucket", {
            // bucket - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('bucket');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbAccessLogs.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbAccessLogs.prototype, "prefix", {
            // prefix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('prefix');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbAccessLogs;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbAccessLogs = DataAwsLbAccessLogs;
    var DataAwsLbSubnetMapping = /** @class */ (function (_super) {
        __extends(DataAwsLbSubnetMapping, _super);
        function DataAwsLbSubnetMapping() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbSubnetMapping.prototype, "allocationId", {
            // allocation_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('allocation_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbSubnetMapping.prototype, "ipv6Address", {
            // ipv6_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ipv6_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbSubnetMapping.prototype, "outpostId", {
            // outpost_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('outpost_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbSubnetMapping.prototype, "privateIpv4Address", {
            // private_ipv4_address - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('private_ipv4_address');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbSubnetMapping.prototype, "subnetId", {
            // subnet_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('subnet_id');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbSubnetMapping;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbSubnetMapping = DataAwsLbSubnetMapping;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb}
    */
    var DataAwsLb = /** @class */ (function (_super) {
        __extends(DataAwsLb, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsLbConfig = {}
        */
        function DataAwsLb(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // access_logs - computed: true, optional: false, required: false
        DataAwsLb.prototype.accessLogs = function (index) {
            return new DataAwsLbAccessLogs(this, 'access_logs', index);
        };
        Object.defineProperty(DataAwsLb.prototype, "arn", {
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "customerOwnedIpv4Pool", {
            // customer_owned_ipv4_pool - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('customer_owned_ipv4_pool');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "dnsName", {
            // dns_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('dns_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "dropInvalidHeaderFields", {
            // drop_invalid_header_fields - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('drop_invalid_header_fields');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "enableDeletionProtection", {
            // enable_deletion_protection - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_deletion_protection');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "enableHttp2", {
            // enable_http2 - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enable_http2');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "idleTimeout", {
            // idle_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('idle_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "internal", {
            // internal - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('internal');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "ipAddressType", {
            // ip_address_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ip_address_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "loadBalancerType", {
            // load_balancer_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('load_balancer_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLb.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(DataAwsLb.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "securityGroups", {
            // security_groups - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('security_groups');
            },
            enumerable: false,
            configurable: true
        });
        // subnet_mapping - computed: true, optional: false, required: false
        DataAwsLb.prototype.subnetMapping = function (index) {
            return new DataAwsLbSubnetMapping(this, 'subnet_mapping', index);
        };
        Object.defineProperty(DataAwsLb.prototype, "subnets", {
            // subnets - computed: true, optional: false, required: false
            get: function () {
                return this.getListAttribute('subnets');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLb.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsLb.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLb.prototype, "zoneId", {
            // zone_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('zone_id');
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsLb.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsLb.tfResourceType = "aws_lb";
        return DataAwsLb;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsLb = DataAwsLb;
    var DataAwsLbListenerDefaultActionAuthenticateCognito = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionAuthenticateCognito, _super);
        function DataAwsLbListenerDefaultActionAuthenticateCognito() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "authenticationRequestExtraParams", {
            // authentication_request_extra_params - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "onUnauthenticatedRequest", {
            // on_unauthenticated_request - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "scope", {
            // scope - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('scope');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "sessionCookieName", {
            // session_cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "sessionTimeout", {
            // session_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolArn", {
            // user_pool_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolClientId", {
            // user_pool_client_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_client_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolDomain", {
            // user_pool_domain - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_pool_domain');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionAuthenticateCognito;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionAuthenticateCognito = DataAwsLbListenerDefaultActionAuthenticateCognito;
    var DataAwsLbListenerDefaultActionAuthenticateOidc = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionAuthenticateOidc, _super);
        function DataAwsLbListenerDefaultActionAuthenticateOidc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "authenticationRequestExtraParams", {
            // authentication_request_extra_params - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authentication_request_extra_params');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "authorizationEndpoint", {
            // authorization_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('authorization_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "clientId", {
            // client_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('client_id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "clientSecret", {
            // client_secret - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('client_secret');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "issuer", {
            // issuer - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('issuer');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "onUnauthenticatedRequest", {
            // on_unauthenticated_request - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('on_unauthenticated_request');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "scope", {
            // scope - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('scope');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "sessionCookieName", {
            // session_cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('session_cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "sessionTimeout", {
            // session_timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('session_timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "tokenEndpoint", {
            // token_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('token_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "userInfoEndpoint", {
            // user_info_endpoint - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('user_info_endpoint');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionAuthenticateOidc;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionAuthenticateOidc = DataAwsLbListenerDefaultActionAuthenticateOidc;
    var DataAwsLbListenerDefaultActionFixedResponse = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionFixedResponse, _super);
        function DataAwsLbListenerDefaultActionFixedResponse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "contentType", {
            // content_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('content_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "messageBody", {
            // message_body - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('message_body');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "statusCode", {
            // status_code - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status_code');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionFixedResponse;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionFixedResponse = DataAwsLbListenerDefaultActionFixedResponse;
    var DataAwsLbListenerDefaultActionForwardStickiness = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionForwardStickiness, _super);
        function DataAwsLbListenerDefaultActionForwardStickiness() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionForwardStickiness.prototype, "duration", {
            // duration - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('duration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionForwardStickiness.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionForwardStickiness;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionForwardStickiness = DataAwsLbListenerDefaultActionForwardStickiness;
    var DataAwsLbListenerDefaultActionForwardTargetGroup = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionForwardTargetGroup, _super);
        function DataAwsLbListenerDefaultActionForwardTargetGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionForwardTargetGroup.prototype, "arn", {
            // arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionForwardTargetGroup.prototype, "weight", {
            // weight - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('weight');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionForwardTargetGroup;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionForwardTargetGroup = DataAwsLbListenerDefaultActionForwardTargetGroup;
    var DataAwsLbListenerDefaultActionForward = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionForward, _super);
        function DataAwsLbListenerDefaultActionForward() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionForward.prototype, "stickiness", {
            // stickiness - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('stickiness');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionForward.prototype, "targetGroup", {
            // target_group - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('target_group');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionForward;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionForward = DataAwsLbListenerDefaultActionForward;
    var DataAwsLbListenerDefaultActionRedirect = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultActionRedirect, _super);
        function DataAwsLbListenerDefaultActionRedirect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "host", {
            // host - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('host');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "path", {
            // path - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('path');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "query", {
            // query - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('query');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "statusCode", {
            // status_code - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('status_code');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultActionRedirect;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultActionRedirect = DataAwsLbListenerDefaultActionRedirect;
    var DataAwsLbListenerDefaultAction = /** @class */ (function (_super) {
        __extends(DataAwsLbListenerDefaultAction, _super);
        function DataAwsLbListenerDefaultAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "authenticateCognito", {
            // authenticate_cognito - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authenticate_cognito');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "authenticateOidc", {
            // authenticate_oidc - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('authenticate_oidc');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "fixedResponse", {
            // fixed_response - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('fixed_response');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "forward", {
            // forward - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('forward');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "order", {
            // order - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('order');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "redirect", {
            // redirect - computed: true, optional: false, required: false
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('redirect');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "targetGroupArn", {
            // target_group_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('target_group_arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbListenerDefaultAction;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbListenerDefaultAction = DataAwsLbListenerDefaultAction;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener}
    */
    var DataAwsLbListener = /** @class */ (function (_super) {
        __extends(DataAwsLbListener, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsLbListenerConfig = {}
        */
        function DataAwsLbListener(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_listener',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._loadBalancerArn = config.loadBalancerArn;
            _this._port = config.port;
            _this._tags = config.tags;
            return _this;
        }
        Object.defineProperty(DataAwsLbListener.prototype, "alpnPolicy", {
            // ==========
            // ATTRIBUTES
            // ==========
            // alpn_policy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('alpn_policy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "arn", {
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "certificateArn", {
            // certificate_arn - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('certificate_arn');
            },
            enumerable: false,
            configurable: true
        });
        // default_action - computed: true, optional: false, required: false
        DataAwsLbListener.prototype.defaultAction = function (index) {
            return new DataAwsLbListenerDefaultAction(this, 'default_action', index);
        };
        Object.defineProperty(DataAwsLbListener.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "loadBalancerArn", {
            get: function () {
                return this.getStringAttribute('load_balancer_arn');
            },
            set: function (value) {
                this._loadBalancerArn = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLbListener.prototype.resetLoadBalancerArn = function () {
            this._loadBalancerArn = undefined;
        };
        Object.defineProperty(DataAwsLbListener.prototype, "loadBalancerArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._loadBalancerArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "port", {
            get: function () {
                return this.getNumberAttribute('port');
            },
            set: function (value) {
                this._port = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLbListener.prototype.resetPort = function () {
            this._port = undefined;
        };
        Object.defineProperty(DataAwsLbListener.prototype, "portInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "sslPolicy", {
            // ssl_policy - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('ssl_policy');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbListener.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLbListener.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsLbListener.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsLbListener.prototype.synthesizeAttributes = function () {
            return {
                load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
                port: cdktf.numberToTerraform(this._port),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsLbListener.tfResourceType = "aws_lb_listener";
        return DataAwsLbListener;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsLbListener = DataAwsLbListener;
    var DataAwsLbTargetGroupHealthCheck = /** @class */ (function (_super) {
        __extends(DataAwsLbTargetGroupHealthCheck, _super);
        function DataAwsLbTargetGroupHealthCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "healthyThreshold", {
            // healthy_threshold - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('healthy_threshold');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "interval", {
            // interval - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('interval');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "matcher", {
            // matcher - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('matcher');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "path", {
            // path - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('path');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "timeout", {
            // timeout - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('timeout');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupHealthCheck.prototype, "unhealthyThreshold", {
            // unhealthy_threshold - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('unhealthy_threshold');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbTargetGroupHealthCheck;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbTargetGroupHealthCheck = DataAwsLbTargetGroupHealthCheck;
    var DataAwsLbTargetGroupStickiness = /** @class */ (function (_super) {
        __extends(DataAwsLbTargetGroupStickiness, _super);
        function DataAwsLbTargetGroupStickiness() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "cookieDuration", {
            // cookie_duration - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('cookie_duration');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "cookieName", {
            // cookie_name - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('cookie_name');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "enabled", {
            // enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroupStickiness.prototype, "type", {
            // type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('type');
            },
            enumerable: false,
            configurable: true
        });
        return DataAwsLbTargetGroupStickiness;
    }(cdktf.ComplexComputedList));
    ELB.DataAwsLbTargetGroupStickiness = DataAwsLbTargetGroupStickiness;
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group}
    */
    var DataAwsLbTargetGroup = /** @class */ (function (_super) {
        __extends(DataAwsLbTargetGroup, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group} Data Source
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options DataAwsLbTargetGroupConfig = {}
        */
        function DataAwsLbTargetGroup(scope, id, config) {
            if (config === void 0) { config = {}; }
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_lb_target_group',
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
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "arn", {
            // ==========
            // ATTRIBUTES
            // ==========
            // arn - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('arn');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "arnSuffix", {
            // arn_suffix - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('arn_suffix');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "deregistrationDelay", {
            // deregistration_delay - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('deregistration_delay');
            },
            enumerable: false,
            configurable: true
        });
        // health_check - computed: true, optional: false, required: false
        DataAwsLbTargetGroup.prototype.healthCheck = function (index) {
            return new DataAwsLbTargetGroupHealthCheck(this, 'health_check', index);
        };
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "lambdaMultiValueHeadersEnabled", {
            // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "loadBalancingAlgorithmType", {
            // load_balancing_algorithm_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('load_balancing_algorithm_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLbTargetGroup.prototype.resetName = function () {
            this._name = undefined;
        };
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "port", {
            // port - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('port');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "preserveClientIp", {
            // preserve_client_ip - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('preserve_client_ip');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "protocol", {
            // protocol - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "protocolVersion", {
            // protocol_version - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('protocol_version');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "proxyProtocolV2", {
            // proxy_protocol_v2 - computed: true, optional: false, required: false
            get: function () {
                return this.getBooleanAttribute('proxy_protocol_v2');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "slowStart", {
            // slow_start - computed: true, optional: false, required: false
            get: function () {
                return this.getNumberAttribute('slow_start');
            },
            enumerable: false,
            configurable: true
        });
        // stickiness - computed: true, optional: false, required: false
        DataAwsLbTargetGroup.prototype.stickiness = function (index) {
            return new DataAwsLbTargetGroupStickiness(this, 'stickiness', index);
        };
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        DataAwsLbTargetGroup.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "targetType", {
            // target_type - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('target_type');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DataAwsLbTargetGroup.prototype, "vpcId", {
            // vpc_id - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('vpc_id');
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        DataAwsLbTargetGroup.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        DataAwsLbTargetGroup.tfResourceType = "aws_lb_target_group";
        return DataAwsLbTargetGroup;
    }(cdktf.TerraformDataSource));
    ELB.DataAwsLbTargetGroup = DataAwsLbTargetGroup;
})(ELB = exports.ELB || (exports.ELB = {}));
